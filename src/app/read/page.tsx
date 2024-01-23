import { getReadingList } from "@/services/notion"
import ReadingPageBlock from "./block"
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import Link from "next/link"

async function getData() {
  const blocks = await getReadingList()

  if (!blocks) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return blocks
}

export default async function Read() {
  const blocks = await getData()

  // if (!blocks) return

  return (
    <>
      <Link className="clean-link" href="/">
        <h1 className="text-5xl">Diogo Costa</h1>
      </Link>

      <h1>Books</h1>
      <p>
        Ordered by most recent. These are some of my favorite books in recent times. I try to include some thoughts on
        what I liked, or at times had mixed feelings about, and generally the big takeaways that stuck with me.
      </p>
      <p>Click any of the entries in the list to see the review bit!</p>

      {blocks.map((block) => (
        <ReadingPageBlock key={block.id} block={block as BlockObjectResponse} />
      ))}
    </>
  )
}
