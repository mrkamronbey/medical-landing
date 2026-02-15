"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10 rounded-xl object-cover shadow-md shadow-primary/20"
            />
            <div className="flex flex-col text-left">
              <span className="font-bold text-sm text-foreground leading-tight">
                Dr. Asror To&apos;rayev
              </span>
              <span className="text-[10px] text-muted-foreground font-medium tracking-wider uppercase leading-tight">
                Urolog-Androlog
              </span>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Dr. Asror To&apos;rayev. Barcha
            huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
}
