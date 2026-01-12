import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="logo">Mon Portfolio</h1>
      <nav className="nav">
        <a href="#hero">Accueil</a>
        <a href="#about">À propos</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;

