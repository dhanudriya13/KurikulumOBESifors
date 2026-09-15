"use client";

import { useState, type ReactNode } from "react";
import type { TeknikPenilaian } from "@/lib/teknik-penilaian";

function Section({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-muted">
        {label}
      </p>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

function ChipList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-ink"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function Prose({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm leading-relaxed text-justify text-pretty text-ink">
      {children}
    </p>
  );
}

export default function TeknikPenilaianCard({
  item,
}: {
  item: TeknikPenilaian;
}) {
  const [open, setOpen] = useState(false);

  return (
    <article className="flex h-full flex-col rounded-card border border-border bg-surface p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
          {item.id}
        </span>
        <h2 className="text-lg font-semibold leading-snug text-ink">
          {item.name}
        </h2>
      </div>

      {!open ? (
        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-justify text-pretty text-ink">
          {item.definisi}
        </p>
      ) : (
        <div className="animate-fade-in mt-4 space-y-4">
          <Section label="Definisi">
            <Prose>{item.definisi}</Prose>
          </Section>

          <Section label="Fokus Penilaian">
            <Prose>{item.fokusPenilaian}</Prose>
          </Section>

          <Section label="Capaian yang Sesuai">
            <ChipList items={item.capaian} />
          </Section>

          <Section label="Bentuk Kegiatan">
            <ChipList items={item.bentukKegiatan} />
          </Section>

          <Section label="Instrumen">
            <ChipList items={item.instrumen} />
          </Section>

          <Section label="Ciri Pembeda">
            <Prose>{item.ciriPembeda}</Prose>
          </Section>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="focus-ring mt-4 inline-flex items-center gap-1.5 self-start rounded-md text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
      >
        {open ? "Tutup" : "Baca Selengkapnya"}
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
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </article>
  );
}
