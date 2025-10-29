import { useState, useEffect } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import './Depoimentos.css';

function Depoimentos() {
  const [depoimentoAtual, setDepoimentoAtual] = useState(0);
  const [estaAutomatico, setEstaAutomatico] = useState(true);

  const depoimentos = [
    {
      nome: "Ana Silva",
      foto: "👩‍💼",
      texto: "A maquiagem da Pamella é incrível! Fiquei radiante no meu casamento e a maquiagem durou o dia todo. Super recomendo!",
      estrelas: 5,
      servico: "Maquiagem Social"
    },
    {
      nome: "Carla Santos",
      foto: "👩‍🎓",
      texto: "Profissional excelente! A maquiagem para formatura ficou perfeita nas fotos. Atendimento impecável e muito atenciosa.",
      estrelas: 5,
      servico: "Maquiagem para Fotografia"
    },
    {
      nome: "Marina Oliveira",
      foto: "💼",
      texto: "Adorei o resultado da maquiagem natural! Ficou exatamente como eu queria - discreta mas realçando meus traços. Perfeita para o dia a dia no trabalho.",
      estrelas: 4,
      servico: "Maquiagem Pele Natural"
    },
    {
      nome: "Juliana Costa",
      foto: "🌟",
      texto: "Transformação incrível! A Pamella entendeu perfeitamente o que eu queria e superou minhas expectativas. Já marquei o próximo serviço!",
      estrelas: 5,
      servico: "Maquiagem Dia e Noite"
    },
    {
      nome: "Roberto Alves",
      foto: "👨‍💼",
      texto: "Excelente trabalho na maquiagem masculina! Correção discreta que fez toda diferença nas minhas fotos profissionais. Recomendo!",
      estrelas: 5,
      servico: "Maquiagem Masculina"
    }
  ];

  const proximoDepoimento = () => {
    setDepoimentoAtual((atual) => 
      atual === depoimentos.length - 1 ? 0 : atual + 1
    );
  };

  const depoimentoAnterior = () => {
    setDepoimentoAtual((atual) => 
      atual === 0 ? depoimentos.length - 1 : atual - 1
    );
  };

  const irParaDepoimento = (index) => {
    setDepoimentoAtual(index);
    setEstaAutomatico(false);
  };

  useEffect(() => {
    if (!estaAutomatico) return;

    const intervalo = setInterval(() => {
      proximoDepoimento();
    }, 5000);

    return () => clearInterval(intervalo);
  }, [estaAutomatico, depoimentoAtual]);

  return (
    <section id="depoimentos">
      <h2>O que dizem sobre mim</h2>
      <p>Confira a experiência de clientes que transformaram sua autoestima com meus serviços</p>
      
      <div className="carousel-container">
        <button 
          className="carousel-btn carousel-btn-prev" 
          onClick={depoimentoAnterior}
          aria-label="Depoimento anterior"
        >
          <FaChevronLeft size={20} />
        </button>

        <div className="carousel-track">
          <div 
            className="carousel-slide" 
            style={{ transform: `translateX(-${depoimentoAtual * 100}%)` }}
          >
            {depoimentos.map((depoimento, index) => (
              <div key={index} className="depoimento-card">
                <div className="depoimento-header">
                  <div className="cliente-foto">{depoimento.foto}</div>
                  <div className="cliente-info">
                    <h3>{depoimento.nome}</h3>
                    <span className="servico-tipo">{depoimento.servico}</span>
                  </div>
                  <FaQuoteLeft className="quote-icon" size={24} />
                </div>
                
                <div className="avaliacao-estrelas">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i}
                      size={16}
                      className={i < depoimento.estrelas ? "estrela-ativa" : "estrela-inativa"}
                    />
                  ))}
                </div>

                <p className="depoimento-texto">"{depoimento.texto}"</p>
              </div>
            ))}
          </div>
        </div>

        <button 
          className="carousel-btn carousel-btn-next" 
          onClick={proximoDepoimento}
          aria-label="Próximo depoimento"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      <div className="carousel-indicators">
        {depoimentos.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === depoimentoAtual ? 'active' : ''}`}
            onClick={() => irParaDepoimento(index)}
            aria-label={`Ir para depoimento ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Depoimentos;