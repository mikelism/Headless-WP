import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getPostBySlug, getPosts } from "@/lib/wordpress"
import { formatDate } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export async function generateStaticParams() {
  try {
    const posts = await getPosts()

    return posts.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error("Error generating static params:", error)
    return []
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  try {
    const post = await getPostBySlug(params.slug)

    if (!post) {
      notFound()
    }

    return (
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="mb-8 inline-flex items-center">
          <Button variant="ghost" className="gap-1">
            <ChevronLeft className="h-4 w-4" />
            Back to all posts
          </Button>
        </Link>

        <article className="mx-auto max-w-3xl">
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{post.title}</h1>
            <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.categories && post.categories.length > 0 && (
                <>
                  <span>•</span>
                  <span>{post.categories.map((cat) => cat.name).join(", ")}</span>
                </>
              )}
            </div>
          </header>

          {post.featuredImage && (
            <div className="mb-8 overflow-hidden rounded-lg">
              <Image
                src={post.featuredImage.sourceUrl || "/placeholder.svg?height=1200&width=800"}
                alt={post.featuredImage.altText || post.title}
                width={1200}
                height={675}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <div
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.tags && post.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag.id}
                  href={`/tags/${tag.slug}`}
                  className="rounded-full bg-muted px-3 py-1 text-sm hover:bg-muted/80"
                >
                  #{tag.name}
                </Link>
              ))}
            </div>
          )}
        </article>
      </div>
    )
  } catch (error) {
    console.error("Error rendering post page:", error)
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <Link href="/" className="mb-8 inline-flex items-center">
          <Button variant="ghost" className="gap-1">
            <ChevronLeft className="h-4 w-4" />
            Back to home
          </Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Error Loading Post</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          There was an error loading this post from WordPress. Please check your configuration.
        </p>
      </div>
    )
  }
}

