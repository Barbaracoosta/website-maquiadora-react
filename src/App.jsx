import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Portfolio from './components/Portfolio';
import Servicos from './components/Servicos';
import Cursos from './components/Cursos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1800);
  }, []);

  if (loading) {
    return (
      <div className="loading-glitter">
        <div className="glitter-dot"></div>
        <div className="glitter-dot"></div>
        <div className="glitter-dot"></div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Hero />
      <Sobre />
      <Portfolio />
      <Servicos />
      <Cursos />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
