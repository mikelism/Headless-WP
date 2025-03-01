"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Hjem", href: "/" },
  { name: "Arrangementer", href: "/arrangementer" },
  { name: "Blogg", href: "/blogg" },
  { name: "Om", href: "/om" },
  { name: "Butikk", href: "/butikk" },
  { name: "FAQ", href: "/faq" },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 bg-clip-text text-xl font-bold text-transparent"
          >
            Fuzzsjakk
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                pathname === item.href ? "text-white" : "text-white/60",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
          <Button
            asChild
            className="bg-gradient-to-r from-pink-500 to-violet-600 text-white transition-all hover:from-pink-600 hover:to-violet-700"
          >
            <Link href="/butikk">Kjøp Billetter</Link>
          </Button>
        </div>
      </nav>
      <div className={cn("fixed inset-0 z-50 bg-background lg:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 bg-clip-text text-xl font-bold text-transparent"
            >
              Fuzzsjakk
            </Link>
            <Button
              variant="ghost"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-accent",
                      pathname === item.href ? "text-white" : "text-white/60",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-pink-500 to-violet-600 text-white transition-all hover:from-pink-600 hover:to-violet-700"
                >
                  <Link href="/butikk">Kjøp Billetter</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

