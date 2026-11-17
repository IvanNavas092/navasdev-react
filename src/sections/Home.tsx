import AboutMe from "../components/AboutMe"
import Hero from "../components/Hero"
import Projects from "../components/projects"
import Header from "../shared/Header"

export default function Home() {
    return (
        <>
            {/* Home */}
            <Hero />
            <AboutMe />
            <Projects />
        </>
    )
}