import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import galleryImage from "../../assets/adventure.gif"; 

const Dashboard = () => {
  const navigate = useNavigate();

  const handleViewTrips = () => navigate("/viewTrips");
const handleCreateTrip = () => navigate("/createNewTrips");


  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="dashboard-text">
          <h2>Welcome to the Admin Personal Gallery</h2>
          <p>
            The Personal Gallery is an exclusive space reserved solely for the admin team of The Wild Path. 
            Here, admins can create and manage unforgettable travel experiences by documenting trips, 
            uploading cherished photos and immersive videos, and organizing them for lifelong access. 
            Whether it's a mountain hike, jungle camp, or offbeat retreat, the gallery allows the team to 
            relive memories anytime and anywhere. This platform ensures that every trip created by the admin 
            team is safely preserved in a private archive for personal enjoyment and future reflection.
          </p>
        <div className="dashboard-buttons">
  <button onClick={handleViewTrips}>View All Trips</button>
  <button onClick={handleCreateTrip}>Create New Trip</button>
</div>

        </div>
        <div className="dashboard-image">
          <img src={galleryImage} alt="Admin Personal Gallery" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
