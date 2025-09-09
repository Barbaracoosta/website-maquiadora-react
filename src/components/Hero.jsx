import './Hero.css';
import capa from '../assets/pam-capa0.jpg';

function Hero() {
  return (
    <section id="hero" className="hero" style={{ backgroundImage: `url(${capa})` }}>         
      <div className="overlay"></div> 
      <div className="hero-content">
        <h1>
          Pâmella Borba
          <span className="subtitle">Maquiadora</span>
        </h1>
        <p className="hero-frase">Beleza com propósito!</p>
        <a href="#portfolio" className="btn-hero">Conheça meu trabalho</a>
      </div>
    </section>
  );
}

export default Hero;
