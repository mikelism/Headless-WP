import { getPosts } from "@/lib/wordpress"
import { Hero } from "@/components/hero"
import { FeaturedPosts } from "@/components/featured-posts"
import { UpcomingEvents } from "@/components/upcoming-events"

export default async function Home() {
  const posts = await getPosts()

  return (
    <div className="min-h-screen">
      <Hero />
      <main className="container mx-auto px-4 py-12">
        <FeaturedPosts posts={posts} />
        <UpcomingEvents />
      </main>
    </div>
  )
}

