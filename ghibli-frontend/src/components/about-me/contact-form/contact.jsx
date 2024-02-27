import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_i0euc94", "template_juy57sc", form.current, {
        publicKey: "2jgFnPO11fVDezRoR",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contactForm">
      <div className="formContainer">
        <label>Name</label>
        <input type="text" name="from_name" autoComplete="off" />
      </div>
      <div className="formContainer">
        <label>Email</label>
        <input type="email" name="from_email" autoComplete="off" />
      </div>
      <div className="formContainer">
        <label>Message</label>
        <textarea name="message" />
      </div>

      <input type="submit" value="Sent Message" className="sent" />
    </form>
  );
};
