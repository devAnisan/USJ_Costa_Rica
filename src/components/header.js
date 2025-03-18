import React from "react";
import headerStyles from "../styles/style_01";
const Header = () => {
  return (
    <header style={headerStyles.header}>
      <div style={headerStyles.logoContainer}>
        <img src="/usanjoseLOGO.jpeg" alt="Logo" style={headerStyles.logo} />
      </div>
      <nav>
        <ul style={headerStyles.navList}>
          <li><a style={headerStyles.link} href="/">Contacto</a></li>
          <li><a style={headerStyles.link} href="/about">Buscar</a></li>
          <li><a style={headerStyles.link} href="/contact">Perfil</a></li>
        </ul>
      </nav>
    </header>
  );
};


export default Header;
