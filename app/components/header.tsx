import { MdOutlineSearch } from "react-icons/md"

export default function Header() {
  return (
    <header className="h-20 sticky top-0 bg-white/90 z-50 border-b border-stone-200">
      <div className="mx-auto flex flex-row justify-between items-center h-full px-6 max-w-360">
        <h1 className="font-display font-bold text-2xl uppercase">
          Arch &amp; Design
        </h1>

        <ul className="flex flex-row gap-4 lg:gap-8">
          <li className="hover:cursor-pointer hover:text-primary transition-all text-sm font-medium">
            Architecture
          </li>
          <li className="hover:cursor-pointer hover:text-primary transition-all text-sm font-medium">
            Interiors
          </li>
          <li className="hover:cursor-pointer hover:text-primary transition-all text-sm font-medium">
            Landscape
          </li>
          <li className="hover:cursor-pointer hover:text-primary transition-all text-sm font-medium">
            Design
          </li>
          <li className="hover:cursor-pointer hover:text-primary transition-all text-sm font-medium">
            Culture
          </li>
        </ul>

        <div className="flex flex-row items-center gap-5">
          <MdOutlineSearch size={24} className="text-gray-600" />
          <button className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium">
            Subscribe
          </button>
        </div>
      </div>
    </header>
  )
}
