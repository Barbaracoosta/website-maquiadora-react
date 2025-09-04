import { HashLink as Link } from 'react-router-hash-link';
import { useState, useEffect, useRef } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuAberto] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeSubmenu, setSubmenuAtivo] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleCliqueFora = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          !event.target.closest('.hamburger')) {
        setMenuAberto(false);
        setSubmenuAtivo(null);
      }
    };

    document.addEventListener('mousedown', handleCliqueFora);
    return () => {
      document.removeEventListener('mousedown', handleCliqueFora);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuAberto(false);
        setSubmenuAtivo(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const abrirMenu = () => {
    setMenuAberto(!menuOpen);
    setSubmenuAtivo(null);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
    setSubmenuAtivo(null);
  };

  const abrirSubmenu = (submenuName) => {
    if (activeSubmenu === submenuName) {
      setSubmenuAtivo(null);
    } else {
      setSubmenuAtivo(submenuName);
    }
  };

  return (
    <header className="header">
      <nav>
        <Link smooth to="/#hero" onClick={fecharMenu} className="logo-link">
          <img src="/logo.png" alt="Logo Pâmella Borba" className="logo" />
        </Link>
        
        {isMobile && (
          <button 
            className={`hamburger ${menuOpen ? 'hamburger--active' : ''}`} 
            onClick={abrirMenu}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
        
        {!isMobile && (
          <div className="nav-menu-desktop">
            <Link smooth to="/#sobre" className="nav-link">Sobre</Link>
            
            <div className="submenu-container">
              <Link smooth to="/#portfolio" className="nav-link">Portfólio</Link>
              <div className="submenu">
                <Link smooth to="/galeria/fotos" className="submenu-link">Fotos</Link>
                <Link smooth to="/galeria/videos" className="submenu-link">Vídeos</Link>
              </div>
            </div>
            
            <div className="submenu-container">
              <Link smooth to="/#servicos" className="nav-link">Serviços</Link>
              <div className="submenu">
                <Link smooth to="/#serviço1" className="submenu-link">Serviços 1</Link>
                <Link smooth to="/#servico2" className="submenu-link">Serviços 2</Link>
              </div>
            </div>
            
            <Link smooth to="/#cursos" className="nav-link">Cursos</Link>
            
            <Link smooth to="/#contato" className="btn-agendar">
              Agende seu horário
            </Link>
          </div>
        )}
        
        {isMobile && (
          <>
            <div 
              className={`nav-menu-overlay ${menuOpen ? 'nav-menu-overlay--active' : ''}`}
              onClick={fecharMenu}
            ></div>
            
            <div 
              ref={menuRef}
              className={`nav-menu-mobile ${menuOpen ? 'nav-menu-mobile--active' : ''}`}
            >
              <div className="nav-menu-header">
                <button 
                  className="close-menu-button"
                  onClick={fecharMenu}
                  aria-label="Fechar menu"
                >
                </button>
              </div>
              
              <div className="nav-menu-content">
                <Link smooth to="/#sobre" className="nav-link-mobile" onClick={fecharMenu}>
                  Sobre
                </Link>
                
                <div className="submenu-mobile-container">
                  <div 
                    className="submenu-mobile-header"
                    onClick={() => abrirSubmenu('portfolio')}
                    aria-expanded={activeSubmenu === 'portfolio'}
                  >
                    <span>
                      Portfólio
                    </span>
                    <span className={`submenu-arrow ${activeSubmenu === 'portfolio' ? 'submenu-arrow--active' : ''}`}>
                      ▼
                    </span>
                  </div>
                  <div className={`submenu-mobile ${activeSubmenu === 'portfolio' ? 'submenu-mobile--active' : ''}`}>
                    <Link smooth to="/galeria/fotos" className="submenu-link-mobile" onClick={fecharMenu}>
                      Fotos
                    </Link>
                    <Link smooth to="/galeria/videos" className="submenu-link-mobile" onClick={fecharMenu}>
                      Vídeos
                    </Link>
                  </div>
                </div>
                
                <div className="submenu-mobile-container">
                  <div 
                    className="submenu-mobile-header"
                    onClick={() => abrirSubmenu('servicos')}
                    aria-expanded={activeSubmenu === 'servicos'}
                  >
                    <span>
                      Serviços
                    </span>
                    <span className={`submenu-arrow ${activeSubmenu === 'servicos' ? 'submenu-arrow--active' : ''}`}>
                      ▼
                    </span>
                  </div>
                  <div className={`submenu-mobile ${activeSubmenu === 'servicos' ? 'submenu-mobile--active' : ''}`}>
                    <Link smooth to="/#serviço1" className="submenu-link-mobile" onClick={fecharMenu}>
                      Serviços 1
                    </Link>
                    <Link smooth to="/#servico2" className="submenu-link-mobile" onClick={fecharMenu}>
                      Serviços 2
                    </Link>
                  </div>
                </div>
                
                <Link smooth to="/#cursos" className="nav-link-mobile" onClick={fecharMenu}>
                  Cursos
                </Link>
                
                <div className="nav-menu-footer">
                  <Link smooth to="/#contato" className="btn-agendar-mobile" onClick={fecharMenu}>
                    Agende seu horário
                  </Link>
                  
                  <div className="social-links">
                    <a href="#" aria-label="Instagram"><span>📱</span></a>
                    <a href="#" aria-label="Facebook"><span>📘</span></a>
                    <a href="#" aria-label="WhatsApp"><span>💬</span></a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;