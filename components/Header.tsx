"use client"

import { useState } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { MdOutlineSearch, MdMenu, MdClose } from "react-icons/md"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { slug: "architecture", label: "Architecture" },
    { slug: "interiors", label: "Interiors" },
    { slug: "landscape", label: "Landscape" },
    { slug: "design", label: "Design" },
    { slug: "culture", label: "Culture" },
  ]

  return (
    <header className="sticky top-0 z-50 h-20 border-b border-stone-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-360 flex-row items-center justify-between px-6">
        <Link href={"/"}>
          <h1 className="font-display z-50 text-2xl font-bold uppercase">
            Arch &amp; Design
          </h1>
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex flex-row gap-8">
            {navLinks.map(({ slug, label }) => (
              <li
                key={slug}
                className="hover:text-primary text-sm font-medium transition-all hover:cursor-pointer"
              >
                {label}
              </li>
            ))}
          </ul>
        </nav>

        <div className="z-50 flex flex-row items-center gap-5">
          <div className="hidden flex-row items-center gap-5 lg:flex">
            <MdOutlineSearch
              size={24}
              className="hidden text-gray-600 sm:block"
            />

            <button className="bg-primary hidden rounded-full px-6 py-2.5 text-sm font-medium text-white sm:block">
              Subscribe
            </button>
          </div>

          <button
            className="p-2 text-stone-900 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <MdClose size={28} aria-label="Close Menu" />
            ) : (
              <MdMenu size={28} aria-label="Open Menu" />
            )}
          </button>
        </div>

        <div
          className={cn(
            "fixed inset-0 top-20 z-50 flex h-screen flex-col items-center justify-center bg-white transition-all duration-300 ease-in-out lg:hidden",
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-5 opacity-0",
          )}
        >
          <ul className="flex flex-col items-center gap-8 text-xl font-medium">
            {navLinks.map(({ slug, label }) => (
              <li
                key={slug}
                onClick={() => setIsOpen(false)}
                className="hover:text-primary transition-all"
              >
                {label}
              </li>
            ))}
          </ul>
          <button className="bg-primary mt-10 rounded-full px-6 py-2.5 font-medium text-white">
            Subscribe
          </button>
        </div>
      </div>
    </header>
  )
}
