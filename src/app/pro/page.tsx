export default function ProPage() {
    return (
        <main className="container" style={{ paddingBottom: '6rem', paddingTop: '2rem' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: '300', marginBottom: '1rem' }}>Espace Pro</h1>
            <p style={{ opacity: 0.7, marginBottom: '2rem' }}>Outils pour hypnothérapeutes.</p>

            <div style={{ display: 'grid', gap: '1rem' }}>
                <div className="glass" style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Mes Scripts</h3>
                    <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Créer et éditer des scripts d&apos;hypnose.</p>
                </div>

                <div className="glass" style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Clients</h3>
                    <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Suivre les progrès de vos patients.</p>
                </div>
            </div>
        </main>
    );
}
