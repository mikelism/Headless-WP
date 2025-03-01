import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Post {
  id: string
  title: string
  date: string
  slug: string
  excerpt: string
  featuredImage?: {
    sourceUrl: string
    altText: string
  }
}

interface FeaturedPostsProps {
  posts: Post[]
}

export function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <section className="py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Siste Nytt</h2>
        <p className="mt-4 text-lg text-muted-foreground">Oppdateringer og nyheter fra festivalen</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id} className="flex flex-col">
            {post.featuredImage && (
              <div className="aspect-video overflow-hidden">
                <Image
                  src={post.featuredImage.sourceUrl || "/placeholder.svg"}
                  alt={post.featuredImage.altText}
                  width={600}
                  height={340}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            )}
            <CardHeader>
              <CardTitle className="line-clamp-2">
                <Link href={`/blogg/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="line-clamp-3 text-muted-foreground" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            </CardContent>
            <CardFooter className="mt-auto">
              <time dateTime={post.date} className="text-sm text-muted-foreground">
                {formatDate(post.date)}
              </time>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/blogg" className="text-sm font-medium text-primary hover:underline">
          Se alle innlegg →
        </Link>
      </div>
    </section>
  )
}

