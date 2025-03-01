import React, { useState } from 'react';
import styles from './Contact.module.css'

const Contact = () => {
     // State to store user input
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Format message for WhatsApp
    const whatsappMessage = `Name: ${userData.name}%0AEmail: ${userData.email}%0AMessage: ${userData.message}`;
    const whatsappNumber = "919642841566"; // Change to your WhatsApp number

    // Open WhatsApp chat with the message
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");

    // Reset form fields after submission
    setUserData({ name: "", email: "", message: "" });
  };

  return (
    <div className={styles.contactContainer}>
      {/* Contact Details */}
      <div className={styles.contactDetails}>
        <h2>Contact Us</h2>
        <p><strong>📍 Address:</strong> Plot No:2 H.NO:1-110/A/1/P-2, Ragannaguda, Near KB School, Brahmanapally Road, Turkayamjal, R.R. 501510</p>
        <p><strong>📞 Phone:</strong> <a href="tel:+919642841566">+91 96428 41566</a></p>
        <p><strong>📧 Email:</strong> <a href="mailto:maatourismhyd@gmail.com">maatourismhyd@gmail.com</a></p>
        <p><strong>📷 Instagram:</strong> <a href="https://www.instagram.com/maatourism.in/" target="_blank" rel="noreferrer">maatourism.in</a></p>
      </div>

      {/* Contact Form */}
      <div className={styles.contactForm}>
        <h2>Send a Message</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={userData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={userData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={userData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact
