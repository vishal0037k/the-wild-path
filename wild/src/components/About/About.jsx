import React from "react";
import "./About.css";
import profilePic from "../../assets/profile.jpg"; // adjust path as needed

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <img src={profilePic} alt="Vishal Choudhary" className="profile-pic" />
        <h2 className="about-title">About The Wild Path</h2>
        <p className="about-description">
          Hey! I’m <strong>Vishal Choudhary</strong>, a passionate <strong>Full Stack Developer</strong> by profession and a nature enthusiast by heart. While I've spent years mastering the digital world—crafting code, designing interfaces, and building modern web experiences—I’ve always found my peace in the untamed wild.
        </p>
        <p className="about-description">
          <strong>The Wild Path</strong> was born from countless solo treks, roadside chai moments, starry night camps, and spontaneous road trips across India's breathtaking terrains. I wanted a place to share these raw, unfiltered experiences—and also connect with others who feel the same pull toward the forests, mountains, and dusty trails.
        </p>
        <p className="about-description">
          That’s why I created this website, along with an <strong>Instagram channel</strong> and a <strong>WhatsApp group</strong>. Whether you're an armchair adventurer or someone who thrives on getting lost in nature, there’s something here for you. Let’s explore stories, routes, gear tips, and those little moments that make travel truly magical.
        </p>
        <p className="about-description">
          When I’m not in the wild or building apps, I’m constantly learning, creating, and helping brands bring their digital ideas to life. Curious about my work or want to collaborate?
        </p>

        <a href="https://vishal-37.netlify.app/" className="portfolio-button" target="_blank" rel="noopener noreferrer">
          Visit My Portfolio
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
