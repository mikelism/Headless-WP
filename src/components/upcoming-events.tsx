import Link from "next/link"
import Image from "next/image"
import { CalendarDays, MapPin, Ticket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Event {
  id: string
  title: string
  slug: string
  excerpt: string
  featuredImage?: {
    sourceUrl: string
    altText: string
  }
  events: {
    dato: string
    lokasjon: string
    lenkeTilBillett?: string
    fremhevet: boolean
  }
}

interface UpcomingEventsProps {
  events?: Event[]
}

export function UpcomingEvents({ events = [] }: UpcomingEventsProps) {
  return (
    <section className="py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Kommende Arrangementer</h2>
        <p className="mt-4 text-lg text-muted-foreground">Ikke gå glipp av årets beste musikkopplevelser</p>
      </div>

      {events.length === 0 ? (
        <div className="text-center text-muted-foreground">Ingen kommende arrangementer for øyeblikket.</div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card key={event.id} className="flex flex-col">
              {event.featuredImage && (
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={event.featuredImage.sourceUrl || "/placeholder.svg"}
                    alt={event.featuredImage.altText || event.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {event.events.fremhevet && (
                    <Badge className="absolute right-2 top-2" variant="secondary">
                      Fremhevet
                    </Badge>
                  )}
                </div>
              )}
              <CardHeader>
                <CardTitle className="line-clamp-2">
                  <Link href={`/arrangementer/${event.slug}`} className="hover:underline">
                    {event.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    <time dateTime={event.events.dato}>{event.events.dato}</time>
                  </div>
                  {event.events.lokasjon && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.events.lokasjon}</span>
                    </div>
                  )}
                </div>
                <div
                  className="line-clamp-2 text-sm text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: event.excerpt }}
                />
              </CardContent>
              <CardFooter className="mt-auto">
                {event.events.lenkeTilBillett ? (
                  <Button asChild className="w-full gap-2">
                    <a href={event.events.lenkeTilBillett} target="_blank" rel="noopener noreferrer">
                      <Ticket className="h-4 w-4" />
                      Kjøp Billetter
                    </a>
                  </Button>
                ) : (
                  <Button asChild className="w-full">
                    <Link href={`/arrangementer/${event.slug}`}>Les Mer</Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/arrangementer">Se Alle Arrangementer</Link>
        </Button>
      </div>
    </section>
  )
}

