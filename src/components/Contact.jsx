import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_hysgptt",      // Service ID
        "template_5ap9hok",     // Template ID
        form.current,
        "X4RjdcpKjqxADQWhp"      // Public Key
      )
      .then(
        () => {
          setLoading(false);
          setStatus("✅ Message sent successfully!");

          form.current.reset();

          setTimeout(() => {
            setStatus("");
          }, 5000);
        },
        (error) => {
          console.log(error);

          setLoading(false);
          setStatus("❌ Failed to send message.");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="status">{status}</p>}

        </form>
      </div>
    </section>
  );
}

export default Contact;