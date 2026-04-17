export function Atletas() {
    return (
        <>
            <div className="atletas-header">
                <div className="atletas-header__info">
                    <h1 className="pageweb__title">NOSSOS ATLETAS</h1>
                    <p>
                        Monitoramento ativo da hidratação para acompanhamento do desempenho de atletas de elite.
                        Dados atualizados a cada 15 minutos.
                    </p>
                </div>

                <button className="btn-primary">+ NOVO ATLETA</button>
            </div>

            <section className="atletas-empty-state">
                <p>Nenhum atleta selecionado no momento.</p>
                <span style={{ fontSize: '14px' }}>
                    Utilize a barra de busca no topo ou adicione um novo registro.
                </span>
            </section>
        </>
    );
}