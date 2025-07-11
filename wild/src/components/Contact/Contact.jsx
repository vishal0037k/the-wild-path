import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("user_name").trim();
    const email = formData.get("user_email").trim();
    const message = formData.get("message").trim();

    // Basic validation
    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus("Enter a valid email address.");
      return;
    }

    emailjs
      .sendForm("service_o8xvao4", "template_gvos3hg", form.current, "0ldhRwc90M4VrmHa3")
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="contact-section">
      <h2>Send Us Your Suggestions</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message or Suggestion..." rows="6" required></textarea>
        <button type="submit">Send Message</button>
        <p className="form-status">{status}</p>
      </form>
    </section>
  );
};

export default ContactSection;
