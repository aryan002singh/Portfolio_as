import React from 'react'
import { ExternalLink, Github, Code, Smartphone, Globe } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Spotify Clone',
      description: 'A front-end Spotify clone built using HTML and CSS, replicating the user interface and layout of the popular music streaming service.',
      image: 'https://images.unsplash.com/photo-1532354058425-ba7ccc7e4a24?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image for music/UI
      techStack: ['HTML', 'CSS'],
      githubUrl: 'https://github.com/aryan002singh/Spotify-Clone', // Updated URL
      icon: Code,
      category: 'Web Design'
    },
    {
      id: 2,
      title: 'Web Game',
      description: 'A simple web-based game developed using HTML, CSS, and JavaScript, showcasing interactive elements and basic game logic.',
      image: 'https://images.unsplash.com/photo-1634660476928-63015cdbc6d1?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image for a game
      techStack: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/aryan002singh/Game1', // Updated URL
      icon: Code,
      category: 'Game Development'
    },
    {
      id: 3,
      title: 'Simon Says Game',
      description: 'A classic Simon Says memory game implemented purely with JavaScript, featuring interactive buttons, sound effects, and score tracking.',
      image: 'https://images.unsplash.com/photo-1546443046-ed1ce6ffd1ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image for a memory game
      techStack: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/aryan002singh/Simon_says_game', // Updated URL
      icon: Code,
      category: 'Game Development'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-100"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-royal-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                    <project.icon size={20} className="text-royal-blue-600" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-royal-blue-600 bg-royal-blue-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-royal-blue-600 transition-colors duration-200 text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {/* Live Demo link removed */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/aryan002singh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-royal-blue-600 hover:bg-royal-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Github size={20} />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects