import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">About</h2>
        {/* <p className="text-gray-700">HELLO WORLD! I'm a designer.</p> */}
        <p>
          I am a Portuguese <Link href="/work">techie</Link>, father and student of all things (humans, knowledge,
          myself).
        </p>

        <p>
          I hold a BA in Filmmaking, played poker professionally, lived in Portugal, UK, Switzerland and France, and I
          read books daily.
        </p>
      </div>
      <div className="relative w-1/3">
        <Image
          src="/diogo-nature.png"
          alt="diogo in nature"
          width={400}
          height={400}
          // layout="fill"
          // objectFit="contain" // Optional: could be contain, cover, none, scale-down
        />
      </div>
    </>
  )
}
