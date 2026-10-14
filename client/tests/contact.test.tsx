import { act } from 'react';
import { createRoot } from 'react-dom/client';
import Contact from '../src/components/contact/Contact';
import type { ContactSender } from '../src/components/contact/Contact';
import '../src/App.css';
Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true });
const fixture = document.getElementById('fixture')!;
const results = document.getElementById('results')!;
const root = createRoot(fixture);
const config = { serviceId: 'mock-service', templateId: 'mock-template', publicKey: 'mock-public' };
let passed = 0;
let failed = 0;
function check(condition: unknown, label: string) {
    const item = document.createElement('li');
    item.textContent = (condition ? 'PASS: ' : 'FAIL: ') + label;
    item.style.color = condition ? '#206a5c' : '#a0342c';
    results.append(item);
    if (condition)
        passed++;
    else
        failed++;
}
function form() { return fixture.querySelector('form')!; }
function fill(message = 'A synthetic message for an offline test.') {
    (fixture.querySelector('[name=user_name]') as HTMLInputElement).value = 'Test Visitor';
    (fixture.querySelector('[name=user_email]') as HTMLInputElement).value = 'visitor@example.invalid';
    (fixture.querySelector('[name=message]') as HTMLTextAreaElement).value = message;
}
function status() { return fixture.querySelector('[role=status]')!.textContent ?? ''; }
async function render(send: ContactSender, missing = false) {
    await act(async () => root.render(<Contact key={Math.random()} send={send} config={missing ? { serviceId: '', templateId: '', publicKey: '' } : config}/>));
}
async function submit() { await act(async () => form().requestSubmit()); }
async function run() {
    let calls = 0;
    let settle: (value: {
        status: number;
    }) => void = () => { };
    await render(async () => { calls++; return new Promise(resolve => { settle = resolve; }); });
    fill();
    await submit();
    check(status().includes('Sending') && fixture.querySelector('fieldset')!.disabled, 'Pending is announced and fields are disabled.');
    await act(async () => form().dispatchEvent(new Event('submit', { bubbles: true, cancelable: true })));
    check(calls === 1, 'A duplicate submit cannot send another message.');
    check(!status().includes('successfully'), 'No success is shown before a successful response.');
    await act(async () => settle({ status: 200 }));
    check(status().includes('sent successfully') && (fixture.querySelector('[name=message]') as HTMLTextAreaElement).value === '', 'A successful response shows confirmation and resets the form.');
    await render(async () => { throw new Error('Mock network failure'); });
    fill();
    await submit();
    check(status().includes('not sent') && (fixture.querySelector('[name=message]') as HTMLTextAreaElement).value.includes('synthetic'), 'Rejected requests show failure and preserve the draft.');
    check(!fixture.querySelector('fieldset')!.disabled, 'Fields are re-enabled after failure.');
    await render(async () => ({ status: 500 }));
    fill();
    await submit();
    check(status().includes('not sent') && !status().includes('successfully'), 'Even a resolved non-2xx response is treated as failure.');
    calls = 0;
    await render(async () => { calls++; return { status: 200 }; }, true);
    check(fixture.querySelector('fieldset')!.disabled && status().includes('email me directly'), 'Missing configuration disables the form and provides the email fallback.');
    await act(async () => form().dispatchEvent(new Event('submit', { bubbles: true, cancelable: true })));
    check(calls === 0, 'Unconfigured forms never call the sender.');
    await render(async () => { calls++; return { status: 200 }; });
    fill('   ');
    await submit();
    check(calls === 0 && status().includes('not sent'), 'Whitespace-only messages never call the sender.');
    let retries = 0;
    await render(async () => { if (++retries === 1)
        throw new Error('Mock failure'); return { status: 200 }; });
    fill();
    await submit();
    await submit();
    check(retries === 2 && status().includes('sent successfully'), 'A retained draft can be retried successfully.');
    await act(async () => root.unmount());
    document.title = failed ? 'FAIL — contact checks' : 'PASS — contact checks';
    const summary = document.createElement('p');
    summary.id = 'test-summary';
    summary.textContent = passed + ' passed; ' + failed + ' failed. No real email or API calls.';
    results.after(summary);
}
run().catch(error => { check(false, String(error)); document.title = 'FAIL — contact checks'; });
