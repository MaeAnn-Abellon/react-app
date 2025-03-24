import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2025 MyApp. All rights reserved.</p>
        <div className="links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
