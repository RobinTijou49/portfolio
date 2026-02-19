import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    <section className="mt-20">
      <h2 className="text-2xl font-semibold mb-6">Projets</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard 
          title="Calculatrice sécurisée"
          desc="App Node.js avec protection IP"
        />

        <ProjectCard 
          title="Projet WordPress"
          desc="Gestion d'images BLOB"
        />
      </div>
    </section>
  )
}
