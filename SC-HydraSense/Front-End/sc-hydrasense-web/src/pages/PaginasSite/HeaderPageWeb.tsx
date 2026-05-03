import logo from '../../assets/icone_petala.png';

export function HeaderPageWeb() {
    return (
        <header className="hydro-header">
            <div className="hydro-header-logo-container">
                <img src={logo} alt="Logo HydraSense" className="hydro-header-logo-img" />
                <h1 className="hydro-header-title">HydraSense</h1>
            </div>
            <nav>
                <ul>
                    <li><input type="text"
                        placeholder="Buscar..."
                        className="hydro-header-search" />
                    </li>
                    <li>Notificações</li>
                    <li>Perfil</li>
                </ul>
            </nav>
        </header>
    )
}