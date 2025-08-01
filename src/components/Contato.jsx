import React from 'react';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Contato() {
  return (
    <section id="contato">
      <h2>Agende Seu Horário</h2>
      <p>Entre em contato pelo WhatsApp ou redes sociais:</p>

      <div className="redes-icones">
        <a href="https://wa.me/seunumero" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icon-zona whatsapp" />
        </a>
        <a href="https://instagram.com/seuinstagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon-zona instagram" />
        </a>
      </div>

      <form>
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu e-mail" required />
        <textarea placeholder="Mensagem ou dúvida"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contato;
