import { useState } from "react";
import './GaleriaFotos.css';

function GaleriaFotos() {
  const [fotoAmpliada, setFotoAmpliada] = useState(null);

  const abrirFoto = (src) => setFotoAmpliada(src);
  const fecharFoto = () => setFotoAmpliada(null);

  return (
    <section className="galeria" id="galeria-fotos">
      <h2>Galeria de Fotos</h2>
      <p>Imagens dos trabalhos feitos com amor!</p>

      <div className="grid-fotos">
        {[
          "make1.jpeg","make1-1.jpeg","make2-2.jpeg","make2.jpeg","make2-1.jpeg",
          "make3.jpeg","make3-1.jpeg","make4.jpeg","make5.jpeg","make6.jpeg",
          "make6-2.jpeg","make6-3.jpeg","make6-4.jpeg",
          "make7.jpeg","make8.jpeg","make9.jpeg","make10.jpeg"
        ]
        .map((foto, i) => (
          <img 
            key={i} 
            src={`/imagens/${foto}`} 
            alt={`Foto make ${i+1}`}
            loading="lazy"
            className="galeria-item"
            onClick={() => abrirFoto(`/imagens/${foto}`)}
          />
        ))}
      </div>

      {fotoAmpliada && (
        <div className="modal" onClick={fecharFoto}>
          <img src={fotoAmpliada} alt="Foto ampliada" className="modal-img" />
        </div>
      )}
    </section>
  );
}

export default GaleriaFotos;
