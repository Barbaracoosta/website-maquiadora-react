import { FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
      <p>© {currentYear} Pâmella Borba. Todos os direitos reservados.</p>

        <div className="footer-links">          
          <a href="#sobre">Sobre</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#servico">Serviços</a>
          <a href="#contato">Contato</a>
        </div>
        <div className="footer-socials">          
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>

        </div>
        <div className="footer-message">
          Beleza com Proposito! 💜
        </div>

      </div>
    </footer>
  );
}

export default Footer;
