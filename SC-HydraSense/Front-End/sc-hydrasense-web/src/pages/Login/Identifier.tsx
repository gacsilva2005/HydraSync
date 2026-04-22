import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Rocket, Mail, Phone, Lock, Camera, FileText, User, Eye, EyeOff, AlertCircle } from 'lucide-react';
import './Login.css';
import './Identifier.css';

export function Identifier() {
  const navigate = useNavigate();
  const location = useLocation();
  const dadosRegistro = location.state;
  const [concordaTermos, setConcordaTermos] = useState(false);
  const [receberAtualizacoes, setReceberAtualizacoes] = useState(false);
  const [fotoPreview, setFotoPreview] = useState<string | null>(null);
  
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [verSenha, setVerSenha] = useState(false);
  const [verConfirmarSenha, setVerConfirmarSenha] = useState(false);

  // Validação visual de senha em tempo real
  const erroSenha = confirmarSenha.length > 0 && senha !== confirmarSenha;

  const [dadosAcesso, setDadosAcesso] = useState({
      email: '',
      telefone: '',
      senha: '',
      resumo: ''
  });

  const handleChange = (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
      const { name, value } = e.target;
      setDadosAcesso(prev => ({
          ...prev,
          [name]: value
      }));
  };

  const handleFotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setFotoPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (senha !== confirmarSenha) return;

        if (!concordaTermos) {
            alert("Você precisa concordar com os termos.");
            return;
        }

        const dadosCompletos = {
            ...dadosRegistro,
            ...dadosAcesso
        };

        try {
            const response = await fetch('http://localhost:8080/profissionais', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosCompletos)
            });

            if (response.ok) {
                alert('Cadastro realizado com sucesso!');
                navigate('/');
            } else {
                alert('Erro ao cadastrar.');
            }
        } catch (error) {
            console.error(error);
            alert('Erro ao conectar com o servidor.');
        }
    };

  return (
    <div className="tela-registro">
      <aside className="painel-lateral">
        <div className="lateral-topo">
          <h2 className="lateral-titulo">SÃO CAMILO WEB</h2>
          <span className="lateral-subtitulo">HYDRO SENSE PROTOCOLO V4.0</span>
        </div>

        <div className="lateral-meio">
          <div className="lateral-icone">
            <Rocket size={28} strokeWidth={1.5} />
          </div>
          <div className="lateral-textos-meio">
            <h3 className="lateral-destaque">PRATICIDADE E RESULTADO</h3>
            <p className="lateral-texto">
              Tenha acesso a informações diretamente e <br/>
              construa planos de ação eficientes para <br/>
              otimizar o rendimento da sua equipe.
            </p>
          </div>
        </div>

        <div className="lateral-rodape">
          <div className="trilhas-progresso">
            <div className="trilha ativa"></div>
            <div className="trilha ativa"></div> 
            <div className="trilha"></div>
          </div>
          <div className="legendas-progresso">
            <span className="legenda-progresso ativa">IDENTIDADE</span>
            <span className="legenda-progresso ativa">CREDENCIAIS</span>
            <span className="legenda-progresso">EQUIPE</span>
          </div>
        </div>
      </aside>

      <main className="painel-principal">
        <header className="cabecalho-fluxo">
          <span className="texto-passo">PASSO 02 / IDENTIFICAÇÃO</span>
          <h1 className="titulo-pagina">DADOS DE ACESSO</h1>
        </header>

        <form className="formulario-corpo" onSubmit={handleSubmit}>
          <div className="linha-dupla">
            <div className="campo-entrada">
              <label>E-MAIL PROFISSIONAL</label>
              <div className="input-with-icon">
                <Mail size={18} />
                  <input
                      type="email"
                      name="email"
                      placeholder="seu@email.com"
                      value={dadosAcesso.email}
                      onChange={handleChange}
                      required
                  />
              </div>
            </div>
            <div className="campo-entrada">
              <label>CONTATO PROFISSIONAL</label>
              <div className="input-with-icon">
                <Phone size={18} />
                  <input
                      type="tel"
                      name="telefone"
                      placeholder="(00) 00000-0000"
                      value={dadosAcesso.telefone}
                      onChange={handleChange}
                      required
                  />
              </div>
            </div>
          </div>

          <div className="linha-dupla">
            <div className="campo-entrada">
                <label>SENHA DE ACESSO</label>
                <div className={`input-with-icon ${erroSenha ? 'erro' : ''}`}>
                    <Lock size={18} />
                    <input
                        type={verSenha ? "text" : "password"}
                        name="senha"
                        placeholder="••••••••"
                        value={senha}
                        onChange={(e) => {
                            setSenha(e.target.value);
                            setDadosAcesso(prev => ({
                                ...prev,
                                senha: e.target.value
                            }));
                        }}
                        required
                    />
                    <button type="button" className="botao-olhinho" onClick={() => setVerSenha(!verSenha)}>
                      {verSenha ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>
            </div>
            <div className="campo-entrada">
                <label>CONFIRMAR SENHA</label>
                <div className={`input-with-icon ${erroSenha ? 'erro' : ''}`}>
                    <Lock size={18} />
                    <input 
                      type={verConfirmarSenha ? "text" : "password"} 
                      placeholder="••••••••" 
                      value={confirmarSenha}
                      onChange={(e) => setConfirmarSenha(e.target.value)}
                      required 
                    />
                    <button type="button" className="botao-olhinho" onClick={() => setVerConfirmarSenha(!verConfirmarSenha)}>
                      {verConfirmarSenha ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>
                {erroSenha && (
                  <span className="msg-erro"><AlertCircle size={12} /> As senhas não coincidem</span>
                )}
            </div>
          </div>

          <div className="linha-dupla" style={{ alignItems: 'flex-end', gap: '40px' }}>
            <div className="campo-entrada" style={{ flex: 2 }}>
              <label>FOTO DE PERFIL (OPCIONAL)</label>
              <div className="input-with-icon">
                <Camera size={18} />
                <input type="file" accept="image/*" className="file-input" onChange={handleFotoChange} />
              </div>
            </div>
            <div className="preview-foto-3x4">
               {fotoPreview ? (
                 <img src={fotoPreview} alt="Preview" className="foto-3x4" />
               ) : (
                 <div className="foto-placeholder-3x4"><User size={28} /></div>
               )}
            </div>
          </div>

          <div className="campo-entrada">
            <label>RESUMO ({dadosAcesso.resumo.length}/300/300 CARACTERES)</label>
            <div className="input-with-icon" style={{ alignItems: 'flex-start' }}>
              <FileText size={18} style={{ marginTop: '10px' }} />
                <textarea
                    name="resumo"
                    placeholder="Conte um pouco sobre sua trajetória profissional..."
                    rows={3}
                    maxLength={300}
                    className="textarea-custom"
                    value={dadosAcesso.resumo}
                    onChange={handleChange}
                ></textarea>
            </div>
          </div>

          <div className="secao-termos">
            <label className="checkbox-label">
                <input type="checkbox" checked={receberAtualizacoes} onChange={() => setReceberAtualizacoes(!receberAtualizacoes)} />
                Concordo em receber atualizações via e-mail.
            </label>
            <label className="checkbox-label">
                <input type="checkbox" required checked={concordaTermos} onChange={() => setConcordaTermos(!concordaTermos)} />
                Concordo com os Termos de Uso e Privacidade.
            </label>
          </div>

          <footer className="acoes-formulario">
            <button type="submit" className="botao-acao-principal">FINALIZAR CADASTRO</button>
            <button type="button" className="botao-acao-secundario" onClick={() => navigate('/registro')}>Voltar</button>
          </footer>
        </form>
      </main>
    </div>
  );
}