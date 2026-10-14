import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { profile } from '../../data/profileData';
export interface ContactConfig {
    serviceId: string;
    templateId: string;
    publicKey: string;
}
export type ContactSender = (config: ContactConfig, form: HTMLFormElement) => Promise<{
    status: number;
}>;
const defaultConfig: ContactConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '',
};
const defaultSender: ContactSender = (config, form) => emailjs.sendForm(config.serviceId, config.templateId, form, config.publicKey);
export default function Contact({ config = defaultConfig, send = defaultSender }: {
    config?: ContactConfig;
    send?: ContactSender;
}) {
    const [state, setState] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
    const inFlight = useRef(false);
    const configured = Object.values(config).every(value => value.trim());
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!configured || inFlight.current)
            return;
        const form = event.currentTarget;
        const fields = ['user_name', 'user_email', 'message'];
        const blank = fields.some(name => !String(new FormData(form).get(name) ?? '').trim());
        if (blank) {
            setState('error');
            return;
        }
        inFlight.current = true;
        setState('pending');
        try {
            const response = await send(config, form);
            if (response.status < 200 || response.status >= 300)
                throw new Error('Send failed');
            form.reset();
            setState('success');
        }
        catch {
            setState('error');
        }
        finally {
            inFlight.current = false;
        }
    }
    return <section className="contact-band" id="contact" aria-labelledby="contact-title">
    <div className="shell contact-grid">
      <div className="contact-copy"><p className="eyebrow">05 / Get in touch</p><h2 id="contact-title">Have something <br />in mind? <br /><span>Let’s build it</span></h2><p>For development opportunities, interesting projects, or a conversation about what I’m building.</p>
        <a className="email-link" href={'mailto:' + profile.email}>{profile.email}<span aria-hidden="true">↗</span></a>
        <div className="contact-socials"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗<span className="sr-only"> (opens in a new tab)</span></a><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗<span className="sr-only"> (opens in a new tab)</span></a><span>{profile.location}</span></div>
      </div>
      <form onSubmit={onSubmit} className="contact-form" aria-label="Contact Bar" aria-busy={state === 'pending'}>
        <h3>Send a message</h3>
        <fieldset disabled={state === 'pending' || !configured}>
          <legend className="sr-only">Your contact details and message</legend>
          <label htmlFor="contact-name">Your name</label><input id="contact-name" name="user_name" autoComplete="name" required maxLength={100} placeholder="Alex Morgan"/>
          <label htmlFor="contact-email">Email address</label><input id="contact-email" type="email" name="user_email" autoComplete="email" required maxLength={254} placeholder="alex@company.com"/>
          <label htmlFor="contact-message">What would you like to talk about?</label><textarea id="contact-message" name="message" required maxLength={5000} rows={4} placeholder="Tell me a little about it…"/>
          <button className="button" type="submit">{state === 'pending' ? 'Sending…' : 'Send message'}<span aria-hidden="true">↗</span></button>
        </fieldset>
        <div className="form-feedback" role="status" aria-live="polite" aria-atomic="true">
          {!configured && <p>The form is unavailable right now. Please <a href={'mailto:' + profile.email}>email me directly</a>.</p>}
          {state === 'pending' && <p>Sending your message. Please wait.</p>}
          {state === 'success' && <p className="success-message">Your message was sent successfully. Thank you for getting in touch.</p>}
          {state === 'error' && <p className="error-message">Your message was not sent. Check the fields and try again, or email me directly. Your message is still here.</p>}
        </div>
        <p className="form-note">This form uses EmailJS to deliver your message.</p>
      </form>
    </div>
  </section>;
}
