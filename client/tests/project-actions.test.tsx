import { act } from 'react';
import { createRoot } from 'react-dom/client';
import ProjectActions from '../src/components/portfolio/ProjectActions';
import { projects } from '../src/data/projectsData';
import type { Project } from '../src/data/projectsData';
import '../src/App.css';

Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true });

const fixture = document.getElementById('fixture')!;
const results = document.getElementById('results')!;
const root = createRoot(fixture);
const projectName = 'Offline Project Fixture';
const demoUrl = 'https://demo.example.invalid/fixture';
const sourceUrl = 'https://source.example.invalid/fixture';
let passed = 0;
let failed = 0;

function check(condition: unknown, label: string) {
    const item = document.createElement('li');
    item.textContent = (condition ? 'PASS: ' : 'FAIL: ') + label;
    item.style.color = condition ? '#206a5c' : '#a0342c';
    results.append(item);
    if (condition) passed++;
    else failed++;
}

async function render(overrides: Partial<Project> = {}) {
    const project: Project = {
        ...projects[0],
        name: projectName,
        demo: undefined,
        source: undefined,
        featuredImage: undefined,
        gallery: undefined,
        ...overrides,
    };
    await act(async () => root.render(<ProjectActions project={project}/>));
}

function action(label: string) {
    return Array.from(fixture.querySelectorAll('a')).find(link => link.textContent?.includes(label));
}

function hasSafeDestination(link: HTMLAnchorElement | undefined, destination: string) {
    return link?.getAttribute('href') === destination
        && link.target === '_blank'
        && link.relList.contains('noreferrer');
}

function hasContext(link: HTMLAnchorElement | undefined) {
    const label = link?.getAttribute('aria-label') ?? link?.textContent ?? '';
    const hiddenText = Array.from(link?.querySelectorAll('.sr-only') ?? [])
        .map(element => element.textContent).join(' ');
    return label.includes(projectName)
        && /opens in (?:a )?new tab/i.test(label)
        && hiddenText.includes(projectName)
        && /opens in (?:a )?new tab/i.test(hiddenText);
}

function hasNoEmptyLinks() {
    return Array.from(fixture.querySelectorAll('a')).every(link => {
        const href = link.getAttribute('href')?.trim();
        return Boolean(href) && href !== '#';
    });
}

async function run() {
    await render({ demo: demoUrl, source: sourceUrl });
    const demo = action('Try live demo');
    const source = action('View source');
    check(hasSafeDestination(demo, demoUrl), 'The demo action uses its configured destination and safe new-tab attributes.');
    check(hasSafeDestination(source, sourceUrl), 'The source action uses its configured destination and safe new-tab attributes.');
    check(hasContext(demo) && hasContext(source), 'Both action labels include the project name and new-tab notice for screen readers.');
    check(fixture.querySelectorAll('a').length === 2 && hasNoEmptyLinks(), 'A project with both destinations renders two usable links.');

    await render({ source: sourceUrl });
    check(!action('Try live demo') && hasSafeDestination(action('View source'), sourceUrl), 'A source-only project has a source action without a demo action.');
    check(hasNoEmptyLinks(), 'An absent demo never creates an empty link.');

    await render({ demo: demoUrl });
    check(!action('View source') && hasSafeDestination(action('Try live demo'), demoUrl), 'A demo-only project has a demo action without a source action.');
    check(hasNoEmptyLinks(), 'An absent source never creates an empty link.');

    await render();
    check(fixture.childElementCount === 0, 'A project without destinations or screenshot evidence renders no action wrapper.');

    await render({ demo: '', source: '' });
    check(fixture.childElementCount === 0 && hasNoEmptyLinks(), 'Empty destination values render no actions or placeholder links.');

    const featuredImage = projects[0].featuredImage;
    const galleryImage = projects[0].gallery?.find(image => image.src !== featuredImage?.src);
    check(Boolean(featuredImage && galleryImage), 'The existing project provides featured and gallery screenshot fixtures.');
    if (featuredImage && galleryImage) {
        await render({ featuredImage, gallery: projects[0].gallery });
        const disclosure = fixture.querySelector('details');
        const summary = disclosure?.querySelector('summary');
        check(Boolean(summary?.textContent?.includes('View screenshots')) && !disclosure?.open, 'Screenshot evidence is available as an initially collapsed disclosure.');
        check(!action('Try live demo') && !action('View source'), 'Screenshot evidence is available independently of demo and source destinations.');
        await act(async () => summary?.click());
        check(disclosure?.open, 'The screenshot disclosure can be opened.');
        const screenshotLinks = Array.from(disclosure?.querySelectorAll('a') ?? []);
        check(screenshotLinks.some(link => link.getAttribute('href') === featuredImage.src), 'The featured screenshot still links to its existing local asset.');
        check(screenshotLinks.some(link => link.getAttribute('href') === galleryImage.src), 'Additional screenshot links retain their existing local assets.');
        const screenshot = disclosure?.querySelector('img');
        check(screenshot?.getAttribute('src') === featuredImage.src && screenshot.alt === featuredImage.alt, 'The featured screenshot retains its image source and descriptive alternative text.');
        check(hasNoEmptyLinks(), 'Screenshot evidence contains no empty links.');
    }
}

async function finish() {
    await act(async () => root.unmount());
    document.title = (failed ? 'FAIL' : 'PASS') + ': project action checks';
    const summary = document.createElement('p');
    summary.id = 'test-summary';
    summary.textContent = passed + ' passed; ' + failed + ' failed. No live services were called.';
    results.after(summary);
}

run().catch(error => check(false, String(error))).then(finish);
