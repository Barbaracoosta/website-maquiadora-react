import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">         
      <h1>
        Pâmella Borba
        <span className="subtitle">Maquiadora</span>
      </h1>
      <p className="hero-frase">Beleza com propósito!</p>
      <a href="#portfolio" className="btn-hero">Conheça meu trabalho</a>
    </section>
  );
}

export default Hero;
