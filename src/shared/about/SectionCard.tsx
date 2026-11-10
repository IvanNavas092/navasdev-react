import { useRef } from "react";

interface CardProps {
    title?: string;
    children: React.ReactNode;
}

export default function SectionCard({ title, children }: CardProps) {
    const card = useRef<HTMLDivElement>(null);
    
    return (
        <div ref={card} className="p-4 border border-white/25 bg-white/10 backdrop-blur-md shadow-xl rounded-2xl">
            <h1 className="bebas text-4xl off-color">{title}</h1>

            {children}
        </div>
    );
}
