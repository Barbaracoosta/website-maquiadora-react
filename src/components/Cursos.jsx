import { useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import fundo from '../assets/pam-capa2.jpg';
import "./Cursos.css";

function Cursos() {
  const [modalAberto, setModalAberto] = useState(false);
  const [cursoSelecionado, setCursoSelecionado] = useState(null);

  const cursos = [
    {
      titulo: "Curso de Automaquiagem",
      resumo:
        "Aprenda a fazer uma maquiagem com técnicas fáceis e práticas para o dia a dia.",
      texto: `Aprenda passo a passo a fazer uma maquiagem linda e prática para o dia a dia. 
              Ideal para quem quer realçar a beleza natural com técnicas simples e eficazes. 
              O curso pode ser feito presencialmente ou online.
              Valor: solicitar orçamento.
              Duração: 4h.`,
    },
    {
      titulo: "E-book Skin Care",
      resumo: "Em breve disponível.",
      texto:
        "Nosso e-book completo sobre cuidados com a pele estará disponível em breve! Continue acompanhando para receber todas as novidades e garantir o seu exemplar assim que for lançado.",
    },
    {
      titulo: "Workshop Empreendedorismo – Como iniciar o seu negócio?",
      resumo:
        "Técnicas de vendas, organização financeira e fidelização de clientes.",
      texto:
        "Um workshop voltado para quem deseja começar ou expandir seu negócio na área da beleza. Aborda técnicas de vendas, organização financeira e fidelização de clientes. presencial — mais informações em breve.",
    },
  ];

  const abrirModal = (curso) => {
    setCursoSelecionado(curso);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setCursoSelecionado(null);
  };

  return (
    <section id="cursos" style={{ backgroundImage: `url(${fundo})` }}>
      <h2>Cursos</h2>
      <div className="lista-cursos">
        {cursos.map((curso, index) => (
          <div className="curso" key={index}>
            <h3>{curso.titulo}</h3>
            <p>{curso.resumo}</p>
            <button
              className="mais-info-cursos"
              onClick={() => abrirModal(curso)}
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
            <h3>{cursoSelecionado.titulo}</h3>
            <p>{cursoSelecionado.texto}</p>

            {cursoSelecionado.titulo === "E-book Skin Care" ? null : (
              <div className="botoes-modal">
                <a
                  href="https://wa.me/+5581988782834"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-agendar-servico"
                >
                  Inscrever-se
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Cursos;
