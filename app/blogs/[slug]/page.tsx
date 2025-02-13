import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

// Mock data for a single blog post
const blogPost = {
  title: "Getting Started with Next.js",
  author: "Giao Le",
  date: "2025-02-14",
  content: `
    Next.js is a powerful React framework that makes it easy to build server-side rendered and statically generated web applications. In this post, we'll cover the basics of setting up a Next.js project and explore some of its key features.

    First, let's start by creating a new Next.js project. Open your terminal and run the following command:

    \`\`\`
    pnpm create next-app my-nextjs-blog
    \`\`\`

    This will set up a new Next.js project with all the necessary dependencies and a basic file structure. Once the installation is complete, navigate to your project directory and start the development server:

    \`\`\`
    cd my-nextjs-blog
    pnpm dev
    \`\`\`

    Now you can open your browser and visit http://localhost:3000 to see your Next.js application in action!

    Next.js offers several powerful features out of the box, including:

    1. Automatic code splitting
    2. Server-side rendering
    3. Static site generation
    4. API routes
    5. Built-in CSS support

    In future posts, we'll dive deeper into each of these features and explore how they can help you build fast, scalable, and SEO-friendly web applications.
  `,
  comments: [
    {
      id: 1,
      author: "John Smith",
      content: "Great introduction to Next.js! Looking forward to more in-depth tutorials.",
      date: "2025-02-15"
    },
    {
      id: 2,
      author: "Alice Johnson",
      content: "I've been using Next.js for a while now, and it's truly a game-changer. Thanks for spreading the word!",
      date: "2025-02-16"
    },
  ],
}

export default function BlogPost() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Button asChild variant="outline" className="mb-4">
        <Link href="/blogs">← Back to Blog</Link>
      </Button>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl">{blogPost.title}</CardTitle>
          <CardDescription className="text-lg">
            By {blogPost.author} • Published on {blogPost.date}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose dark:prose-invert max-w-none">
            {blogPost.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-600 dark:text-gray-300">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Comments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {blogPost.comments.map((comment) => (
              <div key={comment.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-lg">{comment.author}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{comment.date}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{comment.content}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
