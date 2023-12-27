import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h1>Logo</h1>
          <h3>Categories</h3>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <GiHamburgerMenu />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>Teach</li>
            <li>
              <span></span>
            </li>
            <li className="btn">Login</li>
            <li className="btn-primary">Signup</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
