import { getEvents } from "@/lib/wordpress"
import { UpcomingEvents } from "@/components/upcoming-events"

export default async function EventsPage() {
  const events = await getEvents()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Arrangementer</h1>
      <UpcomingEvents events={events} />
    </div>
  )
}

