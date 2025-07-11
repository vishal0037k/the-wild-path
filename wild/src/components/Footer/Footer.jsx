import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <h2>𝕋𝕙𝕖 𝕨𝕚𝕝𝕕 𝕡𝕒𝕥𝕙 🏔️✨</h2>
          <p>Chasing wild freedom — one trail at a time.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-socials">
          <h4>Connect</h4>
          <a href="https://chat.whatsapp.com/JS5FzAGnW951im4L263Hci" target="_blank" rel="noreferrer">
            <FaWhatsapp /> WhatsApp
          </a>
          <a href="https://www.instagram.com/channel/AbbUFvaRhts0q3Xo/?igsh=MXczMGd3azUyNHVvZQ==" target="_blank" rel="noreferrer">
            <FaInstagram /> Instagram Channel
          </a>
          <a href="https://www.instagram.com/dev_vishal_37" target="_blank" rel="noreferrer">
            <FaInstagram /> Main Profile
          </a>
          <Link to="/contact">
            <FaEnvelope /> Email
          </Link>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="footer-bottom">
        <p>© 2025 The Wild Path. Built with ❤️ on the trail.</p>
      </div>
    </footer>
  );
};

export default Footer;
