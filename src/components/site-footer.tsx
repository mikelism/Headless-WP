import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://wordpress.org"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            WordPress
          </a>
          .
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/privacy" className="underline-offset-4 hover:underline">
            Privacy
          </Link>
          <Link href="/terms" className="underline-offset-4 hover:underline">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}

