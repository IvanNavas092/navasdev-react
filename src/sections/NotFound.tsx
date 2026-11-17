import { useTranslation } from "react-i18next";

export default function NotFound() {
    const { t } = useTranslation();
    return (
        <>
            {/* Home */}
            < main className="min-h-screen flex flex-col items-center justify-center gap-2 relative z-20" >
               <h1 className="text-3xl md:text-4xl font-bold text-[var(--font-first-color)]">{t("notFound")}</h1>
               <a href="/" className="text-lg text-[var(--font-second-color)] cursor-pointer underline">{t("goBack")}</a>
            </main>
        </>
    )
}