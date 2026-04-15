import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Microscope, Utensils, Activity, BriefcaseMedical } from 'lucide-react';
import './Register.css';

const PERFIS = [
  { id: 'nutricionista', rotulo: 'NUTRICIONISTA', icone: <Utensils size={24} /> },
  { id: 'treinador', rotulo: 'TREINADOR', icone: <Activity size={24} /> },
  { id: 'medico', rotulo: 'MÉDICO', icone: <BriefcaseMedical size={24} /> },
];

export function Register() {
  const navigate = useNavigate();
  const [perfilAtivo, setPerfilAtivo] = useState('nutricionista');

  return (
    <div className="tela-registro">
      
      {/* =========================================
          PAINEL LATERAL ESQUERDO (VERMELHO)
      ========================================= */}
      <aside className="painel-lateral">
        
        <div className="lateral-topo">
          <h2 className="lateral-titulo">SÃO CAMILO WEB</h2>
          <span className="lateral-subtitulo">HYDRO SYNC PROTOCOLO V4.0</span>
        </div>

        <div className="lateral-meio">
          <div className="lateral-icone">
            {/* Ícone reduzido para acompanhar a nova proporção da barra */}
            <Microscope size={28} strokeWidth={1.5} />
          </div>
          <div className="lateral-textos-meio">
            <h3 className="lateral-destaque">PRECISÃO CLÍNICA</h3>
            <p className="lateral-texto">
              Cadastre suas credenciais profissionais<br/>
              para acessar logs de performance de alta<br/>
              densidade e análises de hidratação.
            </p>
          </div>
        </div>

        <div className="lateral-rodape">
          <div className="trilhas-progresso">
            <div className="trilha ativa"></div>
            <div className="trilha"></div>
            <div className="trilha"></div>
          </div>
          <div className="legendas-progresso">
            <span className="legenda-progresso ativa">IDENTIDADE</span>
            <span className="legenda-progresso">CREDENCIAIS</span>
            <span className="legenda-progresso">EQUIPE</span>
          </div>
        </div>

      </aside>

      {/* =========================================
          PAINEL PRINCIPAL (BRANCO/CINZA)
      ========================================= */}
      <main className="painel-principal">
        
        <header className="cabecalho-fluxo">
          <span className="texto-passo">PASSO 01 / IDENTIDADE</span>
          <h1 className="titulo-pagina">CADASTRO DE ALUNO</h1>
        </header>

        <section className="secao-selecao">
          <h2 className="titulo-secao">SELECIONE O PERFIL PROFISSIONAL</h2>
          <div className="grade-perfis">
            {PERFIS.map((perfil) => (
              <button
                key={perfil.id}
                type="button"
                className={`botao-perfil ${perfilAtivo === perfil.id ? 'ativo' : ''}`}
                onClick={() => setPerfilAtivo(perfil.id)}
              >
                <span className="icone-perfil">{perfil.icone}</span>
                <span className="legenda-perfil">{perfil.rotulo}</span>
              </button>
            ))}
          </div>
        </section>

        <form className="formulario-corpo">
          <div className="campo-entrada">
            <label>NOME COMPLETO</label>
            <input type="text" placeholder="Nome Completo" required />
          </div>

          <div className="linha-dupla">
            <div className="campo-entrada">
              <label>REGISTRO PROFISSIONAL (CRN/CRM)</label>
              <input type="text" placeholder="Ex: CRM-12345" required />
            </div>
            <div className="campo-entrada">
              <label>INSTITUIÇÃO/CLUBE</label>
              <input type="text" placeholder="Organização" required />
            </div>
          </div>

          <footer className="acoes-formulario">
            <button type="submit" className="botao-acao-principal">
              CRIAR CONTA
            </button>
            
            <div className="bloco-login">
              <span className="pergunta-login">Já tem uma conta?</span>
              <button 
                type="button" 
                className="botao-acao-secundario"
                onClick={() => navigate('/')}
              >
                Fazer Login
              </button>
            </div>
          </footer>
        </form>

      </main>
    </div>
  );
}