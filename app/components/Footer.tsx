import { Icon } from '@iconify/react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 Asuka. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/alexajuno" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-indigo-400 transition duration-300"
            >
              <Icon icon="mdi:github" width="24" height="24" />
            </a>
            <a 
              href="https://www.linkedin.com/in/giao-le-02606b323/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-indigo-400 transition duration-300"
            >
              <Icon icon="mdi:linkedin" width="24" height="24" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

