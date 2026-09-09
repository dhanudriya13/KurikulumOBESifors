"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import HeaderSearch from "@/components/HeaderSearch";

const navItems = [
  { href: "/courses", label: "Mata Kuliah" },
  { href: "/cpl", label: "CPL" },
  { href: "/curriculum", label: "Kurikulum" },
  { href: "/teknik-penilaian", label: "Teknik Penilaian" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="focus-ring rounded-md text-base font-bold tracking-tight text-ink sm:text-lg"
          onClick={() => setOpen(false)}
        >
          Kurikulum <span className="text-primary">OBE SIFORS</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigasi utama">
          {navItems.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`focus-ring rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-primary"
                    : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <HeaderSearch />
          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md text-ink md:hidden"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-border bg-surface px-4 py-2 md:hidden"
          aria-label="Navigasi seluler"
        >
          {navItems.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`focus-ring block rounded-md px-3 py-2 text-sm font-medium ${
                  active ? "text-primary" : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
