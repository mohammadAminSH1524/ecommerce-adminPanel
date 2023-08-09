"use client";
import { signIn } from "next-auth/react";
import { BsGithub } from "react-icons/bs";


export default function GithubSigninBtn() {
  return (
    <div
      className="flex items-center gap-1 justify-center text-2xl px-6 py-1.5 rounded-lg
      bg-primaryText text-white"
    >
      
        <BsGithub />
      
      <button
        type="button"
        className="rounded-lg p-2 bg-primaryText text-white "
        onClick={() => signIn("github")}
      >
        login with github
      </button>
    </div>
  );
}
