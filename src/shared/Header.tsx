import { useEffect, useState } from 'react'
import ButtonCv from '../shared/buttons/Button-cv'
import ButtonLang from '../shared/buttons/Button-lang'
import verified from '../assets/imgs/verified.png'
import { useTranslation } from 'react-i18next'
import { useIsMobile } from '../utils/useIsMobile'

export default function Hero() {
    const { t } = useTranslation()
    const isMobile = useIsMobile()

    const [isOpenNow, setIsOpenNow] = useState(false)



    function goToAboutMe() {
    }

    function openMenu() {
        setIsOpenNow(!isOpenNow);
    }

    return (
        <header className="flex items-center justify-between w-full z-10">
            <a className="flex items-center gap-3 ml-3" href="/">
                <div className="group flex items-center gap-3">
                    <span className="text-xl md:text-2xl font-bold text-[var(--font-first-color)] font-mono">Nvs</span>
                    <img src={verified} alt="verified" className="w-6 -ml-1 transition-all duration-200" />
                </div>
            </a>
            {!isMobile ?

                <div>
                    <div className="flex items-center gap-4">
                        <ButtonCv></ButtonCv>
                        <ButtonLang></ButtonLang>
                        <button
                            onClick={goToAboutMe}
                            className="px-4 py-1 md:py-2 border-1 hover:scale-105 border-white/20 text-[var(--font-first-color)] bg-white/10 shadow-lg hover:shadow-2xl hover:text-gray-100 rounded-full backdrop-blur-lg cursor-pointer transition-all duration-300 text-lg md:text-xl font-semibold">
                            {t('contact')}
                        </button>
                    </div>
                </div>
                :
                <div onClick={openMenu}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
                    </svg>
                </div >
            } {isOpenNow &&
                <div
                    className="absolute right-0 top-12 w-48 rounded-xl shadow-lg bg-black/40 border backdrop-blur-sm border-[#828282]/40 flex flex-col gap-2 p-2 transition-all duration-300 z-50">
                    <div className="flex gap-4 p-4 rounded-lg">
                        <ButtonCv></ButtonCv>
                        <ButtonLang></ButtonLang>
                        <a className="p-2  border-1 border-[var(--theme-color)/40] hover:border-[var(--theme-color)] text-gray-400 hover:text-gray-100 rounded-full cursor-pointer transition-all duration-200 text-lg md:text-xl font-semibold"
                            onClick={goToAboutMe}>
                            <svg className="w-4.5 h-4.5 md:w-5 md:h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 9h5m3 0h2M7 12h2m3 0h5M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.616a1 1 0 0 0-.67.257l-2.88 2.592A.5.5 0 0 1 8 18.477V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                            </svg>
                        </a>
                    </div>
                </div >
            }

        </header >
    )
}