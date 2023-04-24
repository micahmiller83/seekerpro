import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import './Map.css';

const Map = ({ location }) => {
  const [googleMapsUrl, setGoogleMapsUrl] = useState("");

  //console.log("Rendering Map component")
  const mapRef = useRef(null);

  useEffect(() => {
    if (location && location.lat && location.lng) {
      setGoogleMapsUrl(`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`);

      const loader = new Loader({
        apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        version: "weekly",
      });
  
      loader.load().then(() => {
        const map = new google.maps.Map(mapRef.current, {
          center: location,
          zoom: 16,
        });
  
        new google.maps.Marker({
          position: location,
          map,
        });
      });
    }
  }, [location]);

  return (
    <div className="map-container">
      <div ref={mapRef} className="map"></div>
      {googleMapsUrl && (
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="open-in-google-maps"
      >
        Open in Google Maps
      </a>
      )}
    </div>
  );
};

export default Map;
