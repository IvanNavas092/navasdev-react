import { useEffect, useState } from 'react'
import meImg from '../assets/imgs/me.webp'
import { useTranslation } from 'react-i18next'
const skills = ['Angular', 'TypeScript', 'Microservices']

const pill =
    'flex items-center justify-center rounded-full border-white/20 bg-white/10 shadow-lg backdrop-blur-lg transition-all duration-300 hover:text-gray-100 hover:shadow-2xl'

export default function Hero() {
    const { t } = useTranslation()
    const [now, setNow] = useState(() => new Date())

    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 30_000)
        return () => clearInterval(id)
    }, [])

    const time = new Intl.DateTimeFormat('es-ES', { timeStyle: 'short' }).format(now)

    return (
        <div className="grid min-h-[86svh] md:h-[86vh] grid-cols-1 gap-10 py-4 md:grid-cols-2 md:gap-4">
            {/* izquierda */}
            <div className="flex flex-col gap-8 md:justify-between md:gap-6">
                <div className="flex flex-col gap-4">
                    <h1 className="archivo-black w-min text-white uppercase font-extrabold leading-[0.88] tracking-tighter text-[clamp(2.5rem,13vw,100px)] md:text-[clamp(2.5rem,7vw,100px)]">
                        {t('software-developer')}
                    </h1>

                    <div className="pointer-events-auto flex flex-wrap gap-2 md:gap-4">
                        {skills.map((skill) => (
                            <div
                                key={skill}
                                className={`${pill} px-3 py-1.5 font-bold text-(--font-first-color) md:px-4 md:py-2`}
                            >
                                <span className="rounded-full text-xs font-light uppercase text-gray-300">
                                    {t(skill)}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <img
                    src={meImg}
                    alt="Ivan Navas"
                    className="pointer-events-auto h-56 w-full max-w-[800px] rounded-2xl object-cover sm:h-72 md:h-auto md:max-h-72"
                />

                <span className="text-sm text-(--font-secondary-color)">
                    {t('ubication')} · {time}.
                </span>
            </div>

            {/* derecha: en móvil va primero */}
            <div className="flex flex-col items-start gap-8 text-start max-md:order-first md:items-end md:justify-between md:gap-0 md:text-end">
                <div className={`${pill} pointer-events-auto gap-2 px-3 py-1.5 font-semibold text-(--font-first-color)`}>
                    <span className="text-xs font-light uppercase">{t('working')}</span>
                    <div className="animate-pulse rounded-full bg-red-600 p-1" />
                </div>

                <div className="flex flex-col gap-4 md:gap-6">
                    <div className="flex flex-col gap-2 md:gap-4">
                        <span className="text-xs uppercase text-white md:text-sm">
                            {t('job-profesion')}
                            <br />
                            {t('job-profesion-2')}
                        </span>
                        <span className="text-xs uppercase text-(--font-secondary-color) md:text-sm">
                            {t('experience-years')}

                        </span>
                    </div>

                    <div className="archivo-black text-[clamp(2.5rem,13vw,100px)] font-extrabold uppercase leading-[0.88] tracking-tighter md:text-[clamp(2.5rem,7vw,100px)]">
                        <span>
                            Iván
                            <br />
                            Navas
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}