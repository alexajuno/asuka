import Header from "./components/Header"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Blog from "./components/Blog"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Blog />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

