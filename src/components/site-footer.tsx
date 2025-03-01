import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

const navigation = {
  main: [
    { name: "Om", href: "/om" },
    { name: "Blogg", href: "/blogg" },
    { name: "Arrangementer", href: "/arrangementer" },
    { name: "FAQ", href: "/faq" },
    { name: "Kontakt", href: "/kontakt" },
    { name: "Personvern", href: "/personvern" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
  ],
}

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex-1">
            <Link href="/" className="text-xl font-bold">
              Fuzzsjakk
            </Link>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">En unik musikkopplevelse i hjertet av Norge</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            {navigation.main.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm text-muted-foreground hover:text-primary">
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex gap-4">
            {navigation.social.map((item) => {
              const Icon = item.icon
              return (
                <a key={item.name} href={item.href} className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">{item.name}</span>
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>
        <div className="mt-8 border-t border-muted pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Fuzzsjakk Festival. Alle rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  )
}

