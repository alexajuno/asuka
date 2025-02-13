import { Code, PenTool, Server } from "lucide-react"

const skills = [
  { name: "Frontend Development", icon: PenTool, description: "Creating responsive and interactive user interfaces" },
  { name: "Backend Development", icon: Server, description: "Building robust and scalable server-side applications" },
  { name: "Full Stack Development", icon: Code, description: "Bridging frontend and backend for complete solutions" },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center"
            >
              <skill.icon className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-center text-gray-600 dark:text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

