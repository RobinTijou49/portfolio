"use client"
import Navbar from "../components/Navbar"
import { motion } from "framer-motion"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-12">
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-24"
      >
        <h1 className="text-3xl font-bold mb-8">Mes Projets</h1>

        <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl mb-6">
          <h2 className="text-xl font-bold">Calculatrice sécurisée</h2>
          <p className="mt-2 text-gray-300">
            Application Node.js avec système de filtrage IP et base PostgreSQL.
          </p>
        </div>

        <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl">
          <h2 className="text-xl font-bold">Projet WordPress</h2>
          <p className="mt-2 text-gray-300">
            Gestion d&apos;images en BLOB avec affichage dynamique.
          </p>
        </div>

      </motion.div>
    </main>
  )
}
