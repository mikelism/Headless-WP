import { getEvents } from "@/lib/wordpress"
import { EventCard } from "@/components/event-card"

export default async function EventsPage() {
  const events = await getEvents()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Upcoming Events</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}

