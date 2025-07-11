import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Gallery.css";
import img1 from "../../assets/gallery/img1.jpg";
import img2 from "../../assets/gallery/img2.jpg";
import img3 from "../../assets/gallery/img3.jpg";
import img4 from "../../assets/gallery/img4.jpg";
import img5 from "../../assets/gallery/img5.jpg";
import img6 from "../../assets/gallery/img6.jpg";

const GallerySection = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set your admin credentials here
    const adminEmail = "thewildpath0001@gmail.com";
    const adminPassword = "Wild*123#";

    if (email === adminEmail && password === adminPassword) {
      navigate("/dashboard");
    } else {
      setError("You're not an admin. Please contact the admin team to access the personal dashboard.");
    }
  };

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">The Wild Gallery</h2>
      <div className="gallery-flex">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`Wild Path ${index + 1}`} />
          </div>
        ))}
      </div>

      <button type="button" className="personal-gallery" onClick={() => setShowPopup(true)}>
        Visit Personal Gallery
      </button>

      <p className="gallery-note">
        <strong>Note:</strong> This personal gallery is password protected and accessible only to the admin team.
      </p>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>Admin Login</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Submit</button>
              <button className="cancel-btn" type="button" onClick={() => setShowPopup(false)}>
                Cancel
              </button>
            </form>
            {error && <p className="error-message">{error}</p>}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
