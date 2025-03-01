"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Music2, Disc, Mic2, Speaker, Radio } from "lucide-react"
import { Button } from "@/components/ui/button"

const floatingIcons = [
  { icon: Music2, delay: 0 },
  { icon: Disc, delay: 0.2 },
  { icon: Mic2, delay: 0.4 },
  { icon: Speaker, delay: 0.6 },
  { icon: Radio, delay: 0.8 },
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
    <div className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10 opacity-50"
        style={{
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite",
        }}
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
              opacity: 0.3,
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
            <Icon.icon className="h-8 w-8 text-white/20" />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="container relative mx-auto flex min-h-[90vh] flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="mb-6 bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          FUZZSJAKK FESTIVAL
        </motion.h1>

        <motion.p
          className="mb-8 max-w-[600px] text-lg text-white/90 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          En unik musikkopplevelse i hjertet av Norge
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
            className="bg-gradient-to-r from-pink-500 to-violet-600 text-white transition-all hover:from-pink-600 hover:to-violet-700"
          >
            <Link href="/arrangementer">Se Arrangementer</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/20 bg-white/5 text-white backdrop-blur-sm transition-all hover:bg-white/10"
          >
            <Link href="/om">Om Festivalen</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

