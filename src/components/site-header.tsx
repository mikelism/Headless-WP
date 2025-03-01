"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Tournaments", href: "/arrangementer" },
  { name: "Blog", href: "/blogg" },
  { name: "About", href: "/om" },
  { name: "Shop", href: "/butikk" },
  { name: "FAQ", href: "/faq" },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-500/10 bg-background/80 backdrop-blur-xl">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2 lg:flex-1">
          <Link href="/" className="relative h-8 w-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fuzzsjakk-logo-esZTbMUbQSrBiDqFNXcoEHNetLJjXD.png"
              alt="Fuzzsjakk Logo"
              fill
              className="object-contain"
            />
          </Link>
          <Link
            href="/"
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-xl font-bold text-transparent"
          >
            Fuzzsjakk
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-pink-100"
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
                "text-sm font-medium transition-colors hover:text-pink-100",
                pathname === item.href ? "text-pink-100" : "text-pink-100/60",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
          <Button
            asChild
            className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white transition-all hover:from-purple-700 hover:via-pink-700 hover:to-red-700"
          >
            <Link href="/butikk">
              Join Tournament
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
            </Link>
          </Button>
        </div>
      </nav>
      <div className={cn("fixed inset-0 z-50 bg-background lg:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-purple-500/10">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-xl font-bold text-transparent"
            >
              Fuzzsjakk
            </Link>
            <Button
              variant="ghost"
              className="-m-2.5 rounded-md p-2.5 text-pink-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-purple-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-purple-500/10",
                      pathname === item.href ? "text-pink-100" : "text-pink-100/60",
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
                  className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white transition-all hover:from-purple-700 hover:via-pink-700 hover:to-red-700"
                >
                  <Link href="/butikk">Join Tournament</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

