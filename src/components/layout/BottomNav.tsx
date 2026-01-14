"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, PlusCircle, User } from "lucide-react";

export default function BottomNav() {
    const pathname = usePathname();

    if (pathname.startsWith("/session")) return null;

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="glass" style={{
            position: 'fixed',
            bottom: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'calc(100% - 2rem)',
            maxWidth: '500px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: '0.75rem',
            zIndex: 50
        }}>
            <NavItem href="/" icon={Home} label="Accueil" active={isActive('/')} />
            <NavItem href="/builder" icon={PlusCircle} label="Créer" active={isActive('/builder')} />
            <NavItem href="/pro" icon={User} label="Pro" active={isActive('/pro')} />
        </nav>
    );
}

function NavItem({ href, icon: Icon, label, active }: { href: string; icon: any; label: string; active: boolean }) {
    return (
        <Link href={href} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.25rem',
            textDecoration: 'none',
            color: active ? 'hsl(var(--primary))' : 'hsl(var(--foreground))',
            opacity: active ? 1 : 0.6,
            transition: 'all 0.2s'
        }}>
            <Icon size={24} />
            <span style={{ fontSize: '0.75rem' }}>{label}</span>
        </Link>
    );
}
