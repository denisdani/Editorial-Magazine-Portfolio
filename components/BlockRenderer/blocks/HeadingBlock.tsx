"use client"

import { motion } from "motion/react"
import { getFadeUpVariants } from "@/lib/animations"

interface HeadingBlockProps {
  level: number
  id: string
  text: string
}

export default function HeadingBlock({ level, id, text }: HeadingBlockProps) {
  const tagString = `h${level || 2}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  const MotionTag = motion[tagString]

  return (
    <MotionTag
      variants={getFadeUpVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      id={id}
      className="font-display clear-both mb-6 scroll-mt-25 text-3xl font-bold"
    >
      {text}
    </MotionTag>
  )
}
