import { useState, useEffect, useCallback } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import "./Depoimentos.css";

function Depoimentos() {
  const [depoimentoAtual, setDepoimentoAtual] = useState(0);
  const [estaAutomatico, setEstaAutomatico] = useState(true);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const depoimentos = [
  {
    nome: "Ana Silva",
    foto: "https://randomuser.me/api/portraits/women/44.jpg",
    texto:
      "A Pâmella é simplesmente maravilhosa! Desde o primeiro contato, foi super atenciosa e entendeu exatamente o que eu queria. A maquiagem ficou leve, elegante e durou o dia inteiro, mesmo com o calor. Me senti linda, confiante e recebi muitos elogios durante o evento!",
    estrelas: 5,
    servico: "Maquiagem Social"
  },
  {
    nome: "Carla Santos",
    foto: "https://randomuser.me/api/portraits/women/21.jpg",
    texto:
      "Contratei a Pâmella para fazer minha maquiagem de formatura e foi a melhor escolha que eu poderia ter feito. O resultado ficou impecável, super profissional e com acabamento perfeito para as fotos. Além disso, ela me deixou muito à vontade e cuidou de cada detalhe com muito carinho.",
    estrelas: 5,
    servico: "Maquiagem para Fotografia"
  },
  {
    nome: "Marina Oliveira",
    foto: "https://randomuser.me/api/portraits/women/16.jpg",
    texto:
      "Eu nunca tinha feito uma maquiagem profissional antes e fiquei encantada com o trabalho da Pâmella. Ela realçou meus traços de forma natural, sem exageros, exatamente como eu pedi. O resultado foi uma pele linda, iluminada e com um acabamento impecável. Já virei cliente fiel!",
    estrelas: 5,
    servico: "Pele Natural"
  },
  {
    nome: "Juliana Costa",
    foto: "https://randomuser.me/api/portraits/women/52.jpg",
    texto:
      "A Pâmella tem um dom! Conseguiu entender meu estilo e criou uma maquiagem que combinou perfeitamente comigo. Usei o look durante o dia e retornei à noite apenas com pequenos ajustes — e ainda estava impecável. É nítido o amor e o capricho que ela coloca no que faz.",
    estrelas: 5,
    servico: "Make Dia e Noite"
  },
  {
    nome: "Roberto Alves",
    foto: "https://randomuser.me/api/portraits/men/41.jpg",
    texto:
      "Eu não tinha o hábito de fazer maquiagem, mas precisava para uma sessão de fotos profissional e a Pâmella me deixou super à vontade. Ela fez um trabalho incrível, corrigindo pequenas imperfeições sem deixar artificial. O resultado foi natural, sofisticado e me deu muita confiança.",
    estrelas: 5,
    servico: "Maquiagem Masculina"
  },
  {
    nome: "Fernanda Lopes",
    foto: "https://randomuser.me/api/portraits/women/76.jpg",
    texto:
      "Fiz uma consultoria de pele com a Pâmella e foi um divisor de águas na minha rotina. Ela me explicou tudo com paciência, analisou minha pele e montou um cronograma personalizado. Em poucas semanas já vi diferença real — minha pele ficou mais bonita, uniforme e saudável!",
    estrelas: 5,
    servico: "Consultoria de Pele"
  },
  {
    nome: "Patrícia Nunes",
    foto: "https://randomuser.me/api/portraits/women/25.jpg",
    texto:
      "No dia do meu casamento, a Pâmella foi essencial! Além de pontual e super calma, ela me deixou confiante e tranquila em um dia cheio de emoção. A maquiagem ficou perfeita nas fotos, durou a festa inteira e ainda assim estava leve e confortável. Uma verdadeira artista!",
    estrelas: 5,
    servico: "Maquiagem de Noiva"
  },
  {
    nome: "Renata Silva",
    foto: "https://randomuser.me/api/portraits/women/90.jpg",
    texto:
      "Minha formatura foi um momento muito especial e a Pâmella fez parte disso de uma forma única. A maquiagem valorizou meu rosto e ficou linda tanto ao vivo quanto nas fotos. O atendimento foi impecável, cheio de cuidado, e o resultado superou minhas expectativas!",
    estrelas: 5,
    servico: "Maquiagem para Formatura"
  },
  {
    nome: "Débora Andrade",
    foto: "https://randomuser.me/api/portraits/women/39.jpg",
    texto:
      "Fiz uma maquiagem com a Pâmella para um ensaio fotográfico e fiquei encantada com o resultado. Ela tem um olhar artístico incrível, sabe valorizar cada detalhe e o acabamento ficou perfeito na câmera. O mais legal é que ela deixa o ambiente leve, divertido e acolhedor.",
    estrelas: 5,
    servico: "Maquiagem para Ensaio"
  },
  {
    nome: "Clara Menezes",
    foto: "https://randomuser.me/api/portraits/women/33.jpg",
    texto:
      "Precisava de uma maquiagem para um evento corporativo e a Pâmella acertou em cheio! Ela criou um visual sofisticado, leve e que combinava com meu estilo. Além do resultado impecável, adorei o cuidado com a preparação da pele e os produtos de excelente qualidade.",
    estrelas: 5,
    servico: "Maquiagem Corporativa"
  }
];


  const proximoDepoimento = useCallback(() => {
  setDepoimentoAtual((atual) => (atual === depoimentos.length - 1 ? 0 : atual + 1));
}, [depoimentos.length]);

  const depoimentoAnterior = () => {
    setDepoimentoAtual((atual) => (atual === 0 ? depoimentos.length - 1 : atual - 1));
  };

  const irParaDepoimento = (index) => {
    setDepoimentoAtual(index);
    setEstaAutomatico(false);
  };

  
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!estaAutomatico) return;
    const intervalo = setInterval(() => {
      proximoDepoimento();
    }, 6000);
    return () => clearInterval(intervalo);
  }, [estaAutomatico, depoimentoAtual, proximoDepoimento]);

  return (
    <section id="depoimentos">
      <div className="depoimentos-container">
        <div className="depoimentos-header">
          <h2>O que dizem minhas clientes</h2>
          <p className="depoimentos-subtitle">Beleza com propósito 💜</p>

          <div className="depoimentos-rating-overview">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="estrela-ativa" size={14} />
            ))}
            <span>5.0 baseado em +40 avaliações</span>
          </div>
        </div>

        <div className="carousel-container">
          {isDesktop && (
            <button className="carousel-btn carousel-btn-prev" onClick={depoimentoAnterior}>
              <FaChevronLeft size={18} />
            </button>
          )}

          <div className="carousel-track">
            <div
              className="carousel-slide"
              style={{ transform: `translateX(-${depoimentoAtual * 100}%)` }}
            >
              {depoimentos.map((depoimento, index) => (
                <div key={index} className="depoimento-card fade-in">
                  <FaQuoteLeft className="quote-icon" size={20} />

                  <div className="depoimento-content">
                    <div className="avaliacao-estrelas">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          size={14}
                          className={i < depoimento.estrelas ? "estrela-ativa" : "estrela-inativa"}
                        />
                      ))}
                    </div>

                    <p className="depoimento-texto">“{depoimento.texto}”</p>

                    <div className="depoimento-footer">
                      <div className="cliente-foto">
                        <img src={depoimento.foto} alt={depoimento.nome} />
                      </div>
                      <div className="cliente-info">
                        <h3>{depoimento.nome}</h3>
                        <span className="servico-tipo">{depoimento.servico}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {isDesktop && (
            <button className="carousel-btn carousel-btn-next" onClick={proximoDepoimento}>
              <FaChevronRight size={18} />
            </button>
          )}
        </div>

        <div className="carousel-indicators">
          {depoimentos.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === depoimentoAtual ? "active" : ""}`}
              onClick={() => irParaDepoimento(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Depoimentos;
