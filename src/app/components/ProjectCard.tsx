"use client"
import { motion } from "framer-motion"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  desc: string
  link?: string
}

export default function ProjectCard({ title, desc, link }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl shadow-lg transition-transform duration-300"
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-300 mt-2">{desc}</p>
      {link && (
        <Link href={link} className="text-blue-400 mt-4 block hover:underline">
          Voir le projet →
        </Link>
      )}
    </motion.div>
  )
}
