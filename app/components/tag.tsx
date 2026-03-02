interface TagProps {
  children: React.ReactNode
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="bg-primary rounded-xs px-3 py-1.5 text-xs font-semibold tracking-wider text-white uppercase">
      {children}
    </span>
  )
}
