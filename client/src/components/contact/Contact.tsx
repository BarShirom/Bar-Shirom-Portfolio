import emailjs from "emailjs-com";
import { useRef } from "react";
import "./Contact.css";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    try {
        const result = await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
      console.log("Email sent:", result.text);
      alert("✅ Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.log("Email error:", error);
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtext">
        Feel free to reach out by email, phone, or the form below.
      </p>

      <div className="contact-info">
        <p>
          <span className="contact-label">Email:</span>
          <a href="mailto:shirombar@gmail.com">shirombar@gmail.com</a>
        </p>
        <p>
          <span className="contact-label">Phone:</span>
          <a href="tel:0542226323">054-2226323</a>
        </p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;

