interface ShareButtonProps {
  children: React.ReactNode
  href: string
}

export default function ShareButton({ children, href }: ShareButtonProps) {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
      {children}
    </div>
  )
}
