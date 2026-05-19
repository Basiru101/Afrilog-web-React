export default function Hero({ trackingId, setTrackingId, handleTrack, result }) {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Connecting Cameroon and the Region</h1>

        <div className="tracking-box">
          <input
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            placeholder="Enter Tracking Number"
          />

          <button onClick={handleTrack} className="btn btn-secondary">
            Track Cargo
          </button>
        </div>

        {result && (
          <div className="tracking-result">{result}</div>
        )}
      </div>
    </section>
  );
}