"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { ContentBlock } from "@/interfaces/article"

interface TableOfContentsProps {
  content: ContentBlock[]
}

const computeTableOfContents = (content: ContentBlock[]) => {
  const items: [{ id: string; label: string }] = [
    { id: "intro", label: "Intro" },
  ]

  content.map((block) => {
    if (block.type === "heading" && block.id && block.text) {
      items.push({ id: block.id, label: block.text })
    }
  })

  return items
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("intro")

  const navItems = computeTableOfContents(content)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-20% 0px -70% 0px",
      },
    )

    navItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const activeIndex = navItems.findIndex((item) => item.id === activeId)
  const safeIndex = activeIndex >= 0 ? activeIndex : 0

  return (
    <nav className="mt-2 mr-16 mb-8 border-y border-gray-200 py-8">
      <div className="relative border-l border-gray-200 pl-4">
        <div
          className="bg-primary absolute -left-px w-0.5 transition-transform duration-300 ease-out"
          style={{
            height: "20px",
            transform: `translateY(${safeIndex * 44}px)`,
          }}
        />

        <ul className="space-y-6 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeId === item.id

            return (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  className={cn(
                    "block transition-colors duration-200",
                    isActive
                      ? "text-primary font-bold"
                      : "text-gray-400/80 hover:text-gray-400",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
