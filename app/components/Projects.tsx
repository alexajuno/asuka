import Image from "next/image"

const projects = [
  {
    name: "Project 1",
    description: "A brief description of Project 1",
    image: "/placeholder.png",
  },
  {
    name: "Project 2",
    description: "A brief description of Project 2",
    image: "/placeholder.png",
  },
  {
    name: "Project 3",
    description: "A brief description of Project 3",
    image: "/placeholder.png",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.name} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

