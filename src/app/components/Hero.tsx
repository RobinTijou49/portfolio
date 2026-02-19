"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10 mt-24">

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Image
          src="/photo.jpg"
          alt="photo"
          width={200}
          height={200}
          className="rounded-full border-4 border-white/20 shadow-xl"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="text-4xl font-bold">Robin Tijou</h1>
        <p className="text-xl text-gray-300">Développeur Full Stack</p>
        <p className="mt-4 max-w-xl">
          Je développe des applications web modernes avec une approche orientée performance et sécurité.
        </p>
        <a 
            href="/cv.pdf" 
            download="Robin_Tijou_CV.pdf"
            className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition"
            >
            Télécharger mon CV
        </a>

      </motion.div>

    </section>
  )
}
