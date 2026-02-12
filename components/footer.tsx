"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-8">
      <div className="max-w-4xl mx-auto px-6">
        <nav className="flex items-center justify-center space-x-8">
          <Link
            href="/privacy"
            className="text-white/70 text-xs tracking-widest uppercase hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-white/70 text-xs tracking-widest uppercase hover:text-white transition-colors"
          >
            Terms and Conditions
          </Link>
        </nav>
      </div>
    </footer>
  );
}
