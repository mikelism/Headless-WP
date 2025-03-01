import { getPosts, getEvents } from "@/lib/wordpress"
import { Hero } from "@/components/hero"
import { FeaturedPosts } from "@/components/featured-posts"
import { UpcomingEvents } from "@/components/upcoming-events"

export default async function Home() {
  const [posts, events] = await Promise.all([getPosts(), getEvents()])

  return (
    <div className="min-h-screen">
      <Hero />
      <main className="container mx-auto px-4 py-12">
        <UpcomingEvents events={events} />
        <FeaturedPosts posts={posts} />
      </main>
    </div>
  )
}

