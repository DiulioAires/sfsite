import React from 'react';
import '../App.css';

function Footer() {
  return (
    <footer className="footer">
      <img src="logo.png" alt="" className="rodape_image" />
      <ul className="footer__lista">
        <li><a href="">Home</a></li>
        <li><a href="">Sobre</a></li>
        <li><a href="">Contato</a></li>
        <li><a href="">Suporte</a></li>
        <li><a href="">Whatsapp</a></li>
      </ul>
      <p>&copy; 2025 S&F TECH, TODOS OS DIREITOS RESERVADOS .</p>
    </footer>
  );
}

export default Footer;