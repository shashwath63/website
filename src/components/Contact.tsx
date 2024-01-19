// Contact.tsx

import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <p>Fill out the form below to get in touch with us:</p>

      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>

        <label>
          Email:
          <input type="email" name="email" />
        </label>

        <label>
          Message:
          <textarea name="message"></textarea>
        </label>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
