import React, { useState } from "react";
import ExploreMap from "./ExploreMap"; 
import "./Explore.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import himalayaImg from "../../assets/himalaya.jpg";
import jungleImg from "../../assets/jungle.jpg";
import roadtripImg from "../../assets/roadtrip.jpg";
import campImg from "../../assets/camping.jpg";

const allCards = [
  { title: "Himalayan Escapes", category: "mountains", img: himalayaImg, desc: "Discover the mighty Himalayas and their hidden trails." },
  { title: "Jungle Trails", category: "jungle", img: jungleImg, desc: "Into the deep green silence and wildlife of India's forests." },
  { title: "Road Trips", category: "roadtrip", img: roadtripImg, desc: "Chase sunsets on the open roads and find stories at every mile." },
  { title: "Camping & Gear", category: "camps", img: campImg, desc: "Essentials, hacks, and campfire memories from real treks." },
];

const ExplorePage = () => {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const filteredCards = filter === "all"
    ? allCards
    : allCards.filter((card) => card.category === filter);

  return (
    <>
    <section className="explore-section">
      <h2>Explore the Untamed</h2>

      <div className="explore-filters">
        {["all", "mountains", "jungle", "roadtrip", "camps"].map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="explore-cards">
        {filteredCards.map((card, index) => (
          <div className="explore-card" key={index} data-aos="fade-up">
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <button>View More</button>
          </div>
        ))}
      </div>
    </section>

    <ExploreMap />
    </>
  );
};

export default ExplorePage;
