import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Namma Vari 360 Backend",
  description: "Backend API for Namma Vari 360",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
