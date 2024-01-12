export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Header */}
      <div className="z-10 w-full items-center justify-between text-sm lg:flex">
        <h1 className="text-3xl font-bold">Diogo Costa</h1>
      </div>

      {/* Content ? */}
      <div className="mb-auto mt-8 flex gap-4 flex-col">
        <p>I am a Portuguese techie, father and student of all things (humans, knowledge, myself).</p>

        <p>
          I hold a BA in Filmmaking, played poker professionally, lived in Portugal, UK, Switzerland and France, and I
          read books daily.
        </p>
      </div>
    </main>
  )
}
