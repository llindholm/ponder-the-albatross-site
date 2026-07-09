"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 220);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <a href="/" className="nav__brand">
        Ponder the Albatross
      </a>

      <div className="nav__links">
        <a href="#listen">Music</a>
        <a href="#about">About</a>
        <a href="#tour">Tour</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}