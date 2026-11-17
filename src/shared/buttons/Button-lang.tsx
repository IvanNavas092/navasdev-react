import { useTranslation } from 'react-i18next'
import lang from '../../assets/imgs/lang.svg'
import flagSpain from '../../assets/imgs/flags/Spain.png'
import flagUsa from '../../assets/imgs/flags/Usa.png'


export default function ButtonLang() {
    const { i18n } = useTranslation()


    function changeLanguage() {
        const newLang = i18n.language === 'es' ? 'en' : 'es'
        i18n.changeLanguage(newLang)
    }

    function getLang() {
        const lang = i18n.language;
        return lang === 'en'
            ? flagUsa
            : flagSpain;
    }

    return (
        <div className="relative group">
            <button onClick={changeLanguage}
                className="cursor-pointer p-2 rounded-full border  hover:scale-105  border-white/20  text-[var(--font-first-color)] transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center backdrop-blur-lg bg-white/10">
                <img src={lang} alt="download cv" className="w-4.5 h-4.5 md:w-5.5 md:h-5.5" />
            </button>


            <div
                className="absolute right-0 mt-2 border border-[var(--theme-color)/40] rounded-lg bg-gray-800 p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                <img src={getLang()} alt="flag" className=" h-6" />
            </div>
        </div>
    )
}