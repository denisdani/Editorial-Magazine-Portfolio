import { FaFacebook, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 py-12">
      <div className="mx-auto flex flex-row justify-between items-center h-full px-6 max-w-360">
        <h1 className="font-display font-bold text-xl uppercase text-gray-400">
          Arch &amp; Design
        </h1>

        <ul className="flex flex-row gap-6 text-gray-500 text-sm font-normal">
          <li className="hover:cursor-pointer hover:text-primary transition-all">
            About
          </li>
          <li className="hover:cursor-pointer hover:text-primary transition-all">
            Contact
          </li>
          <li className="hover:cursor-pointer hover:text-primary transition-all">
            Privacy
          </li>
          <li className="hover:cursor-pointer hover:text-primary transition-all">
            Terms
          </li>
        </ul>

        <div className="flex flex-row items-center gap-5">
          <FaFacebook size={20} className="text-gray-400" />
          <FaInstagram size={20} className="text-gray-400" />
        </div>
      </div>
    </footer>
  )
}
