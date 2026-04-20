import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Identifier } from './pages/Identifier'; 
import { Team } from './pages/Team'; 
import { Athlete } from './pages/Athlete'; // 1. Importe o novo componente

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registro" element={<Register />} /> 
      <Route path="/identificacao" element={<Identifier />} /> 
      <Route path="/equipe" element={<Team />} /> 
      {/* 2. Adicione a rota do Atleta aqui */}
      <Route path="/athlete" element={<Athlete />} /> 
    </Routes>
  );
}

export default App;