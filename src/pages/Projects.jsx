import { projects } from '../constants/projects'
import ProjectCard from '../Components/ProjectCard'

export default function Projects() {
  return (
    <section className="py-12 px-4  m-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}