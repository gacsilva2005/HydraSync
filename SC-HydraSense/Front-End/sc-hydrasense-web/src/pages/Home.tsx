import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Unlock, ChevronRight, Globe, Apple, Droplet } from 'lucide-react';
import './Home.css';

import logoFundo from '../assets/Logo-Fundo.png';

export function Home() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      {/* Lado Esquerdo: Branding */}
      <div 
        className="login-branding" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(100, 18, 32, 0.85), rgba(100, 18, 32, 0.85)), url(${logoFundo})` 
        }}
      >
        {/* Logo Superior Esquerdo */}
        <div className="logo-section">
          <Droplet size={24} color="#FFFFFF" fill="#FFFFFF" />
          <span className="logo-text">HYDRA SENSE</span>
        </div>

        {/* Rodapé Centralizado e na Base */}
        <div className="branding-footer">
          <h2 className="hospital-name">HOSPITAL</h2>
          <h3 className="brand-name">SÃO CAMILO</h3>
        </div>
      </div>

      {/* Lado Direito: Formulário */}
      <div className="login-form-side">
        <div className="form-wrapper">
          <header className="form-header">
            <h1>ACESSO AO PORTAL</h1>
            <p>Insira suas credenciais técnicas para autenticação.</p>
          </header>

          <form className="login-form" onSubmit={(e) => { e.preventDefault(); navigate('/PageWeb'); }}>
            <div className="input-group">
              <label>ENDEREÇO DE E-MAIL</label>
              <div className="input-field">
                <input type="email" placeholder="nome@performance.com" required />
                <Mail size={18} color="#6C757D" />
              </div>
            </div>

            <div className="input-group">
              <label>SENHA DE ACESSO</label>
              <div className="input-field">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  required 
                />
                <button 
                  type="button" 
                  className="btn-show-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Unlock size={18} color="#D90429" />
                  ) : (
                    <Lock size={18} color="#6C757D" />
                  )}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" /> Lembrar sessão
              </label>
              <button type="button" className="forgot-password">ESQUECI MINHA SENHA</button>
            </div>

            <button type="submit" className="btn-login-primary">
              ACESSAR PORTAL <ChevronRight size={18} />
            </button>

            <div className="divider">
              <span>OU CONECTE VIA</span>
            </div>

            <div className="social-login">
              <button type="button" className="btn-social">
                <Globe size={18} /> GOOGLE
              </button>
              <button type="button" className="btn-social">
                <Apple size={18} /> APPLE
              </button>
            </div>

            <p className="signup-prompt">
              Novo no Hydra Sense? 
              <span onClick={() => navigate('/registro')} style={{cursor: 'pointer'}}> Solicitar acesso ao Painel</span>
            </p>
            
            {/* Botão de atalho para dev mantido temporariamente */}
            <button 
              onClick={() => navigate('/PageWeb')}
              style={{ marginTop: '20px', padding: '5px', fontSize: '12px', background: 'transparent', border: '1px solid #ccc', cursor: 'pointer' }}
            >
              [Dev] Pular direto para o Painel Web
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}