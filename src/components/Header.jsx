import React from 'react';
import '../App.css';

function Header() {
  return (
    <>
      <header className="header">
        <a src="#home"><img src="logo.png" alt="Logo" /></a>
        <nav className="header__menu">
          <ul className='menu__lista'>
          <a href="#home">Home</a>
          <a href="#sobre">Sobre</a> 
          <a href="#contato">Contato</a>
          <a href="#suporte">Suporte</a>
          <a href="#whats">Whatsapp</a>
          </ul>
        </nav>
        <div className='menu__login'>
          
        </div>
      </header>
    </>
  );
}

export default Header;