"use client"
import { motion } from "framer-motion"

const experiences = [
  { year: "2023-2024", role: "Développeur Full Stack", company: "SI2", desc: "Création d'applications web et gestion d'infrastructures IT" },
  { year: "2022-2023", role: "Stage Node.js / React", company: "Startup XYZ", desc: "Développement de fonctionnalités front-end et back-end" },
]

export default function Timeline() {
  return (
    <section className="mt-20">
      <h2 className="text-2xl font-semibold mb-6">Expériences</h2>

      <div className="relative border-l-2 border-white/20 pl-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-gray-400">{exp.year}</span>
            <h3 className="text-xl font-bold">{exp.role} - {exp.company}</h3>
            <p className="text-gray-300 mt-1">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
