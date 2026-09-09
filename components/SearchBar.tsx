"use client";

import { useId } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  autoFocus?: boolean;
  size?: "md" | "lg";
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Cari mata kuliah atau CPL...",
  label = "Cari mata kuliah atau CPL",
  autoFocus = false,
  size = "lg",
}: SearchBarProps) {
  const id = useId();

  return (
    <div className="w-full">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div className="relative">
        <span
          className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-muted"
          aria-hidden="true"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </span>
        <input
          id={id}
          type="search"
          inputMode="search"
          value={value}
          autoFocus={autoFocus}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`focus-ring w-full rounded-xl border border-border bg-surface pl-11 pr-4 text-ink placeholder:text-muted ${
            size === "lg" ? "h-14 text-base" : "h-11 text-sm"
          }`}
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label="Hapus pencarian"
            className="focus-ring absolute inset-y-0 right-2 my-auto flex h-8 w-8 items-center justify-center rounded-md text-muted hover:text-ink"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
