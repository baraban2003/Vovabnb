'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const markerIcon = require('leaflet/dist/images/marker-icon.png');
const markerIcon2x = require('leaflet/dist/images/marker-icon-2x.png');
const markerShadow = require('leaflet/dist/images/marker-shadow.png');

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: markerShadow,
  shadowSize: [41, 41]
});

interface MapProps {
  center?: number[];
}

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const MapComponent: React.FC<MapProps> = ({ center }) => {
  return (
    <MapContainer
      center={center as L.LatLngExpression || [51, -0.09]}
      zoom={center ? 4 : 2}
      scrollWheelZoom={false}
      className="z-0 h-full w-full"
    >
      <TileLayer
        url={url}
        attribution={attribution}
      />
      {center && (
        <Marker position={center as L.LatLngExpression} icon={customIcon} />
      )}
    </MapContainer>
  );
};

export default dynamic(() => Promise.resolve(MapComponent), { ssr: false });