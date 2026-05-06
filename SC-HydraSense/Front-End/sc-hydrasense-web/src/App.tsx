import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

import { Register } from "./pages/Login/Register";
import { Identifier } from "./pages/Login/Identifier";
import { Team } from "./pages/Login/Team";
import { Athlete } from "./pages/Login/Athlete";

import { PageWeb } from "./pages/PaginasSite/PageWeb";
import { Atletas } from "./pages/PaginasSite/Atletas";
import { Dashboard } from "./pages/PaginasSite/Dashboard";
import { Equipes } from "./pages/PaginasSite/Equipes";
import { RelatorioEquipe } from "./pages/PaginasSite/RelatorioEquipe";
import { Relatorios } from "./pages/PaginasSite/Relatorios";
import { Configuracoes } from "./pages/PaginasSite/Configuracoes";

function App() {
    return (
        <Routes>
            {/* Rotas públicas */}
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/identificador" element={<Identifier />} />
            <Route path="/equipe" element={<Team />} />
            <Route path="/athlete" element={<Athlete />} />

            {/* Rotas do Painel Web */}
            <Route path="/PageWeb" element={<PageWeb />}>
                <Route index element={<Dashboard />} />
                <Route path="atletas" element={<Atletas />} />
                <Route path="equipes" element={<Equipes />} />
                <Route path="equipes/relatorio" element={<RelatorioEquipe />} />
                <Route path="relatorios" element={<Relatorios />} />
                <Route path="configuracoes" element={<Configuracoes />} />
            </Route>
        </Routes>
    );
}

export default App;