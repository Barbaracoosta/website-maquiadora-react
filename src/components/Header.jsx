import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <Link smooth to="/#hero">
          <img src="/logo.png" alt="Logo Pâmella Borba" className="logo" />
        </Link>
        <ul>
          <li>
            <Link smooth to="/#sobre">Sobre</Link>
          </li>

          <li className="submenu-container">
            <Link smooth to="/#portfolio">Portfólio</Link>
            <ul className="submenu">
              <li><Link smooth to="/galeria/fotos">Fotos</Link></li>
              <li><Link smooth to="/galeria/videos">Vídeos</Link></li>
            </ul>
          </li>

          <li className="submenu-container">
            <Link smooth to="/#servicos">Serviços</Link>
            <ul className="submenu">
              <li><Link smooth to="/#serviço1">Serviços 1</Link></li>
              <li><Link smooth to="/#servico2">Serviços 2</Link></li>
            </ul>
          </li>

          <li>
            <Link smooth to="/#cursos">Cursos</Link>
          </li>

          <li>
            <Link smooth to="/#contato" className="btn-agendar">
              Agende seu horário
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
