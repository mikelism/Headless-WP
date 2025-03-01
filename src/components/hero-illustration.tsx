"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function HeroIllustration() {
  const [activeSquares, setActiveSquares] = useState<number[]>([])

  // Gentle wave effect
  useEffect(() => {
    const interval = setInterval(() => {
      const squares = []
      const wave = Math.floor(Math.random() * 8)
      const isRow = Math.random() > 0.5

      if (isRow) {
        // Gentle row wave
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            setActiveSquares((prev) => [...prev, wave * 8 + i])
            setTimeout(() => {
              setActiveSquares((prev) => prev.filter((square) => square !== wave * 8 + i))
            }, 1500)
          }, i * 150)
        }
      } else {
        // Gentle column wave
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            setActiveSquares((prev) => [...prev, i * 8 + wave])
            setTimeout(() => {
              setActiveSquares((prev) => prev.filter((square) => square !== i * 8 + wave))
            }, 1500)
          }, i * 150)
        }
      }
    }, 5000) // Wave every 5 seconds

    return () => clearInterval(interval)
  }, [])

  // Subtle random highlights
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const randomSquare = Math.floor(Math.random() * 64)
        setActiveSquares((prev) => [...prev, randomSquare])

        setTimeout(() => {
          setActiveSquares((prev) => prev.filter((square) => square !== randomSquare))
        }, 1500)
      }
    }, 800)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-64 w-64">
      {/* Abstract chess board grid */}
      <motion.div
        className="absolute inset-0 grid grid-cols-8 grid-rows-8 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(64)].map((_, i) => (
          <motion.div
            key={i}
            className={`relative border border-white/5 transition-all duration-1000
              ${(Math.floor(i / 8) + (i % 8)) % 2 === 0 ? "bg-purple-500/15" : "bg-pink-500/15"}
            `}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              scale: activeSquares.includes(i) ? 1.03 : 1,
              backgroundColor: activeSquares.includes(i)
                ? Math.random() > 0.5
                  ? "#ec489925"
                  : "#a855f725"
                : undefined,
            }}
            transition={{
              delay: i * 0.03,
              duration: 1,
              ease: "easeInOut",
            }}
          >
            {/* Gentle glow effect for active squares */}
            {activeSquares.includes(i) && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 blur-sm"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Ambient central glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 blur-2xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Abstract knight shape */}
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2"
        animate={{
          opacity: [0.3, 0.4, 0.3],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <path
          d="M19 22H5a2 2 0 0 1-2-2v-2h18v2a2 2 0 0 1-2 2ZM15 5a3 3 0 0 1-6 0V4h6v1Z"
          className="fill-purple-500/30"
        />
        <path
          d="M12 11c-2.761 0-5-2.239-5-5V3c0-.552.448-1 1-1h8c.552 0 1 .448 1 1v3c0 2.761-2.239 5-5 5Z"
          className="fill-pink-500/30"
        />
      </motion.svg>
    </div>
  )
}

