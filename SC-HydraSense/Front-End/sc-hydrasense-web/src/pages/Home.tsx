import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
      <h1>Bem-vindo ao SC_HydraSense</h1>
      <button 
        onClick={() => navigate('/registro')} /* Atualizado para /registro */
        style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer', marginTop: '20px' }}
      >
        Ir para a tela de Registro
      </button>
    </div>
  );
}