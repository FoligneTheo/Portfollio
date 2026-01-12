import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Bbchou - Tous droits réservés</p>
    </footer>
  );
};

export default Footer;

