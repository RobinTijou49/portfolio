"use client"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-lg bg-white/10 border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <h1 className="font-bold">Robin</h1>
        <div className="flex gap-6">
          <Link href="/">Accueil</Link>
          <Link href="/projects">Projets</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </motion.nav>
  )
}
