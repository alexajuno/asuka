import Link from 'next/link'
import BlogCard from './BlogCard'

export default function Blog() {
  const featuredPosts = [
    {
      id: 1,
      title: "Getting Started with Web Development",
      excerpt: "Learn the basics of web development and start your journey into the world of coding. We'll cover HTML, CSS, and JavaScript fundamentals...",
      date: "2024-03-20"
    },
    {
      id: 2,
      title: "Modern Frontend Development",
      excerpt: "Exploring the latest trends and tools in frontend development. From React and Next.js to Tailwind CSS and TypeScript...",
      date: "2024-03-15"
    },
    {
      id: 3,
      title: "Building with Next.js",
      excerpt: "A comprehensive guide to building applications with Next.js. Learn about server components, routing, and deployment strategies...",
      date: "2024-03-10"
    }
  ]

  return (
    <section id="blog" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            href="/blogs"
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
} 