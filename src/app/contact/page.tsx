"use client"
import Navbar from "../components/Navbar"
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-12">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 max-w-xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
        <p className="mb-4">
          Vous pouvez me contacter via le formulaire ci-dessous ou directement via email.
        </p>

        <form 
          action="mailto:tonmail@email.com"
          method="post"
          encType="text/plain"
          className="flex flex-col gap-4"
        >
          <input type="text" name="name" placeholder="Votre nom" required className="p-3 rounded-lg bg-white/10 border border-white/20 text-white" />
          <input type="email" name="email" placeholder="Votre email" required className="p-3 rounded-lg bg-white/10 border border-white/20 text-white" />
          <textarea name="message" placeholder="Votre message" required rows={5} className="p-3 rounded-lg bg-white/10 border border-white/20 text-white"></textarea>
          <button type="submit" className="px-6 py-3 bg-blue-500 rounded-xl font-semibold hover:bg-blue-600 transition">
            Envoyer
          </button>
        </form>
      </motion.div>
    </main>
  )
}
