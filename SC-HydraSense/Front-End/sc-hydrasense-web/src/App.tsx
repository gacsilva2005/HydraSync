// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Identifier } from './pages/Identifier'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registro" element={<Register />} /> 
      {/* Aqui definimos que o link no navegador será /identificacao */}
      <Route path="/identificacao" element={<Identifier />} /> 
    </Routes>
  );
}

export default App;