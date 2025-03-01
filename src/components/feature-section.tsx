import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function FeatureSection() {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12">
          {/* Main feature */}
          <div className="relative overflow-hidden rounded-lg border border-purple-500/10 bg-black/40 p-2">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 blur-3xl" />
            <div className="relative grid gap-8 p-6 lg:grid-cols-2 lg:p-8">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Chess Meets Nightlife</h2>
                <p className="max-w-[600px] text-zinc-200/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience chess like never before. Our tournaments combine competitive play with a vibrant nightclub
                  atmosphere, creating an entirely new way to enjoy the game.
                </p>
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/havet_during-tournament_compressed.jpg-oP7OWflJjWSCnDE8oA7UA0TAU5gS3j.jpeg"
                  alt="Chess tournament in a nightclub setting"
                  width={800}
                  height={450}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Sub features */}
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="overflow-hidden border-purple-500/10 bg-black/40">
              <CardContent className="p-0">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fuzzsjakk_98-PUVNwWXtvt3qKlmZsUUdZaJ23Wfpwj.jpeg"
                    alt="Players engaged in chess matches"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="mb-2 text-2xl font-bold">Community First</h3>
                    <p className="text-zinc-200/80">
                      Join a diverse community of players who share your passion for chess and good times.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-purple-500/10 bg-black/40">
              <CardContent className="p-0">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sjakkplante-ZTQER4pyXC3umeI6VywLjmVeDrVV7D.jpeg"
                    alt="Artistic chess piece with ambient lighting"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="mb-2 text-2xl font-bold">Unique Atmosphere</h3>
                    <p className="text-zinc-200/80">
                      Experience the perfect blend of competitive chess and stylish venue aesthetics.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

