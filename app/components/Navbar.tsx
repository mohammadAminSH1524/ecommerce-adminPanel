
import Link from "next/link";
import ThemeButton from "./ThemeButton";
import GithubSigninBtn from "./GithubSigninBtn";

export default async function Navbar() {
  return (
    <nav className="bg-blue-800 p-4">
      <ul className="flex justify-evenly text-2xl font-bold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/api/auth/signin">Sign In</Link>
        </li>
        <li>
          <Link href="/api/auth/signout">Sign Out</Link>
        </li>
        <GithubSigninBtn />
        <li>
          <ThemeButton />
        </li>
      </ul>
    </nav>
  );
}
