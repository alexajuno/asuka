import { Button } from "@/components/ui/button"
import Link from "next/link"
import BlogCard from "../components/BlogCard"

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to set up your first project. We'll cover everything from installation to deployment.",
    date: "2025-02-14",
    slug: "getting-started-with-nextjs"
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    excerpt: "Dive deep into Tailwind CSS and learn how to create stunning designs efficiently. From basic utilities to advanced customization.",
    date: "2025-02-10",
    slug: "mastering-tailwind-css"
  },
  {
    id: 3,
    title: "The Power of Server Components",
    excerpt: "Explore the benefits and use cases of React Server Components in Next.js applications. Understanding the future of React.",
    date: "2025-02-05",
    slug: "power-of-server-components"
  }
]

export default function BlogListing() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <Button asChild variant="outline">
          <Link href="/">← Back to Home</Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
