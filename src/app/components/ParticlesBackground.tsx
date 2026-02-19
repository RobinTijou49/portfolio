"use client"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

export default function ParticlesBackground() {
  // On ne fait rien de spécial avec les types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const particlesInit = async (main: any) => {
    try {
      await loadFull(main)
    } catch (e) {
      console.warn("Erreur tsparticles:", e)
    }
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: { value: "#000000" } },
        fpsLimit: 60,
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" }, resize: true },
        },
        particles: {
          color: { value: "#ffffff" },
          links: { enable: true, color: "#ffffff", distance: 150 },
          move: { enable: true, speed: 1 },
          number: { value: 50 },
          opacity: { value: 0.3 },
          size: { value: 2 },
        },
      }}
    />
  )
}
