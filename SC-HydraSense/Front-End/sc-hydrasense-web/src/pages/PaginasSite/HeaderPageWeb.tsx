export function HeaderPageWeb() {
    return (
        <header className="hydro-header">
            <h1>HydraSense</h1>
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