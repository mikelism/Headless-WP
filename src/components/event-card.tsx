import Link from "next/link"
import Image from "next/image"
import { CalendarDays, MapPin, ExternalLink } from "lucide-react"
import { formatDate } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface EventCardProps {
  event: {
    title: string
    slug: string
    featuredImage?: {
      sourceUrl: string
      altText: string
    }
    acf: {
      eventDate: string
      location: string
      ticketUrl?: string
      isHighlighted?: boolean
    }
  }
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg ${
        event.acf.isHighlighted ? "ring-2 ring-primary" : ""
      }`}
    >
      {event.acf.isHighlighted && (
        <div className="absolute right-2 top-2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
          Featured
        </div>
      )}

      {event.featuredImage && (
        <div className="aspect-[16/9] overflow-hidden">
          <Image
            src={event.featuredImage.sourceUrl || "/placeholder.svg"}
            alt={event.featuredImage.altText || event.title}
            width={600}
            height={340}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center gap-2 text-primary">
          <CalendarDays className="h-4 w-4" />
          <time className="text-sm font-medium">{formatDate(event.acf.eventDate)}</time>
        </div>

        <h3 className="mt-2 text-xl font-semibold tracking-tight">
          <Link href={`/events/${event.slug}`} className="hover:underline">
            {event.title}
          </Link>
        </h3>

        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{event.acf.location}</span>
        </div>

        {event.acf.ticketUrl && (
          <div className="mt-4">
            <Button asChild className="w-full gap-2">
              <a href={event.acf.ticketUrl} target="_blank" rel="noopener noreferrer">
                Get Tickets
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

