import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background" />
      <div
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/hero-background.jpg")' }}
      >
        <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Fuzzsjakk Festival
          </h1>
          <p className="mb-8 max-w-[600px] text-lg text-white/90 md:text-xl">
            En unik musikkopplevelse i hjertet av Norge
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="default">
              <Link href="/arrangementer">Se Arrangementer</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20">
              <Link href="/om">Om Festivalen</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

