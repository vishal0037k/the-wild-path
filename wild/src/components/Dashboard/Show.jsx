import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./Show.css"; // you can create this

const apiUrl = import.meta.env.VITE_API_URL;

const Show = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/trips/${id}`);
        setTrip(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch trip", err);
        setLoading(false);
      }
    };

    fetchTrip();
  }, [id]);

  if (loading) return <p>Loading trip details...</p>;
  if (!trip) return <p>Trip not found.</p>;

  return (
    <div className="show-container">
      <h2 className="show-title">{trip.title}</h2>
      <div className="show-details">
        <p><strong>Date:</strong> {trip.date?.split("T")[0]}</p>
        <p><strong>From:</strong> {trip.from}</p>
        <p><strong>To:</strong> {trip.to}</p>
        <p><strong>People:</strong> {trip.people}</p>
        {trip.description && (
          <p><strong>Description:</strong> {trip.description}</p>
        )}
      </div>

      {/* Photos */}
      {trip.photos?.length > 0 && (
        <>
          <h3 className="media-heading">Photos</h3>
          <div className="media-grid">
            {trip.photos.map((url, index) => (
              <div key={index} className="media-item">
                <img src={url} alt={`Trip photo ${index}`} />
                <a
                  href={url}
                  download={`trip-photo-${index}`}
                  className="download-btn"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Videos */}
      {trip.videos?.length > 0 && (
        <>
          <h3 className="media-heading">Videos</h3>
          <div className="media-grid">
            {trip.videos.map((url, index) => (
              <video
                key={index}
                src={url}
                controls
                className="media-item"
              />
            ))}
          </div>
        </>
      )}

      <Link to="/ViewTrips" className="back-btn">← Back to Trips</Link>
    </div>
  );
};

export default Show;

