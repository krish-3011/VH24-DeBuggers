// MapComponent.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 37.7749, // Example latitude (San Francisco)
  lng: -122.4194 // Example longitude
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY"> {/* Replace with your Google Maps API key */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10} /* Adjust zoom level */
      >
        {/* Add Marker */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
