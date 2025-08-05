import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Logo + Tagline */}
        <div className="footer__brand">
          <h2 className="footer__logo">
            Graphilla <span className="footer__highlight">Tech</span>
          </h2>
          <p className="footer__tagline">
            Crafting Digital Success through Marketing & Design
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer__links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer__contact">
          <h3>Contact Us</h3>
          <p>Email: info@graphillatech.com</p>
          <p>Phone: +977-9800000000</p>
          <p>Address: Bhairahawa, Nepal</p>
        </div>

        {/* Social Icons */}
        <div className="footer__socials">
          <h3>Follow Us</h3>
          <div className="footer__icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Graphilla Tech. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
