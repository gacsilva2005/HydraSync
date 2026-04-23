import { ArrowLeft, Save, User, Mail, Weight, Ruler } from 'lucide-react';
import './PageWeb.css';

interface NovoAtletaProps {
    onBack: () => void;
}

export function NovoAtleta({ onBack }: NovoAtletaProps) {
    return (
        <div className="novo-atleta-wrapper">
            {/* Cabeçalho do Formulário */}
            <div className="atletas-header">
                <div className="atletas-header__info">
                    <button className="btn-back" onClick={onBack}>
                        <ArrowLeft size={20} /> Voltar para a listagem
                    </button>
                    <h1 className="pageweb__title">CADASTRAR NOVO ATLETA</h1>
                    <p>Preencha os dados técnicos abaixo para iniciar o monitoramento de hidratação.</p>
                </div>
            </div>

            <form className="novo-atleta-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-grid">
                    {/* Informações Básicas */}
                    <div className="filtro-grupo">
                        <label>Nome Completo</label>
                        <div className="input-wrapper">
                            <User size={18} className="icone-busca" />
                            <input type="text" placeholder="Ex: Carlos Silva" />
                        </div>
                    </div>

                    <div className="filtro-grupo">
                        <label>E-mail de Contato</label>
                        <div className="input-wrapper">
                            <Mail size={18} className="icone-busca" />
                            <input type="email" placeholder="atleta@time.com" />
                        </div>
                    </div>

                    {/* Seleção de Time e Modalidade */}
                    <div className="filtro-grupo">
                        <label>Time / Clube</label>
                        <select defaultValue="">
                            <option value="" disabled>Selecione o time</option>
                            <option value="SPFC">São Paulo FC</option>
                            <option value="PAL">Palmeiras</option>
                            <option value="COR">Corinthians</option>
                            <option value="SAN">Santos</option>
                        </select>
                    </div>

                    <div className="filtro-grupo">
                        <label>Modalidade</label>
                        <select defaultValue="">
                            <option value="" disabled>Selecione a modalidade</option>
                            <option value="futebol">Futebol</option>
                            <option value="basquete">Basquete</option>
                            <option value="volei">Vôlei</option>
                        </select>
                    </div>

                    {/* Dados Físicos */}
                    <div className="filtro-grupo">
                        <label>Peso Inicial (kg)</label>
                        <div className="input-wrapper">
                            <Weight size={18} className="icone-busca" />
                            <input type="number" placeholder="00.0" />
                        </div>
                    </div>

                    <div className="filtro-grupo">
                        <label>Altura (cm)</label>
                        <div className="input-wrapper">
                            <Ruler size={18} className="icone-busca" />
                            <input type="number" placeholder="180" />
                        </div>
                    </div>
                </div>

                <div className="form-actions">
                    <button type="button" className="btn-secondary" onClick={onBack}>CANCELAR</button>
                    <button type="submit" className="btn-primary">
                        <Save size={18} /> SALVAR REGISTRO
                    </button>
                </div>
            </form>
        </div>
    );
}