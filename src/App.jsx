import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./styles/global.css";

export default function App() {
  const [trackingId, setTrackingId] = useState("");
  const [result, setResult] = useState("");

  const database = {
    "AFLG-CMR26": {
      status: "In Transit",
      location: "Douala → Yaoundé",
      eta: "May 18, 2026"
    }
  };

  const handleTrack = () => {
    const data = database[trackingId.toUpperCase()];

    if (data) {
      setResult(
        `Status: ${data.status} | Location: ${data.location} | ETA: ${data.eta}`
      );
    } else {
      setResult("Tracking ID not found");
    }
  };

  return (
    <>
      <Navbar />
      <Hero
        trackingId={trackingId}
        setTrackingId={setTrackingId}
        handleTrack={handleTrack}
        result={result}
      />
    </>
  );
}