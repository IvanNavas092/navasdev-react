
import { useMemo } from 'react';
import { getProjectById } from '../utils/projectUtils';
import type Project from '../interfaces/Projects';
import { HoverLetters } from '../shared/projectDetail/HoverLetters';
import IconSkill from '../shared/about/IconSkill';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const ProjectDetail = () => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();


    const project: Project = useMemo(
        () => {
            if (id) {
                return getProjectById(id);
            } else {
                throw new Error('Project ID is required');
            }
        }, [id]

    );

    if (!project) return null;

    return (
        <div className="space-y-4">
            {/* CABECERA DEL PROYECTO */}
            <div className="relative flex flex-col justify-center h-screen w-full">
                <div className="flex items-center justify-between">

                    {/* button previous project */}
                    <a
                        href={project.previousProjectId ? `/projects/${project.previousProjectId}` : "#"}
                        className="shrink-0 text-black p-4 rounded-full backdrop-blur-lg bg-white/10 border border-gray-500 transition-colors"
                    >
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7" />
                        </svg>

                    </a>

                    {/* name */}
                    <div className="flex flex-col items-center px-4">
                        <HoverLetters
                            text={project.title}
                            isSubTitle={true}
                        />

                        <a
                            className="text-blue-500 font-light text-lg hover:underline text-center uppercase"
                            href={project.href}
                        >
                            {t('enter-web')}
                        </a>
                    </div>

                    {/* button next project */}
                    <a
                        href={project.nextProjectId ? `/projects/${project.nextProjectId}` : "#"}
                        className="shrink-0 text-black p-4 rounded-full backdrop-blur-lg bg-white/10 border border-gray-500 transition-colors"
                    >
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                        </svg>

                    </a>
                </div>
            </div>

            {/* SECCIONES DEL PROYECTO */}
            {project.sections?.map((section, index) => (

                <section
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >

                    {/* TEXTO */}
                    <div
                        className={`space-y-6 ${section.imagen.posicion === 'izq'
                            ? 'md:order-2'
                            : 'md:order-1'
                            }`}
                    >

                        <h2 className="text-4xl font-bold text-white">
                            {t(section.titulo)}
                        </h2>

                        <p className="off-color text-lg leading-relaxed whitespace-pre-line">
                            {t(section.descripcion)}
                        </p>

                        {/* TECNOLOGÍAS */}
                        <div className="flex flex-row gap-2">
                            {section.utils?.map((util, index) => (
                                <IconSkill
                                    key={index}
                                    util={util}
                                />
                            ))}
                        </div>

                        {/* DIFICULTAD */}
                        <div className="flex items-center gap-1">

                            <span className="text-sm font-semibold uppercase tracking-wider text-gray-400 mr-2">
                                {t('difficulty')}:
                            </span>

                            {[1, 2, 3, 4, 5].map((i) => (
                                <svg
                                    key={i}
                                    className={`w-6 h-6 fill-current ${i <= Number(section.dificultad)
                                        ? 'text-[#DE926C]'
                                        : 'text-gray-300'
                                        }`}
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                </svg>
                            ))}

                        </div>

                        {/* SEGUNDA IMAGEN */}
                        {section.secondImagen && (
                            <img
                                src={section.secondImagen.url}
                                alt={section.secondImagen.alt}
                                className="relative rounded-lg shadow-xl w-full object-cover"
                            />
                        )}

                    </div>

                    {/* IMAGEN PRINCIPAL */}
                    <div
                        className={`relative group transition-all duration-500 ease-in-out ${section.imagen.posicion === 'izq'
                            ? 'md:order-1'
                            : 'md:order-2'
                            }`}
                    >

                        <div
                            className={`absolute -inset-1 bg-${section.colorBase}-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000`}
                        />

                        {!section.imagen.isVideo ? (

                            <img
                                src={section.imagen.url}
                                alt={section.imagen.alt}
                                className="relative rounded-lg shadow-xl w-full object-cover"
                            />

                        ) : (

                            <video
                                src={section.imagen.url}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="relative rounded-lg shadow-xl w-full object-cover"
                            />

                        )}

                    </div>

                </section>

            ))}

        </div>
    );
};
