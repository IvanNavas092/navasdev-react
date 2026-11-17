
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import type Project from '../../interfaces/Projects';
import IconSkill from '../about/IconSkill';

gsap.registerPlugin(ScrollTrigger);

interface BoxProjectProps {
    project: Project;
}

export default function BoxProject({ project }: BoxProjectProps) {
    const projectBox = useRef<HTMLDivElement>(null);

    const [isOpenOverlay, setIsOpenOverlay] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const { t } = useTranslation();

    // Detectar dispositivo móvil
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 767px)');

        const handleResize = () => {
            setIsMobile(mediaQuery.matches);
        };

        handleResize();

        mediaQuery.addEventListener('change', handleResize);

        return () => {
            mediaQuery.removeEventListener('change', handleResize);
        };
    }, []);

    // Animación GSAP
    useEffect(() => {
        const element = projectBox.current;

        if (!element) return;

        const animation = gsap.fromTo(
            element,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                },
            }
        );

        return () => {
            animation.scrollTrigger?.kill();
            animation.kill();
        };
    }, []);

    // Abrir overlay en móvil
    const toggleOverlay = () => {
        if (isMobile) {
            setIsOpenOverlay(prev => !prev);
        }
    };

    // Clases del overlay
    const overlayClasses = isMobile
        ? isOpenOverlay
            ? 'opacity-100'
            : 'opacity-0'
        : 'opacity-0 group-hover:opacity-100';

    return (
        <div
            ref={projectBox}
            onClick={toggleOverlay}
            className="relative group border z-20 border-[#828282]/40  rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer transform max-w-[900px]"
        >
            {/* Texto inicial en móvil */}
            {!isOpenOverlay && (
                <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden md:hidden">
                    <h1 className="text-sm text-white z-20 font-light">
                        {t('clickMeText')}
                    </h1>

                    <div className="absolute inset-0 bg-black/70"></div>
                </div>
            )}

            {/* Imagen */}
            <div className="relative overflow-hidden z-0">
                <img
                    src={project.image}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain transition-all duration-700 group-hover:scale-110 group-hover:opacity-10"
                />

                {/* Overlay */}
                <div
                    className={`z-30 absolute inset-0  bg-white/10 backdrop-blur-lg transition-all duration-300 flex flex-col justify-center items-center p-4 sm:p-6 lg:p-4 overflow-y-auto ${overlayClasses}`}
                >
                    <div className="w-full max-h-full flex p-4 flex-col items-center space-y-2">

                        {/* Título */}
                        {project.title && (
                            <Link
                                to={`/projects/${project.id}`}
                                className="relative flex items-center gap-2 group/title"
                            >
                                <h3 className="bebas group-hover/title:underline duration-100 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider off-color text-center mb-2 drop-shadow-2xl">
                                    {project.title}
                                </h3>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 mb-3 group-hover/title:text-[var(--font-first-color)]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                    />
                                </svg>
                            </Link>
                        )}

                        {/* Descripción */}
                        {project.description && (
                            <div className="flex-grow w-full max-w-2xl px-2">
                                <p className="text-sm sm:text-base text-[var(--font-first-color)] text-shadow-lg leading-relaxed sm:leading-loose font-light">
                                    {t(project.description)}
                                </p>

                                {project.title === 'TimeCapsule' && (
                                    <span className="text-red-500 text-center">
                                        In process!
                                    </span>
                                )}
                            </div>
                        )}

                        {/* Tecnologías */}
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-2 sm:mt-4 w-full max-w-xs sm:max-w-md">
                            {project.utils?.map((util, index) => (
                                <div key={index}>
                                    <IconSkill util={util} />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
