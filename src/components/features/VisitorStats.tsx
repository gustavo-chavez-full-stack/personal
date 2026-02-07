import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { supabase } from "../../lib/supabase";

// Fix for default Leaflet icon issue with Vite/React
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

interface VisitorLocation {
  city: string;
  region: string;
  country: string;
  latitude: number;
  longitude: number;
  ip: string;
  timestamp: string;
}

// Component to recenter map when location is found
const RecenterMap = ({ lat, lng }: { lat: number; lng: number }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], 4);
  }, [lat, lng, map]);
  return null;
};

export const VisitorStats: React.FC = () => {
  const [currentVisitor, setCurrentVisitor] = useState<VisitorLocation | null>(null);
  const [history, setHistory] = useState<VisitorLocation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHistory = async () => {
    try {
      const { data, error } = await supabase
        .from("visitor_stats")
        .select("*")
        .order("visit_time", { ascending: false })
        .limit(50);

      if (error) throw error;

      if (data) {
        setHistory(data.map((v: any) => ({
          city: v.city,
          region: v.region,
          country: v.country,
          latitude: v.latitude,
          longitude: v.longitude,
          ip: v.ip,
          timestamp: v.visit_time
        })));
      }
    } catch (err) {
      console.error("Error fetching history:", err);
    }
  };

  useEffect(() => {
    const trackVisit = async () => {
      try {
        setLoading(true);
        // Step 1: Fetch history first
        await fetchHistory();

        // Step 2: Get visitor's location via IP
        const response = await fetch("https://ipapi.co/json/");
        if (!response.ok) throw new Error("Fallo al obtener la ubicación");
        
        const data = await response.json();
        
        const visitor: VisitorLocation = {
          city: data.city,
          region: data.region,
          country: data.country_name,
          latitude: data.latitude,
          longitude: data.longitude,
          ip: data.ip,
          timestamp: new Date().toISOString(),
        };

        setCurrentVisitor(visitor);

        // Step 3: Register the visit in Supabase
        const { error: insertError } = await supabase
          .from("visitor_stats")
          .insert({
            city: visitor.city,
            region: visitor.region,
            country: visitor.country,
            latitude: visitor.latitude,
            longitude: visitor.longitude,
            ip: visitor.ip,
          });

        if (insertError) {
          console.error("Error registering visit in Supabase:", insertError);
        } else {
          // Refresh list to include current visit
          await fetchHistory();
        }
        
      } catch (err) {
        console.error("Error tracking visit:", err);
        setError("No pudimos obtener tu ubicación.");
      } finally {
        setLoading(false);
      }
    };

    trackVisit();
  }, []);

  return (
    <div className="w-full bg-white dark:bg-card-dark rounded-2xl border border-slate-200 dark:border-border-dark overflow-hidden shadow-xl">
      <div className="p-6 border-b border-slate-100 dark:border-border-dark flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">public</span>
            Visitantes del Mundo
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Registrando el origen de las visitas en tiempo real.
          </p>
        </div>
        {currentVisitor && (
          <div className="hidden sm:block text-right">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Tu origen</p>
            <p className="text-sm font-medium text-primary">
              {currentVisitor.city}, {currentVisitor.country}
            </p>
          </div>
        )}
      </div>

      <div className="h-[400px] w-full relative">
        {loading && (
          <div className="absolute inset-0 z-[1000] bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-sm flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Detectando ubicación...</p>
            </div>
          </div>
        )}

        {error && (
          <div className="absolute inset-0 z-[1000] flex items-center justify-center p-6 text-center">
            <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-xl border border-red-100 dark:border-red-900/30">
              <span className="material-symbols-outlined text-3xl mb-2">location_off</span>
              <p className="font-medium">{error}</p>
            </div>
          </div>
        )}

        <MapContainer
          center={[20, 0]}
          zoom={2}
          scrollWheelZoom={false}
          className="h-full w-full z-10"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {history.map((visit, idx) => (
            <Marker key={idx} position={[visit.latitude, visit.longitude]}>
              <Popup>
                <div className="text-sm">
                  <p className="font-bold">{visit.city || "Ciudad desconocida"}</p>
                  <p className="text-slate-600">{visit.country}</p>
                  <p className="text-[10px] text-slate-400 mt-1">
                    {new Date(visit.timestamp).toLocaleString()}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
          {currentVisitor && <RecenterMap lat={currentVisitor.latitude} lng={currentVisitor.longitude} />}
        </MapContainer>
      </div>

      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-border-dark overflow-x-auto">
        <div className="flex gap-4 min-w-max">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Total Visitas</span>
            <span className="text-lg font-bold text-primary">{history.length}</span>
          </div>
          <div className="w-px h-8 bg-slate-200 dark:bg-slate-700 mx-2"></div>
          {history.slice(0, 3).map((v, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Reciente</span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {v.city}, {v.country}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
