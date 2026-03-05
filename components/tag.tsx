import { cn } from "@/lib/utils"

interface TagProps {
  children: React.ReactNode
  variant: "primary" | "transparent" | "solid"
}

export default function Tag({ children, variant }: TagProps) {
  return (
    <span
      className={cn(
        "relative rounded-xs px-3 py-1.5 text-xs font-semibold tracking-wider uppercase",
        variant === "primary" && "bg-primary text-white",
        variant === "transparent" && "top-4 left-4 bg-white/90",
        variant === "solid" &&
          "border border-gray-400 bg-white font-bold text-gray-500",
      )}
    >
      {children}
    </span>
  )
}
