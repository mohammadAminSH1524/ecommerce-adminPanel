import Link from "next/link";
import ThemeButton from "./ThemeButton";

export default function Header() {
  return (
    <header className='py-6'>
    <nav className='container flex items-center justify-between'>
      <ul className='flex gap-6'>
        <li>
          <Link href='/'>Home</Link>
        </li>
      </ul>

      <ThemeButton />
    </nav>
  </header>
  )
}