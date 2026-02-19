import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Timeline from "./components/Timeline"
import ParticlesBackground from "./components/ParticlesBackground"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-12 absolute inset-0 -z-10">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <Projects />
      <Timeline />
    </main>
  )
}
