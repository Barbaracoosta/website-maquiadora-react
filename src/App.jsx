import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Portfolio from './components/Portfolio';
import Servicos from './components/Servicos';
import Cursos from './components/Cursos';
import Contato from './components/Contato';
import Faq from './components/Faq';
import Footer from './components/Footer';

import GaleriaFotos from './pages/GaleriaFotos';
import GaleriaVideos from './pages/GaleriaVideos';

import './App.css';
import Depoimentos from './components/Depoimentos';


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
    <Router>      
      <Header /> 
      <div className="linha-separadora animada"></div>                       
      <Routes>        
        <Route
          path="/"
          element={
            <>                          
              <Hero />
              <div className="linha-separadora animada"></div>               
              <Sobre />
              <Portfolio />
              <Servicos />
              <Cursos />
              <Depoimentos />
              <Faq />
              <Contato />
            </>
          }
        />        
        <Route path="/galeria/fotos" element={<GaleriaFotos />} />
        <Route path="/galeria/videos" element={<GaleriaVideos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
