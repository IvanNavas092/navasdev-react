
import { useRef } from 'react';

interface NewSectionProps {
    nameSection: string;
    small?: boolean;
}

export default function NewSection({ nameSection, small = false }: NewSectionProps) {
    const lineP = useRef<HTMLDivElement>(null);

    return (
        <div className="flex items-center">
            <h1
                className={`bebas off-color whitespace-nowrap ${
                    small ? 'text-4xl' : 'text-7xl'
                }`}
            >
                {nameSection}
            </h1>

            <div
                ref={lineP}
                className="w-0 h-1 bg-[var(--theme-color)] ml-2 rounded-xs"
            />
        </div>
    );
}
