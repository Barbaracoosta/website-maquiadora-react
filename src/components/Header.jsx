import React from 'react';

function Header() {
  return (
    <header className="header">
      <img src="/logo.png" alt="Logo Pâmella Borba" className="logo" />
      <nav>
        <a href="#sobre">Sobre</a>
        <a href="#portfolio">Portfólio</a>
        <a href="#servicos">Serviços</a>
        <a href="#cursos">Cursos</a>
        <a href="#contato" className="btn-agendar">Agende seu horário</a>
      </nav>
    </header>
  );
}

export default Header;