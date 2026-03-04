import { FaFacebook, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto flex h-full max-w-360 flex-col items-center justify-between gap-6 px-6 lg:flex-row">
        <h1 className="font-display text-xl font-bold text-gray-400 uppercase">
          Arch &amp; Design
        </h1>

        <ul className="flex flex-row gap-6 text-sm font-normal text-gray-500">
          <li className="hover:text-primary transition-all hover:cursor-pointer">
            About
          </li>
          <li className="hover:text-primary transition-all hover:cursor-pointer">
            Contact
          </li>
          <li className="hover:text-primary transition-all hover:cursor-pointer">
            Privacy
          </li>
          <li className="hover:text-primary transition-all hover:cursor-pointer">
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
