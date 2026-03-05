import { cn } from "@/lib/utils"

interface TagProps {
  children: React.ReactNode
  primary?: boolean
  transparent?: boolean
  solid?: boolean
}

export default function Tag({
  children,
  primary,
  transparent,
  solid,
}: TagProps) {
  return (
    <span
      className={cn(
        "relative rounded-xs px-3 py-1.5 text-xs font-semibold tracking-wider uppercase",
        primary && "bg-primary text-white",
        transparent && "top-4 left-4 bg-white/90",
        solid && "border border-gray-400 bg-white font-bold text-gray-500",
      )}
    >
      {children}
    </span>
  )
}
