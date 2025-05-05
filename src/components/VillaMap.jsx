import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const VILLA_COORDS = [-8.688994, 115.176083]; // 8°41'20.4"S 115°10'33.9"E

const VillaMap = () => {
  useEffect(() => {
    // Initialiser la carte
    const map = L.map('villa-map', {
      center: VILLA_COORDS,
      zoom: 12,
      scrollWheelZoom: false,
      zoomControl: false,
      attributionControl: false,
    });

    // Tuiles CartoDB Voyager (moderne, coloré, proche Google Maps)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Cercle de flou
    L.circle(VILLA_COORDS, {
      color: '#10b981',
      fillColor: '#10b981',
      fillOpacity: 0.08,
      radius: 800,
      weight: 0,
    }).addTo(map);
    // Cercle principal (trait continu)
    L.circle(VILLA_COORDS, {
      color: '#10b981',
      fillColor: '#10b981',
      fillOpacity: 0.18,
      radius: 700,
      weight: 2,
    }).addTo(map);

    // Contrôle de zoom
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // Nettoyage à la destruction
    return () => map.remove();
  }, []);

  return (
    <div
      id="villa-map"
      className="rounded-lg shadow-lg border border-emerald/20"
      style={{ height: '260px', width: '100%', background: 'linear-gradient(135deg, #f8fafc 60%, #d1fae5 100%)' }}
    />
  );
};

export default VillaMap; 