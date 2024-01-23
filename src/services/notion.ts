import { Client } from "@notionhq/client"
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints"

const notion = new Client({ auth: process.env.NOTION_TOKEN })

async function getBlockChildren(blockId: string) {
  const response = await notion.blocks.children.list({
    block_id: blockId,
  })
  return response.results
}

export async function getReadingList() {
  const pageId = process.env.NOTION_READING_PAGE_ID!
  let blocks = await notion.blocks.children.list({
    block_id: pageId,
  })

  const enrichedBlocks = await Promise.all(
    blocks.results.map(async (block) => {
      if ("has_children" in block && block.has_children) {
        const children = await getBlockChildren(block.id)
        return { ...block, children }
      }
      return block
    }),
  )

  return enrichedBlocks
}
