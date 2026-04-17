import { useNavigate, useLocation } from 'react-router-dom';

export function SideBarPageWeb() {
    const navigate = useNavigate();
    const location = useLocation(); // Lê a URL atual do navegador em tempo real

    const menuItems = [
        { label: 'Dashboard', path: '/PageWeb' },
        { label: 'Atletas', path: '/PageWeb/atletas' },
        { label: 'Equipes', path: '/PageWeb/equipes' },
        { label: 'Relatórios', path: '/PageWeb/relatorios' },
        { label: 'Configurações', path: '/PageWeb/configuracoes' }
    ];

    // Função que checa se a URL atual bate com o caminho do botão
    const checkIsActive = (path: string) => {
        // Regra especial para o Dashboard não ficar ativo em outras telas
        if (path === '/PageWeb') {
            return location.pathname === '/PageWeb' || location.pathname === '/PageWeb/';
        }
        // Para as outras abas, verifica se a URL contém o path
        return location.pathname.includes(path);
    };

    return (
        <aside className="hydro-sidebar">
            <h2 className="hydro-sidebar-logo">
                HydraSense
            </h2>
            <nav>
                <ul className="hydro-sidebar-menu">
                    {menuItems.map((item) => (
                        <li
                            key={item.label}
                            /* O active agora é 100% amarrado à URL do navegador */
                            className={checkIsActive(item.path) ? 'active' : ''}
                            
                            /* Um clique em qualquer lugar do LI navega para a rota correta */
                            onClick={() => navigate(item.path)} 
                            
                            /* Garante que o cursor fique como 'mãozinha' em toda a área */
                            style={{ cursor: 'pointer' }}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}