"use client"
import { motion } from "framer-motion"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  desc: string
}

export default function ProjectCard({ title, desc }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl shadow-lg"
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-300 mt-2">{desc}</p>

      <Link href="/projects" className="text-blue-400 mt-4 block">
        Voir le projet →
      </Link>
    </motion.div>
  )
}