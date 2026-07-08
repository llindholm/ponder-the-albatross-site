export default function Navigation() {
  return (
    <nav className="nav">
      <a href="/" className="nav__brand">
        Ponder
      </a>

      <div className="nav__links">
        <a href="#listen">Music</a>
        <a href="#tour">Tour</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}