import { MdOutlineSearch } from "react-icons/md"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-20 border-b border-stone-200 bg-white/90">
      <div className="mx-auto flex h-full max-w-360 flex-row items-center justify-between px-6">
        <h1 className="font-display text-2xl font-bold uppercase">
          Arch &amp; Design
        </h1>

        <ul className="flex flex-row gap-4 lg:gap-8">
          <li className="hover:text-primary text-sm font-medium transition-all hover:cursor-pointer">
            Architecture
          </li>
          <li className="hover:text-primary text-sm font-medium transition-all hover:cursor-pointer">
            Interiors
          </li>
          <li className="hover:text-primary text-sm font-medium transition-all hover:cursor-pointer">
            Landscape
          </li>
          <li className="hover:text-primary text-sm font-medium transition-all hover:cursor-pointer">
            Design
          </li>
          <li className="hover:text-primary text-sm font-medium transition-all hover:cursor-pointer">
            Culture
          </li>
        </ul>

        <div className="flex flex-row items-center gap-5">
          <MdOutlineSearch size={24} className="text-gray-600" />
          <button className="bg-primary rounded-full px-6 py-2.5 text-sm font-medium text-white">
            Subscribe
          </button>
        </div>
      </div>
    </header>
  )
}
