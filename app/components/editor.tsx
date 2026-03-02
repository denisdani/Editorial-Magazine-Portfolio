export default function Editor() {
  return (
    <div className="flex flex-row items-center gap-3 border-t border-gray-200 py-4">
      <span className="inline-flex aspect-square h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-sm text-white">
        TK
      </span>
      <div>
        <p className="text-sm font-medium">Takeshi Kovacs</p>
        <p className="text-xs text-gray-500">Senior Editor</p>
      </div>
    </div>
  )
}
