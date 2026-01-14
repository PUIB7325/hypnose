import Link from "next/link";
import { sessions } from "@/data/sessions";
import { PlayCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="container" style={{ paddingBottom: '6rem' }}>
      <header style={{ padding: '2rem 1rem', marginTop: '1rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '300', marginBottom: '0.5rem' }}>Bonjour,</h1>
        <p style={{ opacity: 0.7 }}>Prêt pour votre séance ?</p>
      </header>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', opacity: 0.9 }}>Séances Recommandées</h2>

        {sessions.map((session) => (
          <Link href={`/session/${session.id}`} key={session.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="glass" style={{
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              transition: 'transform 0.2s',
              cursor: 'pointer'
            }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <PlayCircle size={24} color="hsl(var(--primary))" />
              </div>

              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{session.title}</h3>
                <p style={{ fontSize: '0.85rem', opacity: 0.6, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {session.description}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {session.tags.map(tag => (
                    <span key={tag} style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>
                {Math.floor(session.duration / 60)} min
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
