import { cn } from "@/lib/utils"

interface AuthorProps {
  name: string
  role: string
  white?: boolean
}

export default function Author({ name, role, white }: AuthorProps) {
  return (
    <div className="flex flex-row items-center gap-3 py-4">
      <span className="inline-flex aspect-square h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-sm text-white">
        TK
      </span>
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className={cn("text-xs", white ? "text-white/60" : "text-gray-500")}>
          {role}
        </p>
      </div>
    </div>
  )
}
