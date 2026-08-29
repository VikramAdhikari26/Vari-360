"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";
import { NammaAI } from "@/components/NammaAI";
import { Sidebar } from "@/components/layout/Sidebar";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAuthRoute = pathname === "/login" || pathname === "/register";

  if (isAuthRoute) {
    return <div className="min-h-screen overflow-x-hidden bg-[#070b12] text-slate-100">{children}</div>;
  }

  return (
    <div className="flex min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.1),_transparent_22%),radial-gradient(circle_at_right_top,_rgba(250,204,21,0.08),_transparent_20%),#070b12]">
      <Sidebar />

      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <Header />
        <main className="min-w-0 flex-1 px-4 pb-20 pt-6 sm:px-6 lg:px-8">{children}</main>
      </div>

      <MobileNav />
      <NammaAI />
    </div>
  );
}
