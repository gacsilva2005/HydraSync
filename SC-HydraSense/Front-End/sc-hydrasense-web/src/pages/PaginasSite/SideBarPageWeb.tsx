import { useNavigate, useLocation } from 'react-router-dom';

const menuItems = [
    { label: 'Dashboard', path: '/PageWeb' },
    { label: 'Atletas', path: '/PageWeb/atletas' },
    { label: 'Equipes', path: '/PageWeb/equipes' },
    { label: 'Relatórios', path: '/PageWeb/relatorios' },
    { label: 'Configurações', path: '/PageWeb/configuracoes' }
];

export function SideBarPageWeb() {
    const navigate = useNavigate();
    const location = useLocation();

    const checkIsActive = (path: string) => {
        if (path === '/PageWeb') {
            return location.pathname === '/PageWeb' || location.pathname === '/PageWeb/';
        }
        return location.pathname.includes(path);
    };

    return (
        <aside className="hydro-sidebar">
            <nav>
                <ul className="hydro-sidebar-menu">
                    {menuItems.map((item) => (
                        <li
                            key={item.label}
                            className={checkIsActive(item.path) ? 'active' : ''}
                            onClick={() => navigate(item.path)}
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