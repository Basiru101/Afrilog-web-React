export default function BookingModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>

        <h2>Book a New Shipment</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Booking successful!");
            onClose();
          }}
        >
          <div className="form-group">
            <input type="text" placeholder="Pickup Location" required />
          </div>

          <div className="form-group">
            <input type="text" placeholder="Destination" required />
          </div>

          <div className="form-group">
            <select>
              <option>Documents</option>
              <option>Freight</option>
              <option>Perishable</option>
            </select>
          </div>

          <button className="btn btn-secondary">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}