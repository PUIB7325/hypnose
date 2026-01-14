import { sessions } from "@/data/sessions";
import ImmersivePlayer from "@/components/player/ImmersivePlayer";
import { notFound } from "next/navigation";

// In Next.js 14, params is a Promise or object depending on version/config, 
// strictly typed in generateMetadata but in component it can be { params: { id: string } }
// For safety in 14 App Router:

export default function SessionPage({ params }: { params: { id: string } }) {
    const session = sessions.find(s => s.id === params.id);

    if (!session) {
        notFound();
    }

    return <ImmersivePlayer session={session} />;
}

export function generateStaticParams() {
    return sessions.map((session) => ({
        id: session.id,
    }));
}
