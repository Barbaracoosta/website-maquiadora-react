import React from 'react';

export default function GaleriaFotos() {
  return (
    <section className="galeria">
      <h2>Galeria de Fotos</h2>
      <p>Imagens dos trabalhos feitos com amor!</p>
      <div className="grid-fotos">
        <img src="/imagens/make1.jpeg" alt="Foto 1" />
        <img src="/imagens/make2.jpeg" alt="Foto 2" />
        <img src="/imagens/make3.jpeg" alt="Foto 3" />
        <img src="/imagens/make4.jpeg" alt="Foto 4" />
        <img src="/imagens/make5.jpeg" alt="Foto 5" />
      </div>
    </section>
  );
}
