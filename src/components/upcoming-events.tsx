import Link from "next/link"
import { CalendarDays, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// This is temporary sample data - we'll replace it with real data from WordPress
const events = [
  {
    id: 1,
    title: "Fuzzsjakk Festival 2024",
    date: "2024-07-15",
    location: "Oslo, Norge",
    description: "Årets største musikkfestival med artister fra hele verden.",
  },
  {
    id: 2,
    title: "Pre-Festival Workshop",
    date: "2024-07-14",
    location: "Oslo, Norge",
    description: "Lær fra profesjonelle musikere før festivalen starter.",
  },
  {
    id: 3,
    title: "Etterslep: Fuzzsjakk Reunion",
    date: "2024-07-16",
    location: "Oslo, Norge",
    description: "En spesiell samling for festivaldeltakere og artister.",
  },
]

export function UpcomingEvents() {
  return (
    <section className="py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Kommende Arrangementer</h2>
        <p className="mt-4 text-lg text-muted-foreground">Ikke gå glipp av årets beste musikkopplevelser</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle className="line-clamp-2">{event.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="h-4 w-4" />
                  <time dateTime={event.date}>
                    {new Date(event.date).toLocaleDateString("no-NO", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              </div>
              <p className="line-clamp-2 text-sm text-muted-foreground">{event.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/arrangementer/${event.id}`}>Les Mer</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/arrangementer">Se Alle Arrangementer</Link>
        </Button>
      </div>
    </section>
  )
}

