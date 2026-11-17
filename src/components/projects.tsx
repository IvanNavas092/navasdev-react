import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { projectList } from '../utils/projects';
import BoxProject from '../shared/projects/BoxProject';
import NewSection from '../shared/about/NewSection';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Projects() {
    const projects = projectList;
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add('(prefers-reduced-motion: no-preference)', () => {
                // Título
                gsap.from('[data-title]', {
                    y: 30,
                    autoAlpha: 0,
                    duration: 0.5,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: '[data-title]', start: 'top 99%', once: true },
                });

                // Tarjetas: ScrollTrigger.batch agrupa las que entran a la vez,
                // así en móvil (1 columna) animan una a una y en desktop por filas
                gsap.set('[data-card]', { autoAlpha: 0, y: 40, scale: 0.97 });

                ScrollTrigger.batch('[data-card]', {
                    start: 'top 99%',
                    once: true,
                    onEnter: (batch) =>
                        gsap.to(batch, {
                            autoAlpha: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.5,
                            ease: 'power3.out',
                            stagger: 0.15,
                            overwrite: true,
                        }),
                });
            });

            return () => mm.revert();
        },
        { scope: sectionRef }
    );

    return (
        <section ref={sectionRef}>
            <div data-title>
                <NewSection nameSection="projects" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-2 mt-2">
                {projects.map((p, index) => {
                    const isLastOdd =
                        index === projects.length - 1 &&
                        projects.length % 2 !== 0;

                    return (
                        <div
                            key={p.id ?? index}
                            data-card
                            className={
                                isLastOdd
                                    ? 'md:col-span-2 flex justify-center'
                                    : ''
                            }
                        >
                            <BoxProject project={p} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}