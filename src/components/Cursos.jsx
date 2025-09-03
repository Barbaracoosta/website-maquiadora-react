import { BsArrowRightCircle } from "react-icons/bs";
import "./Cursos.css";

function Cursos() {
  return (
    <section id="cursos">
      <h2>Cursos</h2>
      <div className="lista-cursos">
        <div className="curso">
          <h3>Curso de Automaquiagem</h3>
          <p>Aprenda técnicas práticas para realçar sua beleza no dia a dia.</p>
          <a href="/curso-automaquiagem" className="mais-info-cursos"> Saiba Mais <BsArrowRightCircle size={28} /> </a>
        </div>
        <div className="curso">
          <h3>E-book Skin Care</h3>
          <p>Aprenda técnicas práticas para realçar sua beleza no dia a dia.</p>
          <a href="/E-book" className="mais-info-cursos"> Saiba Mais <BsArrowRightCircle size={28} /> </a>
        </div>

        <div className="curso">
          <h3>Workshop Empreendedorismo</h3>
          <p>Perfeito para quem deseja começar a empreender no universo da beleza.</p>
          <a href="/workshop-profissional" className="mais-info-cursos"> Saiba Mais <BsArrowRightCircle size={28} /> </a>
        </div>
      </div>
    </section>
  );
}

export default Cursos;
