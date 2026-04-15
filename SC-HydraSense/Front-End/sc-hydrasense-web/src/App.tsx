// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/Register'; // Correção do erro de módulo aqui!

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Mudamos o link aqui para /registro */}
      <Route path="/registro" element={<Register />} /> 
    </Routes>
  );
}

export default App;