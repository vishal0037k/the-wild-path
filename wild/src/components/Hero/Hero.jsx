import "./Hero.css";
import qrWhatsapp from "../../assets/qr-whatsaap.png";
import qrInstagram from "../../assets/qr-instagram.png";
import qrMainProfile from "../../assets/qr-main-profile.png";
import globeRotate from "../../assets/adventure.gif";
import {
  Compass,
  Trees,
  Snowflake,
  Handshake,
  WandSparkles,
  Flame
} from "lucide-react";
import { Mountain, Sparkles } from "lucide-react";


const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        <div className="hero-text">
       
          <h1 className="hero-title">
  Welcome to <span className="fancy">𝕋𝕙𝕖  𝕨𝕚𝕝𝕕  𝕡𝕒𝕥𝕙</span>{" "}
  <Mountain size={24} strokeWidth={2.5} style={{ verticalAlign: "middle", marginLeft: "5px" }} />
  <Sparkles size={22} strokeWidth={2.2} style={{ verticalAlign: "middle", marginLeft: "4px" }} />
</h1>

          <p className="hero-subtitle">
            Not just a site — a vibe, a tribe, and a wild call to your soul.
          </p>
<div className="hero-flex">
  <div className="her-list">
<ul className="hero-list">
  <li><Compass size={20} /> Exploring forgotten places</li>
  <li><Trees size={20} /> Chasing waterfalls & forest trails</li>
  <li><Snowflake size={20} /> Walking through snow in silence</li>
  <li><Handshake size={20} /> Escaping noise & routine</li>
  <li><WandSparkles size={20} /> Feeling magic in ancient lands</li>
  <li><Flame size={20} /> Real connections under open skies</li>
</ul>
</div>

<div className="hero-gif">
    <img src={globeRotate} alt="Adventure Animation" />
  </div>

</div>
          <p className="hero-desc">
            Join a growing crew of wild-hearted dreamers, coders with backpacks, and sunset chasers.
          </p>


          <div className="hero-buttons">
            <a href="https://chat.whatsapp.com/JS5FzAGnW951im4L263Hci" target="_blank" className="btn">
              Join WhatsApp Group
            </a>
              <a href="https://www.instagram.com/dev_vishal_37" target="_blank" className="btn btn-outline">
              Visit Main Profile
            </a>
            <a href="https://www.instagram.com/channel/AbbUFvaRhts0q3Xo/" target="_blank" className="btn">
              Join Insta Channel
            </a>
          
          </div>
        </div>

        <div className="qr-section">
          <div>
            <img src={qrWhatsapp} alt="WhatsApp QR" className="qr-code" title="Join WhatsApp Group" />
            <p>WhatsApp Group</p>
          </div>
          <div>
            <img src={qrMainProfile} alt="Instagram Profile QR" className="qr-code" title="Visit Main Profile" />
            <p>Main Insta Profile</p>
          </div>
          <div>
            <img src={qrInstagram} alt="Instagram Channel QR" className="qr-code" title="Join Insta Channel" />
            <p>Instagram Channel</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
