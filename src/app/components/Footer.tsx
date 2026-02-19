import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="mt-20 py-8 border-t border-white/20 text-center text-gray-400">
      <p>Contactez-moi :</p>
      <div className="flex justify-center gap-6 mt-2 text-2xl">
        <a href="mailto:tonmail@email.com" target="_blank" rel="noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://github.com/tonprofil" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/tonprofil" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} Robin Tijou</p>
    </footer>
  )
}
