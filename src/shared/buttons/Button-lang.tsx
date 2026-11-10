import { useTranslation } from 'react-i18next'
import lang from '../../assets/imgs/lang.svg'


export default function ButtonLang() {
    const { i18n } = useTranslation()


    function changeLanguage() {
        const newLang = i18n.language === 'es' ? 'en' : 'es'
        i18n.changeLanguage(newLang)
    }

    return (
        <div className="relative group">
            <button onClick={changeLanguage}
                className="cursor-pointer p-2 rounded-full border  hover:scale-105  border-white/20  text-[var(--font-first-color)] transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center backdrop-blur-lg bg-white/10">
                <img src={lang} alt="download cv" className="w-4.5 h-4.5 md:w-5.5 md:h-5.5" />
            </button>
        </div>
    )
}