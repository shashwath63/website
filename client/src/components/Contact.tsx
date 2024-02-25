// Contact.tsx

import React, { useState } from "react";


const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        // Handle successful response
        console.log("Contact information sent successfully");
      } else {
        // Handle non-200 responses
        console.error("Failed to send contact information");
      }
    } catch (err) {
      // Handle error
      console.error("Error sending contact information", err);
    }
  };
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <p>Fill out the form below to get in touch with us:</p>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name}onChange={(e)=>setName(e.target.value)}/>
        </label>

        <label>
          Email:
          <input type="email" name="email"value={email} onChange={(e)=>setEmail(e.target.value)} />
        </label>

        <label>
          Message:
          <textarea name="message" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
        </label>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
