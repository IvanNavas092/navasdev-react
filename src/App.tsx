import './App.css'
import LiquidEther from './components/out/LiquidEther'
import Hero from './components/Hero'
import Header from './shared/Header'
import AboutMe from './components/about-me/AboutMe'

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* fondo */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={['#94a3b8', '#d5e7ea', '#de926c']}
          mouseForce={20}
          cursorSize={100}
          persistence={0.75}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          intensity={1}
          viscosity={0}
          resolution={0.5}
          clickBurst
          bounceEdges={false}
          intro
          lightMode={false}
        />
      </div>

      {/* contenido */}
      <main className="mx-8 my-4 flex flex-col gap-2 relative z-20">
        <div className="flex flex-col gap-12">
          <Header />
          <Hero />
          <AboutMe />
        </div>
      </main>
    </div>
  )
}

export default App