"use client";

import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { Session } from "inspector";
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider >
      <ThemeProvider attribute="class"> {children}</ThemeProvider>
    </SessionProvider>
  );
}
