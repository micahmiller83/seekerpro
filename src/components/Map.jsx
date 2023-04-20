import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import './Map.css';

const Map = ({ location }) => {
  console.log("Rendering Map component")
  const mapRef = useRef(null);

  useEffect(() => {
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
  }, [location]);

  return (
    <div className="map-container">
      <div ref={mapRef} className="map"></div>
    </div>
  );
};

export default Map;
