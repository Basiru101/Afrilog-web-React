export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">Afrilog<span>Hub</span></div>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>

      <button className="btn btn-primary">
        Book a Delivery
      </button>
    </header>
  );
}