"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Music2, Disc } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroIllustration } from "@/components/hero-illustration"

const floatingIcons = [
  { icon: Music2, delay: 0, className: "text-purple-500/30" },
  { icon: Disc, delay: 0.4, className: "text-pink-500/30" },
]

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative min-h-[90vh] overflow-hidden">
      {/* Chess grid background */}
      <div className="absolute inset-0 chess-grid opacity-20" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />

      {/* Glowing orbs */}
      <div
        className="absolute left-1/4 top-1/4 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 blur-3xl"
        style={{ animation: "pulse 4s ease-in-out infinite" }}
      />
      <div
        className="absolute right-1/4 bottom-1/4 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-gradient-to-r from-green-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"
        style={{ animation: "pulse 6s ease-in-out infinite" }}
      />

      {/* Floating icons */}
      <div className="absolute inset-0">
        {floatingIcons.map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: 0,
            }}
            animate={{
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
              opacity: 0.8,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              delay: Icon.delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
          >
            <Icon.icon className={`h-8 w-8 ${Icon.className}`} />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="container relative mx-auto flex min-h-[90vh] flex-col items-center justify-center px-4 text-center">
        {/* Abstract chess illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroIllustration />
        </motion.div>

        <motion.h1
          className="mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          FUZZSJAKK
        </motion.h1>

        <motion.p
          className="mb-8 max-w-[600px] text-lg text-pink-100/80 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Where Chess Meets Nightlife
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            asChild
            size="lg"
            className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white transition-all hover:from-purple-700 hover:via-pink-700 hover:to-red-700"
          >
            <Link href="/arrangementer">
              <span className="relative z-10">Upcoming Tournaments</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-pink-500/20 bg-black/20 text-pink-100 backdrop-blur-sm transition-all hover:bg-black/40 hover:text-pink-200"
          >
            <Link href="/om">About Us</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

