import { useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import "./Servicos.css";

function Servicos() {
  const [modalAberto, setModalAberto] = useState(false);
  const [servicoSelecionado, setServicoSelecionado] = useState(null);

  const servicos = [
    {
      titulo: "Maquiagem Pele Natural",
      texto:
        "Acabamento leve e iluminado que valoriza sua beleza real. Ideal para quem busca um visual suave, com pele fresca e aparência natural — como se você simplesmente acordasse radiante.",
    },
    {
      titulo: "Maquiagem Social",
      texto:
        "Produção elegante e personalizada para festas, formaturas e eventos especiais. Realça a beleza com técnicas que garantem uma pele impecável, olhar marcante e longa duração — perfeita para brilhar em qualquer ocasião.",
    },
    {
      titulo: "Maquiagem para Fotografia",
      texto:
        "Make planejada para realçar seus traços sob qualquer iluminação. Pele uniforme, olhos definidos e brilho na medida certa para garantir fotos e vídeos impecáveis.",
    },
    {
      titulo: "Maquiagem Dia e Noite",
      texto:
        "Versátil e sofisticada, combina leveza para o dia e intensidade para a noite. Um visual que se adapta à sua rotina — sempre elegante, em qualquer ocasião.",
    },
    {
      titulo: "Maquiagem Masculina",
      texto:
        "Correção sutil e acabamento natural para destacar o melhor do seu rosto. Ideal para fotos, eventos ou o dia a dia — com técnicas leves que suavizam falhas na barba e disfarçam áreas de calvície, mantendo um visual discreto e autêntico.",
    },
    {
      titulo: "Evento Empresarial",
      texto:
        "Atendimento especial dentro das empresas parceiras, com um dia de autocuidado voltado aos colaboradores. Um momento de relaxamento e aprendizado com dicas de skincare e maquiagem para o dia a dia — promovendo bem-estar, valorização e mais motivação no ambiente de trabalho.",
    },
  ];

  const abrirModal = (servico) => {
    setServicoSelecionado(servico);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setServicoSelecionado(null);
  };

  return (
    <section id="servicos">
      <h2>Serviços</h2>
      <div className="cards-servicos">
        {servicos.map((servico, index) => (
          <div className="card-servico" key={index}>
            <h3>{servico.titulo}</h3>
            <p>{servico.texto.split(".")[0]}.</p>
            <button
              className="mais-info-servico"
              onClick={() => abrirModal(servico)}
            >
              Saiba Mais <BsArrowRightCircle size={24} />
            </button>
          </div>
        ))}
      </div>

      {modalAberto && (
        <div className="modal-overlay" onClick={fecharModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="btn-fechar-x" onClick={fecharModal}>
              &times;
            </button>
            <h3>{servicoSelecionado.titulo}</h3>
            <p>{servicoSelecionado.texto}</p>

            <div className="botoes-modal">              
              <a
                href="https://wa.me/+5581988782834"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-agendar-servico"
              >
                Agendar Serviço
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Servicos;
