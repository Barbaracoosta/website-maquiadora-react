import './Header.css';
function Header() {
  return (
    <header className="header">             
      <nav>
        <a href="#hero"><img src="/logo.png" alt="Logo Pâmella Borba" className="logo" /></a>
        <ul>          
          <li><a href="#sobre">Sobre</a></li>
          <li className="submenu-container">
            <a href="#portfolio">Portfólio</a>
            <ul className="submenu">
              <li><a href="#galeria1">Galeria 1</a></li>
              <li><a href="#galeria2">Galeria 2</a></li>              
            </ul>
          </li>          
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#cursos">Cursos</a></li>
          <li><a href="#contato" className="btn-agendar">Agende seu horário</a></li>
        </ul>
      </nav>    
      
    </header>
  );
}

export default Header;