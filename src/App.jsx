import { useState } from "react";

function App() {
  const [trackingId, setTrackingId] = useState("");
  const [trackingResult, setTrackingResult] = useState("");
  const [showModal, setShowModal] = useState(false);

  const trackingDatabase = {
    "AFLG-CMR26": {
      status: "In Transit",
      location: "En route from Douala Port to Yaoundé Hub",
      eta: "May 18, 2026",
    },
  };

  const handleTracking = () => {
    const data = trackingDatabase[trackingId.toUpperCase()];

    if (data) {
      setTrackingResult(
        `Status: ${data.status} | Location: ${data.location} | ETA: ${data.eta}`
      );
    } else {
      setTrackingResult("Tracking ID not found");
    }
  };

  return (
    <>
      <header className="navbar">
        <div className="logo">
          Afrilog<span>Hub</span>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="btn btn-primary"
          onClick={() => setShowModal(true)}
        >
          Book a Delivery
        </button>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>
            Connecting Cameroon and the Region, One Shipment at a Time.
          </h1>

          <p>
            Reliable cross-border logistics and last-mile delivery.
          </p>

          <div className="tracking-box">
            <input
              type="text"
              placeholder="Enter Tracking Number"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
            />

            <button
              className="btn btn-secondary"
              onClick={handleTracking}
            >
              Track Cargo
            </button>
          </div>

          {trackingResult && (
            <div className="tracking-result">
              {trackingResult}
            </div>
          )}
        </div>
      </section>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span
              className="close-btn"
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>

            <h2>Book a Shipment</h2>

            <form>
              <div className="form-group">
                <input type="text" placeholder="Pickup Location" />
              </div>

              <div className="form-group">
                <input type="text" placeholder="Destination" />
              </div>

              <button className="btn btn-secondary">
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default App;