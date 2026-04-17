import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/Login/Register';
import { Identifier } from './pages/Login/Identifier';
import { PageWeb } from './pages/PaginasSite/PageWeb';
import { Atletas } from './pages/PaginasSite/Atletas';
import { Dashboard } from './pages/PaginasSite/Dashboard';
import { Equipes } from './pages/PaginasSite/Equipes';
import { Relatorios } from './pages/PaginasSite/Relatorios';
import { Configuracoes } from './pages/PaginasSite/Configuracoes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/identificador" element={<Identifier />} />
      <Route path="/PageWeb" element={<PageWeb />}>
        <Route path="atletas" element={<Atletas />} />
        <Route index element={<Dashboard />} />
        <Route path="equipes" element={<Equipes />} />
        <Route path="relatorios" element={<Relatorios />} />
        <Route path="configuracoes" element={<Configuracoes />} />
      </Route>
    </Routes>
  );
}

export default App;