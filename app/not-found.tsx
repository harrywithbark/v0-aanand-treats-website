import Link from 'next/link'
import { Hop as Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-5">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-amber-vivid/10">
          <span className="font-serif text-3xl text-amber-vivid">404</span>
        </div>
        <h1 className="font-serif text-3xl text-espresso">Page not found</h1>
        <p className="mt-3 text-sm leading-relaxed text-espresso/70">
          The page you are looking for does not exist. It might have been moved or deleted.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="/" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-rose px-6 py-3 text-sm font-medium text-cream shadow-glow transition-all hover:brightness-110">
            <Home className="size-4" aria-hidden="true" /> Back to Home
          </Link>
          <Link href="/gallery" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full glass border border-cream/40 px-6 py-3 text-sm font-medium text-espresso transition-all hover:shadow-lg">
            <ArrowLeft className="size-4" aria-hidden="true" /> Browse Gallery
          </Link>
        </div>
      </div>
    </div>
  )
}
