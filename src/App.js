import { useEffect, useState } from 'react';
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
      
    </>
  );
}

export default App;
