import React from 'react';

function Servicos() {
  return (
    <section id="servicos">
      <h2>Serviços</h2>
      <div className="cards-servicos">
        <div className="card-servico">
          <h3>Maquiagem Social</h3>
          <p>Para festas e eventos especiais.</p>
        </div>
        <div className="card-servico">
          <h3>Noivas</h3>
          <p>Look completo para o grande dia.</p>
        </div>
        <div className="card-servico">
          <h3>Automaquiagem</h3>
          <p>Aulas para você se maquiar sozinha.</p>
        </div>
      </div>
    </section>
  );
}

export default Servicos;
