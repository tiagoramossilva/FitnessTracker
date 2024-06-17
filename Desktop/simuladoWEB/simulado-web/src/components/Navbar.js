import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/my-plan">Meu Plano</Link></li>
        <li><Link to="/history">Histórico</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
