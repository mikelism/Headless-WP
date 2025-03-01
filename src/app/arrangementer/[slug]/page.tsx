import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { CalendarDays, ChevronLeft, MapPin, Ticket } from "lucide-react"
import { getEventBySlug, getEvents } from "@/lib/wordpress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export async function generateStaticParams() {
  const events = await getEvents()

  return events.map((event) => ({
    slug: event.slug,
  }))
}

export default async function EventPage({ params }: { params: { slug: string } }) {
  const event = await getEventBySlug(params.slug)

  if (!event) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/arrangementer" className="mb-8 inline-flex items-center">
        <Button variant="ghost" className="gap-1">
          <ChevronLeft className="h-4 w-4" />
          Tilbake til arrangementer
        </Button>
      </Link>

      <article className="mx-auto max-w-3xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{event.title}</h1>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-muted-foreground" />
              <time dateTime={event.date} className="text-muted-foreground">
                {event.date}
              </time>
            </div>

            {event.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">{event.location}</span>
              </div>
            )}

            {event.isFeatured && <Badge variant="secondary">Fremhevet</Badge>}
          </div>
        </header>

        {event.featuredImage && (
          <div className="mb-8 overflow-hidden rounded-lg">
            <Image
              src={event.featuredImage.sourceUrl || "/placeholder.svg"}
              alt={event.featuredImage.altText || event.title}
              width={1200}
              height={675}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div
          className="prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: event.content }}
        />

        {event.ticketUrl && (
          <div className="mt-8 text-center">
            <Button asChild size="lg" className="gap-2">
              <a href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
                <Ticket className="h-5 w-5" />
                Kjøp Billetter
              </a>
            </Button>
          </div>
        )}
      </article>
    </div>
  )
}

