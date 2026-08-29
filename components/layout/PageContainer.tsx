"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageContainerProps {
  title: string;
  description: string;
  children: ReactNode;
  action?: ReactNode;
}

export function PageContainer({ title, description, children, action }: PageContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="space-y-6"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-cyan-300/80">
            Namma Vari 360
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">{title}</h1>
        </div>
        {action}
      </div>
      <p className="max-w-3xl text-sm text-slate-300/80">{description}</p>
      {children}
    </motion.div>
  );
}
