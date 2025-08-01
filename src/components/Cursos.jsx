import React from 'react';

function Cursos() {
  return (
    <section id="cursos">
      <h2>Cursos</h2>
      <div className="lista-cursos">
        <div className="curso">
          <h3>Curso de Automaquiagem</h3>
          <p>Aprenda técnicas práticas para realçar sua beleza no dia a dia.</p>
        </div>
        <div className="curso">
          <h3>Workshop Profissional</h3>
          <p>Para quem quer começar a maquiar profissionalmente e montar um portfólio.</p>
        </div>
      </div>
    </section>
  );
}

export default Cursos;
