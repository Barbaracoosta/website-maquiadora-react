import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Contato.css";

function Contato() {
  return (
    <section id="contato">
      <h2 className="contato-titulo">Contato</h2>
      <div className="contato-container">
        <div className="foto-container">
          <img src="/PAM-FOTO2.jpeg" alt="Pamella" className="foto" />
        </div>
        <div className="contato-conteudo">          
          <p>Entre em contato pelos canais abaixo:</p>

          <div className="cards-container">
            <a href="https://wa.me/+5581988782834" target="_blank" rel="noopener noreferrer" className="contato-card">
              <FaWhatsapp className="icon-zona whatsapp" />
              <span>WhatsApp</span>
            </a>

            <a href="https://www.instagram.com/pamellaborba" target="_blank" rel="noopener noreferrer" className="contato-card">
              <FaInstagram className="icon-zona instagram" />
              <span>Instagram</span>
            </a>

            <a href="mailto:pamella@example.com" className="contato-card">
              <FaEnvelope className="icon-zona email" />
              <span>E-mail</span>
            </a>

            <a href="tel:+5581988782834" className="contato-card">
              <FaPhone className="icon-zona ligacao" />
              <span>Ligação</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;
