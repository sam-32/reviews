import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
    <li>
        <Link to="/">Principal</Link>
      </li>
      <li>
        <Link to="/Cine">Cine</Link>
      </li>
      <li>
        <Link to="/Musica">Musica</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar