"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MembershipSidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/private", label: "Private" },
    { href: "/corporate", label: "Corporate" },
    { href: "/our-corporate-members", label: "Our Corporate Members" },
  ];

  return (
    <aside className="w-48 shrink-0">
      <nav>
        <h2 className="text-[#1a7a7d] text-sm font-heading mb-4">membership</h2>
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-xs tracking-widest uppercase transition-colors",
                    isActive
                      ? "text-gray-900 font-semibold"
                      : "text-gray-500 hover:text-gray-700"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
