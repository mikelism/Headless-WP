"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Search } from "lucide-react"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Headless WP</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/" ? "text-foreground" : "text-muted-foreground",
              )}
            >
              Home
            </Link>
            <Link
              href="/setup-guide"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/setup-guide" ? "text-foreground" : "text-muted-foreground",
              )}
            >
              Setup Guide
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/about" ? "text-foreground" : "text-muted-foreground",
              )}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/contact" ? "text-foreground" : "text-muted-foreground",
              )}
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

