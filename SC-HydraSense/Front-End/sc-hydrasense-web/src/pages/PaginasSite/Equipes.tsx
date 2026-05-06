import { useNavigate } from 'react-router-dom';
import teamLogo from '../../assets/icone_petala.png';

export function Equipes() {
    const navigate = useNavigate();

    return (
        <>
            {/* === CABEÇALHO === */}
            <header className="atletas-header" style={{ alignItems: 'center' }}>
                <div className="atletas-header__info">
                    <h1 style={{ color: 'var(--hydro-text-primary)' }}>EQUIPES PRINCIPAIS</h1>
                    <p className="equipes-header-subtitle">
                        Visão geral de performance e aderência biométrica.
                    </p>
                </div>
                <button className="btn-primary equipes-btn-add">
                    ADICIONAR EQUIPE
                </button>
            </header>

            {/* === CARTÕES DE RESUMO GERAL === */}
            <section className="equipes-kpi-container">
                <div className="equipes-kpi-card borda-critica">
                    <p className="equipes-kpi-titulo">ADERÊNCIA DA EQUIPE</p>
                    <h2 className="equipes-kpi-valor">
                        94<span>%</span>
                    </h2>
                </div>

                <div className="equipes-kpi-card borda-critica">
                    <p className="equipes-kpi-titulo">ALERTAS CRÍTICOS</p>
                    <h2 className="equipes-kpi-valor">03</h2>
                </div>

                <div className="equipes-kpi-card">
                    <p className="equipes-kpi-titulo">ATLETAS ATIVOS</p>
                    <h2 className="equipes-kpi-valor">42</h2>
                </div>

                <div className="equipes-kpi-card">
                    <p className="equipes-kpi-titulo">TAXA DE SUOR MÉDIA</p>
                    <h2 className="equipes-kpi-valor">
                        1.2<span className="unidade">L/h</span>
                    </h2>
                </div>
            </section>

            {/* === ÁREA DE CONTEÚDO (DUAS COLUNAS) === */}
            <div className="equipes-layout-principal">

                {/* === ROSTER DE EQUIPES === */}
                <section>
                    <h3 className="equipes-roster-titulo">
                        ROSTER DE EQUIPES
                    </h3>

                    <div className="equipes-roster-grid">

                        <div className="equipe-card" onClick={() => navigate('/PageWeb/equipes/relatorio')}>
                            <div className="equipe-card-status-dot"></div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                <img src={teamLogo} alt="Logo Equipe" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                                <h4 className="equipe-card-nome" style={{ margin: 0 }}>FUTEBOL MASCULINO A</h4>
                            </div>
                            <p className="equipe-card-esporte">Esporte: Futebol de Campo</p>

                            <div className="equipe-card-stats">
                                <div className="equipe-stat-item">
                                    <p>ATLETAS</p>
                                    <p>24</p>
                                </div>
                                <div className="equipe-stat-item">
                                    <p>ADERÊNCIA</p>
                                    <p className="critico">96%</p>
                                </div>
                                <div className="equipe-stat-item">
                                    <p>SUOR MÉDIO</p>
                                    <p>1.4L/h</p>
                                </div>
                            </div>
                        </div>

                        <div className="equipe-card inativa" onClick={() => navigate('/PageWeb/equipes/relatorio')}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                <img src={teamLogo} alt="Logo Equipe" style={{ width: '32px', height: '32px', objectFit: 'contain', opacity: 0.6 }} />
                                <h4 className="equipe-card-nome" style={{ margin: 0 }}>BASQUETE SUB-20</h4>
                            </div>
                            <p className="equipe-card-esporte">Esporte: Basquete</p>

                            <div className="equipe-card-stats">
                                <div className="equipe-stat-item">
                                    <p>ATLETAS</p>
                                    <p>18</p>
                                </div>
                                <div className="equipe-stat-item">
                                    <p>ADERÊNCIA</p>
                                    <p>88%</p>
                                </div>
                                <div className="equipe-stat-item">
                                    <p>SUOR MÉDIO</p>
                                    <p>1.1L/h</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* === BARRA LATERAL DE ATLETAS === */}
                <aside className="equipes-sidebar">
                    <div className="equipes-sidebar-header">
                        <h3 className="equipes-sidebar-titulo">
                            ATLETAS SELECIONADOS
                        </h3>
                        <span className="equipes-sidebar-tag">
                            FUT-MASC-A
                        </span>
                    </div>

                    <div className="equipes-sidebar-lista">

                        <div className="atleta-item">
                            <div className="atleta-item-avatar">
                                <img src={teamLogo} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px' }} />
                            </div>
                            <div className="atleta-item-info">
                                <p className="atleta-item-nome">Silva, Carlos</p>
                                <p className="atleta-item-posicao">ATACANTE</p>
                            </div>
                            <div className="atleta-item-status">
                                <span className="badge-status ideal">IDEAL</span>
                                <span className="dot-status ideal"></span>
                            </div>
                        </div>

                        <div className="atleta-item">
                            <div className="atleta-item-avatar">
                                <img src={teamLogo} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px' }} />
                            </div>
                            <div className="atleta-item-info">
                                <p className="atleta-item-nome">Santos, ...</p>
                                <p className="atleta-item-posicao">MEIO-CAMPO</p>
                            </div>
                            <div className="atleta-item-status">
                                <span className="badge-status alerta">ALERTA</span>
                                <span className="dot-status alerta"></span>
                            </div>
                        </div>

                        <div className="atleta-item critico">
                            <div className="atleta-item-avatar">
                                <img src={teamLogo} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px' }} />
                            </div>
                            <div className="atleta-item-info">
                                <p className="atleta-item-nome">Oliveira, ...</p>
                                <p className="atleta-item-posicao">ZAGUEIRO</p>
                            </div>
                            <div className="atleta-item-status">
                                <span className="badge-status critico">CRÍTICO</span>
                                <span className="dot-status critico"></span>
                            </div>
                        </div>

                    </div>
                </aside>
            </div>
        </>
    );
}