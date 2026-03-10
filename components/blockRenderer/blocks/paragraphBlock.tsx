"use client"

import { motion } from "motion/react"
import { getFadeUpVariants } from "@/lib/animations"

interface ParagraphBlockProps {
  dropCap?: boolean
  text: string
}

export default function ParagraphBlock({ dropCap, text }: ParagraphBlockProps) {
  return (
    <motion.p
      variants={getFadeUpVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      id={dropCap ? "intro" : undefined}
      className={
        dropCap
          ? "drop-cap font-display mb-10 scroll-mt-25 text-2xl leading-relaxed font-medium"
          : "mb-6 text-lg leading-relaxed"
      }
    >
      {text}
    </motion.p>
  )
}
