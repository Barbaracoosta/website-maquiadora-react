import { BsArrowRightCircle } from "react-icons/bs"
import './Servicos.css';

function Servicos() {
  return (
    <section id="servicos">
      <h2>Serviços</h2>
      <div className="cards-servicos">
        <div className="card-servico">
          <h3>Maquiagem Social</h3>
          <p>Produção elegante para festas e eventos especiais.</p>
          <a href="/Maquiagem-social" className="mais-info-servico"> Saiba Mais <BsArrowRightCircle size={28} /> </a>
        </div>
        <div className="card-servico">
          <h3>Maquiagem Pele Natural</h3>
          <p>Acabamento leve que valoriza sua beleza sem exageros.</p>
          <a href="/Maquiagem-natural" className="mais-info-servico"> Saiba Mais <BsArrowRightCircle size={28} /> </a>
        </div>
        <div className="card-servico">
          <h3>Maquiagem para fotografia</h3>
          <p>Make pensada para realçar seus traços em fotos e vídeos.</p>
          <a href="/Maquiagem-fotografia" className="mais-info-servico"> Saiba Mais <BsArrowRightCircle size={28} /> </a>
        </div>
        <div className="card-servico">
          <h3>Maquiagem Dia e Noite</h3>
          <p>Versátil para acompanhar você em qualquer ocasião.</p>
          <a href="/Maquiagem-dia-noite" className="mais-info-servico"> Saiba Mais <BsArrowRightCircle size={28} /> </a>
        </div>
        <div className="card-servico">
          <h3>Maquiagem para Solenidades</h3>
          <p>Produção sofisticada para formaturas, casamentos e eventos formais.</p>
          <a href="/Maquiagem-solenidades" className="mais-info-servico"> Saiba Mais <BsArrowRightCircle size={28} /> </a>
        </div>
        <div className="card-servico">
          <h3>Maquiagem Masculina</h3>
          <p>Correção sutil para realçar a naturalidade no dia a dia ou em eventos.</p>
          <a href="/Maquiagem-masculina" className="mais-info-servico"> Saiba Mais <BsArrowRightCircle size={28} /> </a>
        </div>
      </div>
    </section>
  );
}

export default Servicos;
