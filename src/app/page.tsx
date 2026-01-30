import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">2 Fellas Media</h1>
        <p className="text-gray-400 mb-8">Proposal Portal</p>
        <Link href="/proposals/oilysa" className="btn-gold">
          View OilySA Proposal
        </Link>
      </div>
    </main>
  )
}
