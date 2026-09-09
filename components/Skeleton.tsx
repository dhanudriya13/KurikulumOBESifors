export function SkeletonCard() {
  return (
    <div
      className="h-full rounded-card border border-border bg-surface p-5"
      aria-hidden="true"
    >
      <div className="h-5 w-2/3 animate-pulse rounded bg-border" />
      <div className="mt-3 h-4 w-1/3 animate-pulse rounded bg-border" />
      <div className="mt-3 h-4 w-1/4 animate-pulse rounded bg-border" />
      <div className="mt-4 h-3 w-full animate-pulse rounded bg-border" />
      <div className="mt-2 h-3 w-4/5 animate-pulse rounded bg-border" />
    </div>
  );
}

export function SkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
