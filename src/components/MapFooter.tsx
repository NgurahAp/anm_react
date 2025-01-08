import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet";

// Marker custom
const redMarker = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const customPopupStyle = `
  .custom-popup .leaflet-popup-content-wrapper {
    background: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    padding: 2px;
  }
  .custom-popup .leaflet-popup-content {
    margin: 8px 12px;
    font-family: 'Urbanist', sans-serif;
    min-width: 200px;
  }
  .custom-popup .company-name {
    font-weight: 600;
    color: #000000;
    font-size: 14px;
    margin-bottom: 4px;
  }
  .custom-popup .address {
    color: #000000;
    font-size: 12px;
    line-height: 1.4;
  }
  .leaflet-popup-tip {
    background: #FFFFFF;
  }
`;

// Posisi default (Duren Sawit)
const position: LatLngExpression = [-6.2341214507513305, 106.92265149402358];

// Komponen MapComponent
const MapComponent: React.FC = () => {
  return (
    <div className="h-[190px] w-full pt-3">
      <style>{customPopupStyle}</style>
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        className="h-full w-full rounded-lg"
        attributionControl={false}
        zoomControl={true} // Menampilkan zoom control untuk navigasi yang lebih baik
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Kembali ke OpenStreetMap standar untuk keterbacaan yang lebih baik
          maxZoom={19}
        />
        <Marker position={position} icon={redMarker}>
          <Popup className="custom-popup">
            <div className="company-name">PT. Anugrah Niaga Mandiri</div>
            <div className="address">
              Jl. Radin Inten II No. 61A
              <br />
              Duren Sawit, Jakarta Timur
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
