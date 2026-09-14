import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-content flex-col items-center px-4 py-24 text-center sm:px-6">
      <p className="text-6xl font-bold text-primary">404</p>
      <h1 className="mt-4 text-2xl font-bold text-ink">Halaman tidak ditemukan</h1>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
        Kami tidak dapat menemukan mata kuliah, CPL, atau halaman yang Anda cari.
      </p>
      <Link
        href="/"
        className="focus-ring mt-6 inline-flex items-center gap-1 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-primary-dark"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
