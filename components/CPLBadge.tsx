import Link from "next/link";

export default function CPLBadge({ cplId, code }: { cplId: string; code: string }) {
  return (
    <Link
      href={`/cpl/${cplId}`}
      className="focus-ring inline-flex items-center rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-semibold text-primary transition-colors hover:bg-primary/10 hover:text-primary-dark"
      aria-label={`Lihat detail ${code}`}
    >
      {code}
    </Link>
  );
}
