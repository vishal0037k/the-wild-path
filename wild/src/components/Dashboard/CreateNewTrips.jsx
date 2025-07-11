// wild/src/pages/CreateNewTrips.jsx
import React, { useState, useEffect } from "react";
import "./CreateNewTrips.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;

const CreateNewTrips = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    from: "",
    to: "",
    people: 1,
    description: "",
    photos: [],
    videos: [],
  });
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  // ✅ if id present, load existing trip
  useEffect(() => {
    if (id) {
      axios
        .get(`${apiUrl}/api/trips/${id}`)
        .then((res) => {
          setFormData({
            title: res.data.title,
            date: res.data.date?.split("T")[0],
            from: res.data.from,
            to: res.data.to,
            people: res.data.people,
            description: res.data.description || "",
            photos: [],
            videos: [],
          });
        })
        .catch((err) => console.error(err));
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("date", formData.date);
    data.append("from", formData.from);
    data.append("to", formData.to);
    data.append("people", formData.people);
    data.append("description", formData.description);

    Array.from(formData.photos).forEach((file) => {
      data.append("photos", file);
    });
    Array.from(formData.videos).forEach((file) => {
      data.append("videos", file);
    });

    try {
      if (id) {
        // edit mode
        await axios.put(`${apiUrl}/api/trips/${id}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Trip updated successfully!");
        navigate("/dashboard");
      } else {
        // create mode
        await axios.post(`${apiUrl}/api/trips`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setShowPopup(true);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to save trip");
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate("/dashboard");
  };

  return (
    <div className="create-trip-wrapper">
      <h2 className="text-2xl font-bold mb-4">
        {id ? "Edit Trip" : "Create New Trip"}
      </h2>
      <form onSubmit={handleSubmit} className="trip-form">
        <input
          name="title"
          onChange={handleChange}
          value={formData.title}
          type="text"
          placeholder="Title"
        />
        <input
          name="date"
          onChange={handleChange}
          value={formData.date}
          type="date"
        />
        <input
          name="from"
          onChange={handleChange}
          value={formData.from}
          type="text"
          placeholder="From"
        />
        <input
          name="to"
          onChange={handleChange}
          value={formData.to}
          type="text"
          placeholder="To"
        />
        <input
          name="people"
          onChange={handleChange}
          value={formData.people}
          type="number"
          min="1"
          placeholder="Number of People"
        />
        <textarea
          name="description"
          onChange={handleChange}
          value={formData.description}
          placeholder="Trip description"
        />

        <label>Upload Photos</label>
        <input
          name="photos"
          onChange={handleFileChange}
          type="file"
          accept="image/*"
          multiple
        />

        <label>Upload Videos</label>
        <input
          name="videos"
          onChange={handleFileChange}
          type="file"
          accept="video/*"
          multiple
        />

        <button type="submit" className="upload-btn">
          {id ? "Update Trip" : "Upload Trip"}
        </button>
      </form>

      {showPopup && (
        <div className="popup-backdrop">
          <div className="popup-box">
            <p>🎉 Trip created successfully!</p>
            <button onClick={handleClosePopup}>Go to Dashboard</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateNewTrips;
