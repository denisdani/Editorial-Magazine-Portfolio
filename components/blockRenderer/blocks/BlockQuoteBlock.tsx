"use client"

import { motion } from "motion/react"
import { getFadeUpVariants } from "@/lib/animations"

interface BlockQuoteBlockProps {
  text: string
}

export default function BlockQuoteBlock({ text }: BlockQuoteBlockProps) {
  return (
    <motion.div
      variants={getFadeUpVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="border-primary my-12 border-l-4 py-2 pl-8"
    >
      <blockquote className="font-display text-3xl leading-snug text-gray-400 italic">
        {text}
      </blockquote>
    </motion.div>
  )
}
