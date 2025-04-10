import React from 'react';
import '../App.css';

function Header() {
  return (
    <>
      <header className="header">
        <img src="logo.png" alt="Logo" /> 
        <nav className="header__menu">
          <a href="#home">Home</a>
          <a href="#sobre">Sobre</a> 
          <a href="#contato">Contato</a>
          <a href="#suporte">Suporte</a>
          <a href="#whats">Whatsapp</a>
        </nav>
      </header>
    </>
  );
}

export default Header;