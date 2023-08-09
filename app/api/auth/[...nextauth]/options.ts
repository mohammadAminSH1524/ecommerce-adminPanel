import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

import GoogleProvider from "next-auth/providers/google";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID as string,
    //   clientSecret: process.env.GOOGLE_SECRET as string,
    // }),
  ],
  adapter: MongoDBAdapter(clientPromise),
};

// the dave example

// export const options: NextAuthOptions = {
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID as string,
//       clientSecret: process.env.GITHUB_SECRET as string,
//     }),
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         username: {
//           label: "Username:",
//           type: "text",
//           placeholder: "amin",
//         },
//         password: {
//           label: "Password:",
//           type: "password",
//           placeholder: "harrywill",
//         },
//       },
//       async authorize(credentials) {
//         // This is where you need to retrieve user data
//         // to verify with credentials
//         // Docs: https://next-auth.js.org/configuration/providers/credentials
//         const user = { id: "24", name: "amin", password: "harrywill" };

//         if (
//           credentials?.username === user.name &&
//           credentials?.password === user.password
//         ) {
//           return user;
//         } else {
//           return null;
//         }
//       },
//     }),
//   ],
// };
