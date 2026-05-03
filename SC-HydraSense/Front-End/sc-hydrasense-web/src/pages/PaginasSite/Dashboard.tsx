export function Dashboard() {
  return (
    <>
      {/* === CABEÇALHO E FILTROS === */}
      <header className="atletas-header" style={{ marginBottom: '32px' }}>
        <div className="atletas-header__info">
          <h1 style={{ color: 'var(--hydro-text-primary)' }}>ESCOPO DE DADOS</h1>
        </div>
        <div className="filtros-container" style={{ width: 'auto', marginBottom: 0 }}>
          <div className="filtro-grupo">
            <select>
              <option>Equipe: Primeiro Esquadrão</option>
            </select>
          </div>
          <div className="filtro-grupo">
            <select>
              <option>Período: Últimos 7 Dias</option>
            </select>
          </div>
          <div className="filtro-grupo">
            <select>
              <option>Modalidade: Campo</option>
            </select>
          </div>
          <div className="filtro-grupo">
            <select>
              <option>Amb: Quente/Úmido</option>
            </select>
          </div>
        </div>
      </header>

      {/* === CARTÕES DE RESUMO (KPIs) === */}
      <section className="kpi-grid" style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
        <div className="kpi-card" style={{ flex: 1, padding: '20px', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid var(--hydro-border)' }}>
          <p style={{ fontSize: '10px', color: 'var(--hydro-action-hover)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>SESSÕES REGISTRADAS</p>
          <h2 style={{ fontSize: '32px', margin: '8px 0 0 0', color: 'var(--hydro-text-primary)' }}>124</h2>
        </div>

        <div className="kpi-card" style={{ flex: 1, padding: '20px', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid var(--hydro-border)' }}>
          <p style={{ fontSize: '10px', color: 'var(--hydro-action-hover)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>PERDA MÉDIA DE MASSA %</p>
          <h2 style={{ fontSize: '32px', margin: '8px 0 0 0', color: 'var(--hydro-text-primary)' }}>1.84<span style={{ fontSize: '16px', color: 'var(--hydro-text-muted)' }}>%</span></h2>
        </div>

        <div className="kpi-card" style={{ flex: 1, padding: '20px', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid var(--hydro-border)' }}>
          <p style={{ fontSize: '10px', color: 'var(--hydro-action-hover)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>TAXA MÉDIA DE SUDORESE</p>
          <h2 style={{ fontSize: '32px', margin: '8px 0 0 0', color: 'var(--hydro-text-primary)' }}>1.12 <span style={{ fontSize: '16px', color: 'var(--hydro-text-muted)' }}>L/h</span></h2>
        </div>

        <div className="kpi-card alert" style={{ flex: 1, padding: '20px', backgroundColor: 'var(--hydro-critical)', color: '#fff', borderRadius: '8px' }}>
          <p style={{ fontSize: '10px', fontWeight: 700, opacity: 0.9, letterSpacing: '0.5px' }}>ATLETAS &gt;2% PERDA</p>
          <h2 style={{ fontSize: '32px', margin: '8px 0 0 0', color: '#fff' }}>14 ⚠️</h2>
        </div>

        <div className="kpi-card warning" style={{ flex: 1, padding: '20px', backgroundColor: '#E67E22', color: '#fff', borderRadius: '8px' }}>
          <p style={{ fontSize: '10px', fontWeight: 700, opacity: 0.9, letterSpacing: '0.5px' }}>ALERTAS DE GANHO DE PESO</p>
          <h2 style={{ fontSize: '32px', margin: '8px 0 0 0', color: '#fff' }}>3</h2>
        </div>

        <div className="kpi-card" style={{ flex: 1, padding: '20px', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid var(--hydro-border)' }}>
          <p style={{ fontSize: '10px', color: 'var(--hydro-action-hover)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>AMBIENTE MÉDIO</p>
          <h2 style={{ fontSize: '24px', margin: '4px 0 0 0', color: 'var(--hydro-text-primary)' }}>28°C</h2>
          <p style={{ fontSize: '14px', color: 'var(--hydro-text-muted)' }}>65% UR</p>
        </div>
      </section>

      {/* === ÁREA CENTRAL (Tabela + Alertas) === */}
      <div className="dashboard-middle-area">

        <section className="atletas-tabela-container">
          <h3 style={{ fontSize: '16px', color: 'var(--hydro-action-hover)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            📊 MAPA DE RISCO
          </h3>
          <table className="atletas-table">
            <thead>
              <tr>
                <th>CÓDIGO</th>
                <th>EQUIPE</th>
                <th>% VAR MASSA</th>
                <th>SUOR L/H</th>
                <th>URINA/SINT</th>
                <th>ALERTA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: 600, color: 'var(--hydro-text-primary)' }}>ATH-042</td>
                <td style={{ color: 'var(--hydro-text-muted)' }}>ZAG</td>
                <td><span style={{ backgroundColor: '#ffeaea', color: '#9d1b1b', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600 }}>-2.3%</span></td>
                <td style={{ color: 'var(--hydro-text-primary)' }}>1.85</td>
                <td><span style={{ color: '#E67E22' }}>●</span> 4</td>
                <td><span style={{ color: 'var(--hydro-critical)', fontSize: '18px' }}>🛑</span></td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600, color: 'var(--hydro-text-primary)' }}>ATH-018</td>
                <td style={{ color: 'var(--hydro-text-muted)' }}>MEI</td>
                <td><span style={{ backgroundColor: '#e8f9f0', color: '#0b8a47', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600 }}>-0.8%</span></td>
                <td style={{ color: 'var(--hydro-text-primary)' }}>0.95</td>
                <td><span style={{ color: '#F1C40F' }}>●</span> 2</td>
                <td>-</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600, color: 'var(--hydro-text-primary)' }}>ATH-009</td>
                <td style={{ color: 'var(--hydro-text-muted)' }}>ATA</td>
                <td><span style={{ backgroundColor: '#fef1e8', color: '#c9601d', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600 }}>-1.4%</span></td>
                <td style={{ color: 'var(--hydro-text-primary)' }}>1.40</td>
                <td><span style={{ color: '#E67E22' }}>●</span> 6</td>
                <td>-</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600, color: 'var(--hydro-text-primary)' }}>ATH-088</td>
                <td style={{ color: 'var(--hydro-text-muted)' }}>GOL</td>
                <td><span style={{ backgroundColor: '#ffeaea', color: '#9d1b1b', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600 }}>-2.1%</span></td>
                <td style={{ color: 'var(--hydro-text-primary)' }}>0.60</td>
                <td><span style={{ color: '#F1C40F' }}>●</span> 1</td>
                <td><span style={{ color: '#E67E22', fontSize: '18px' }}>⚠️</span></td>
              </tr>
            </tbody>
          </table>
        </section>

        <aside style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ fontSize: '16px', color: 'var(--hydro-action-hover)', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            ⏱️ INCONSISTÊNCIAS ATIVAS
          </h3>

          <div style={{ backgroundColor: '#F8F9FA', borderLeft: '4px solid var(--hydro-critical)', padding: '16px', borderRadius: '0 8px 8px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--hydro-text-primary)' }}>ATH-042</span>
              <span style={{ fontSize: '12px', color: 'var(--hydro-text-muted)' }}>há 1d</span>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--hydro-text-muted)', margin: 0 }}>Taxa de sudorese &gt; 2.5 L/h.<br />Outlier extremo para as condições ambientais atuais.</p>
          </div>

          <div style={{ backgroundColor: '#F8F9FA', borderLeft: '4px solid #E67E22', padding: '16px', borderRadius: '0 8px 8px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--hydro-text-primary)' }}>ATH-088</span>
              <span style={{ fontSize: '12px', color: 'var(--hydro-text-muted)' }}>há 1d</span>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--hydro-text-muted)', margin: 0 }}>Taxa de sudorese &gt; 2.5 L/h.<br />Outlier extremo para as condições ambientais atuais.</p>
          </div>

          <div style={{ backgroundColor: '#F8F9FA', borderLeft: '4px solid var(--hydro-critical)', padding: '16px', borderRadius: '0 8px 8px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--hydro-text-primary)' }}>ATH-012</span>
              <span style={{ fontSize: '12px', color: 'var(--hydro-text-muted)' }}>há 1d</span>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--hydro-text-muted)', margin: 0 }}>Taxa de sudorese &gt; 2.5 L/h.<br />Outlier extremo para as condições ambientais atuais.</p>
          </div>
        </aside>

      </div>

      {/* === GRÁFICOS === */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
        <div style={{ backgroundColor: '#fff', border: '1px solid var(--hydro-border)', borderRadius: '8px', padding: '24px', minHeight: '250px', display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ fontSize: '14px', margin: '0 0 16px 0', color: 'var(--hydro-text-primary)', fontWeight: 700 }}>PERDA DE MASSA VS TEMPERATURA</h4>
          <div style={{ flex: 1, backgroundColor: '#F8F9FA', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--hydro-text-muted)', fontSize: '12px' }}>
            ÁREA DE VISUALIZAÇÃO DO GRÁFICO DE LINHA DUPLA
          </div>
        </div>

        <div style={{ backgroundColor: '#fff', border: '1px solid var(--hydro-border)', borderRadius: '8px', padding: '24px', minHeight: '250px', display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ fontSize: '14px', margin: '0 0 16px 0', color: 'var(--hydro-text-primary)', fontWeight: 700 }}>MAPA DE CALOR — TAXA DE SUDORESE</h4>
          <div style={{ flex: 1, backgroundColor: '#F8F9FA', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--hydro-text-muted)', fontSize: '12px' }}>
            ÁREA DO MAPA DE CALOR POR HORA DO DIA
          </div>
        </div>
      </section>

      {/* === RODAPÉ DE QUALIDADE DE DADOS === */}
      <footer style={{ backgroundColor: '#F8F9FA', border: '1px solid var(--hydro-border)', borderRadius: '8px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ padding: '8px', backgroundColor: '#fff', border: '1px solid var(--hydro-border)', borderRadius: '4px', color: 'var(--hydro-critical)' }}>
            📋
          </div>
          <div>
            <h4 style={{ margin: 0, fontSize: '14px', color: 'var(--hydro-text-primary)' }}>Qualidade de Dados &amp; Adesão</h4>
            <p style={{ margin: 0, fontSize: '12px', color: 'var(--hydro-text-muted)' }}>Taxa de conclusão do checklist: <span style={{ color: 'var(--hydro-critical)', fontWeight: 700 }}>87%</span></p>
          </div>
        </div>
        <div style={{ backgroundColor: '#fff', border: '1px solid var(--hydro-border)', padding: '6px 12px', borderRadius: '16px', fontSize: '12px', color: 'var(--hydro-text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ color: 'var(--hydro-critical)' }}>●</span> 5 Atletas ausentes &gt;7 dias
        </div>
      </footer>
    </>
  );
}