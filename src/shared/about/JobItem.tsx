import { useTranslation } from "react-i18next";

export default function JobItem({ title, date }: { title: string, date: string }) {
    const { t } = useTranslation();
    return (
        < div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 font-light" >
            <p className="text-sm md:text-base text-[var(--font-first-color)]">{t(title)}</p>
            <hr className="hidden sm:block flex-grow border-t border-[var(--theme-color)] opacity-70" />
            <span className="text-[var(--font-second-color)] text-sm md:text-base">{t(date)}</span>
        </div >)

}