import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaWhatsapp } from "react-icons/fa";
import fundo1 from '../assets/pam-capa2.jpg';
import "./Faq.css";

const faqs = [
  {
    pergunta: "Qual é o valor da maquiagem social?",
    resposta:
      "Os valores variam conforme o tipo de maquiagem e o serviço desejado. Entre em contato para receber um orçamento personalizado.",
  },
  {
    pergunta: "Você atende noiva no local?",
    resposta:
      "Sim! Atendo noivas em domicílio ou no local do evento, com todo o material profissional incluso.",
  },
  {
    pergunta: "Quanto tempo antes devo agendar meu horário?",
    resposta:
      "O ideal é agendar com pelo menos 2 a 3 semanas de antecedência para garantir o melhor horário.",
  },
  {
    pergunta: "Você faz maquiagem para fotos e ensaios?",
    resposta:
      "Sim, realizo maquiagens específicas para fotos, vídeos e ensaios, com acabamento que realça bem nas câmeras.",
  },
  {
    pergunta: "O atendimento é apenas com agendamento?",
    resposta:
      "Sim, o atendimento é feito somente com horário marcado para oferecer uma experiência exclusiva e tranquila.",
  },
];

export default function Faq() {
  const [ativo, setAtivo] = useState(null);

  const toggleFaq = (index) => {
    setAtivo(ativo === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq" style={{ backgroundImage: `url(${fundo1})` }}>
      <h2 className="Faq-titulo">Perguntas Frequentes</h2>

      <div className="faq-container">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${ativo === index ? "ativo" : ""}`}
            onClick={() => toggleFaq(index)}
          >
            <div className="faq-pergunta">
              <span>{item.pergunta}</span>
              {ativo === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {ativo === index && <p className="faq-resposta">{item.resposta}</p>}
          </div>
        ))}
      </div>

      <div className="faq-contato">
        <p>Não achou sua dúvida?</p>
        <a
          href="https://wa.me/+5581988782834"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wpp"
        >
          <FaWhatsapp className="icon-wpp" /> Fale comigo no WhatsApp
        </a>
      </div>
    </section>
  );
}
