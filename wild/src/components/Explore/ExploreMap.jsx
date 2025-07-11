import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// Fix default icon issue
let DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

const locations = [
  // { name: "Manali", coords: [32.2396, 77.1887] },
  // { name: "Jim Corbett", coords: [29.5300, 78.7747] },
  // { name: "Ziro Valley", coords: [27.5916, 93.8197] },
  { name: "Palampur", coords: [32.1104, 76.5362] }, 
];

const ExploreMap = () => {
  return (
    <div className="explore-map-container">
      <h3>Pin Your Path</h3>
      <MapContainer center={[28.6139, 77.2090]} zoom={5} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc, i) => (
          <Marker key={i} position={loc.coords}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ExploreMap;
