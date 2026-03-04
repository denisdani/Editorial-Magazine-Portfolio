"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { id: "intro", label: "Intro" },
  { id: "materiality", label: "Materiality" },
  { id: "human-element", label: "The Human Element" },
  { id: "legacy", label: "Legacy" },
]

export default function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("intro")

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

    return () => observer.disconnect() // Cleanup vitale in React
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
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "block transition-colors duration-200",
                    isActive
                      ? "text-primary font-bold"
                      : "text-gray-400/80 hover:text-gray-400",
                  )}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
