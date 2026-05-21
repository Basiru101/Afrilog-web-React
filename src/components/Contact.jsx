export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get in Touch</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Our Head Office</h3>
          <p>📍 Rue Joss, Douala, Cameroon</p>
          <p>📞 +237 650 241 933</p>
          <p>✉️ cm-support@afriloghub.com</p>
          <p>⏰ Mon - Sat: 8AM - 6PM</p>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent successfully!");
          }}
        >
          <div className="form-row">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>

          <textarea
            rows="5"
            placeholder="How can we assist you?"
            required
          ></textarea>

          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}