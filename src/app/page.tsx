import ImageGallery from "@/components/image-gallery"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const nutshellImages = [
    {
      src: "https://res.cloudinary.com/thunder-fusion/image/upload/q_50/v1705338655/pjrh5apkrksltc1cycjz.jpg",
      alt: "Diogo in a london phone booth",
    },
    {
      src: "https://res.cloudinary.com/thunder-fusion/image/upload/q_50/v1705338652/aneqesvyviogdymsppvx.jpg",
      alt: "Diogo with daughter in restaurant",
    },
    {
      src: "https://res.cloudinary.com/thunder-fusion/image/upload/q_50/v1705338652/yrbexnmbe9nqsv8i9lpc.jpg",
      alt: "Diogo with son and wearing a hat",
    },
    {
      src: "https://res.cloudinary.com/thunder-fusion/image/upload/q_50/v1705338649/lj6g2hkifsgw3knzeipx.jpg",
      alt: "Diogo in a selfie",
    },
    {
      src: "https://res.cloudinary.com/thunder-fusion/image/upload/q_50/v1705338650/l41jbc2qcwejltdb4hay.jpg",
      alt: "Diogo skiing with wife",
    },
  ]

  const humanImages = [
    {
      src: "https://res.cloudinary.com/thunder-fusion/image/upload/q_50/v1705338654/kncvnanwdvf1r9wnhlit.jpg",
      alt: "Diogo with Red Cross vest",
    },
    {
      src: "https://res.cloudinary.com/thunder-fusion/image/upload/q_50/v1705393559/ynwg3m9pufaglihwp8ry.jpg",
      alt: "Diogo in a london phone booth",
    },
    {
      src: "https://res.cloudinary.com/thunder-fusion/image/upload/q_50/v1566920515/e5mfehxuylalmfnqrrfm.jpg",
      alt: "Diogo with Cristiano Ronaldo",
    },
    {
      src: "https://res.cloudinary.com/thunder-fusion/image/upload/q_50/v1705392876/ziy57ngwqu4wdjrepkmh.jpg",
      alt: "Diogo in Padel with daughter",
    },
  ]

  return (
    <>
      <div className="space-y-6">
        <h1>Diogo Costa</h1>

        <h2>In a nutshell</h2>
        <p>
          I am a Portuguese techie, father and student of all things (humans, knowledge, myself). I lived in UK,
          Switzerland and France, and now I am in Portugal.
        </p>

        {/* <p>
          Wondering what am I up to <Link href="/now">these days</Link>?
        </p> */}

        <ImageGallery images={nutshellImages} />

        <h2>The professional</h2>
        <p>For the past 5 years I have been in tech, and specifically web development.</p>

        <p>
          My latest role had me build and lead a team at{" "}
          <a href="https://routereports.com" target="_blank" rel="noopener noreferrer">
            Route Reports
          </a>
          , a startup in road and rail maintenance. We went deep into map tech, data pipelines, product management and
          computer vision.
        </p>

        <p>Past me has seen varying measures of professional success as a movie extra, poker pro and video producer.</p>

        <p>
          Do get in touch if you have a project that attempts to change things for the better, is hard to nail and needs
          people who are all in.
        </p>

        <h2>The human</h2>
        <p>
          I try to be a positive role model for my children. Be open to new relationships and cultivate existing ones.
          Put myself in people&apos;s shoes, use empathy to really get what they feel and do. I love a deep discussion
          and always assume there is something more to learn.
        </p>
        <p>One good habit I have is reading a lot. I manage 2-3 books a month.</p>
        <p>
          I get my movement/fresh air needs from long walks outside while listening to podcasts, and I play Padel on the
          regular - find this an excellent way to push for improvement and keep myself humble!
        </p>
        <ImageGallery images={humanImages} />
      </div>
    </>
  )
}
