import React from "react";
import { Link } from "react-router-dom";

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Connexion</Link>
        </li>
        <li>
          <Link to="/home">Prétendants</Link>
        </li>
        <li>
          <Link to="/match">Match Ultime</Link>
        </li>
        <li>
          <Link to="/search">Trouver l'âme soeur</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
