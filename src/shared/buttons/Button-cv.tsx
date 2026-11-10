import cv from '../../assets/imgs/cv.png'

export default function ButtonCv() {
    return (
       <div className="relative group">
            <a href="./files/navas-cv.pdf" download="navas-cv.pdf" target="_blank"
                className="cursor-pointer p-2 rounded-full border  hover:scale-105  border-white/20  text-[var(--font-first-color)] transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center backdrop-blur-lg bg-white/10">
                <img src={cv} alt="download cv" className="w-4.5 h-4.5 md:w-5.5 md:h-5.5"/>
            </a>
        </div>
    )
}