import { Button } from "@/components/ui/button"
import { WordPressSetupGuide } from "@/components/wordpress-setup-guide"
import Link from "next/link"

export default function SetupGuidePage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">WordPress Setup Guide</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Configure your WordPress site to work with this headless frontend
        </p>
      </header>

      <WordPressSetupGuide />

      <div className="mt-8 flex justify-center">
        <Link href="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    </div>
  )
}

