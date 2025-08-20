import React from 'react';
import { FaImages, FaVideo } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './Portfolio.css'; 


function Portfolio() {
  const navigate = useNavigate();

  const irParaGaleria = (tipo) => {
    navigate(`/galeria/${tipo}`);
  };

  return (
    <section id="portfolio">
      <h2>Portfólio</h2>
      <p>Cada maquiagem conta uma história. <br/>
       Explore meu portfólio de fotos e vídeos e descubra como realçar sua beleza de forma única!</p>
      <div className="portfolio-cards">
        <div className="card-portfolio" onClick={() => irParaGaleria('fotos')}>
          <h3> <FaImages className="icon-portfolio" size={40} /> <br/> Fotos</h3>
          <p>Veja os registros dos meus trabalhos</p>
        </div>
        <div className="card-portfolio" onClick={() => irParaGaleria('videos')}>
          <h3><FaVideo className="icon-portfolio" size={40} /> <br/> Vídeos</h3>
          <p>Acompanhe bastidores, tutoriais e resultados</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
