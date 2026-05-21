import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import BookingModal from "./components/BookingModal";
import Footer from "./components/Footer";

export default function App() {
  const [trackingId, setTrackingId] = useState("");
  const [result, setResult] = useState("");
  const [showModal, setShowModal] = useState(false);

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
      <Navbar onBookClick={() => setShowModal(true)} />

      <Hero
        trackingId={trackingId}
        setTrackingId={setTrackingId}
        handleTrack={handleTrack}
        result={result}
      />

      <Services />
      <WhyUs />
      <Contact />

      <BookingModal
        show={showModal}
        onClose={() => setShowModal(false)}
      />

        <Footer />

    </>
  );
}