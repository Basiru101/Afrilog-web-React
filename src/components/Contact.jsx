import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message sent successfully!");

    // ✅ CLEAR INPUTS AFTER SEND
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get in Touch</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Our Head Office</h3>
          <p>📍 Rue Joss, Douala, Cameroon</p>
          <p>📞 +237 650 241 933</p>
          <p>✉️ basiruissa92@gmail.com</p>
          <p>⏰ Mon - Sat: 8AM - 6PM</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="message"
            rows="5"
            placeholder="How can we assist you?"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}