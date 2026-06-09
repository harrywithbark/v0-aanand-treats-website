export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream">
      <div className="flex flex-col items-center gap-4">
        <div className="size-10 animate-spin rounded-full border-4 border-rose/20 border-t-rose" />
        <p className="text-sm font-medium text-espresso/70">Loading Aanand Treats...</p>
      </div>
    </div>
  )
}
