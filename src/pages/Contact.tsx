// src/pages/Contact.tsx
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../styles/Contact.css";

const Contact: React.FC = () => {
  // Replace "yourFormIdHere" with your actual Formspree form ID (like "mabcdxyz")
  const [state, handleSubmit] = useForm("mldpwnpr");

  if (state.succeeded) {
    return (
      <section id="contact" className="contact-section">
        <h2 className="contact-title">Message Sent!</h2>
        <p className="contact-subtitle">Thank you for reaching out — I’ll get back to you soon.</p>
      </section>
    );
  }

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">
        Feel free to reach out for collaborations or questions!
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="box-text"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="box-text"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="box-text"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button type="submit" disabled={state.submitting}>
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
