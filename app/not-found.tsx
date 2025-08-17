import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0b0b0b]">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-zinc-100">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-zinc-300">Page Not Found</h2>
        <p className="mb-8 text-zinc-400">
          The page you're looking for doesn't exist.
        </p>
        <Button asChild className="bg-emerald-400 text-black hover:bg-emerald-500">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  )
}