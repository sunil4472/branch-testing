import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "9779843704472";
    const text = `Hello, my name is ${formData.fullName}. 
Email: ${formData.email}, Phone: ${formData.phone}. 
Message: ${formData.message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__header">
        <h2 className="contact__heading">Get in Touch With Us</h2>
        <p className="contact__subheading">
          We’d love to hear from you! Fill out the form or reach us using the
          details below. kakak kakiiiii
        </p>
      </div>

      <div className="contact__container">
        {/* Form */}
        <form className="contact__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="contact__input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="contact__input"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="contact__input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="contact__textarea"
          />
          <button type="submit" className="contact__btn">
            Send on WhatsApp
          </button>
        </form>

        {/* Address */}
        <div className="contact__info">
          <h3 className="contact__info-title">Contact Info</h3>
          <p className="contact__item">
            <FaMapMarkerAlt /> Bhairahawa, Nepal
          </p>
          <p className="contact__item">
            <FaPhoneAlt /> +977 9843704472
          </p>
          <p className="contact__item">
            <FaEnvelope /> info@graphillatech.com
          </p>
        </div>
      </div>

      {/* Google Map */}
      <div className="contact__map">
        <iframe
          title="Graphilla Tech Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.204195557685!2d83.44982991506453!3d27.700769882794274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996853d8e3b07ab%3A0x86a3ebc6cf6c28c!2sBhairahawa!5e0!3m2!1sen!2snp!4v1705859471234"
          width="100%"
          height="350"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
