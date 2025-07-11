import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ViewTrips.css";

const apiUrl = import.meta.env.VITE_API_URL;

const ViewTrips = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/trips`);
        setTrips(res.data);
        console.log(res.data);
      } catch (err) {
        console.error("Failed to fetch trips", err);
      }
    };

    fetchTrips();
  }, []);
// HANDLE DETETE BUTTON //
const handleDelete = async (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this trip?");
  if (!confirmDelete) return;

  try {
    await axios.delete(`${apiUrl}/api/trips/${id}`);
    setTrips(trips.filter((trip) => trip._id !== id)); // remove from state
    alert("Trip deleted successfully");
  } catch (err) {
    console.error(err);
    alert("Failed to delete trip");
  }
};


  return (
      <div className="view-trips-container">
   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
  <h2 className="view-trips-title">All Trips</h2>
  <Link to="/dashboard" className="dashboard-button">
    Go to Dashboard
  </Link>
</div>

      {trips.length === 0 ? (
        <p>No trips found.</p>
      ) : (
       <div className="trips-flex">
  {trips.map((trip) => (
    <div key={trip._id} className="trip-card">
      <h3>{trip.title}</h3>
      <p>
        <strong>Date:</strong> {trip.date?.split("T")[0]}
      </p>
      <p>
        <strong>From:</strong> {trip.from} → <strong>To:</strong> {trip.to}
      </p>
      <p>
        <strong>People:</strong> {trip.people}
      </p>
      <div className="trip-buttons">
        <Link to={`/show/${trip._id}`} className="trip-button">
          Show
        </Link>
        <Link to={`/CreateNewTrips/${trip._id}`} className="trip-button">
          Edit
        </Link>
        <button
          className="trip-button"
          onClick={() => handleDelete(trip._id)}
        >
          Delete
        </button>
      </div>
    </div>
  ))}
</div>

      )}
    </div>
  );
};

export default ViewTrips;
