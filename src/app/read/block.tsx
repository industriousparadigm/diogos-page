"use client"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline"
import {
  BlockObjectResponse,
  RichTextItemResponse,
  ToggleBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints"
import React, { useState } from "react"

interface BlockProps {
  block: BlockObjectResponse
}

type BetterToggleBlockType = ToggleBlockObjectResponse & { children: BlockObjectResponse[] }

export default function ReadingPageBlock({ block }: BlockProps) {
  const [isOpen, setIsOpen] = useState(false)

  const renderRichText = (richText: RichTextItemResponse[]) => {
    return (
      <div className="inline text-left">
        {/* ensure inline elements wrap together */}
        {richText.map((item, index) => {
          const style = {
            fontWeight: item.annotations.bold ? "bold" : "normal",
            fontStyle: item.annotations.italic ? "italic" : "normal",
            textDecorationLine: item.annotations.strikethrough ? "line-through" : "none",
            textDecoration: item.annotations.underline ? "underline" : "none",
            color: item.annotations.color !== "default" ? item.annotations.color : "inherit",
          }

          return (
            <span key={index} style={style}>
              {item.plain_text}
            </span>
          )
        })}
      </div>
    )
  }

  const renderHeadingBlock = (block: BlockObjectResponse) => {
    switch (block.type) {
      case "heading_1":
        return <h1>{renderRichText(block.heading_1.rich_text)}</h1>
      case "heading_2":
        return <h2>{renderRichText(block.heading_2.rich_text)}</h2>
      case "heading_3":
        return <h3>{renderRichText(block.heading_3.rich_text)}</h3>
      default:
        return <div>Unsupported block type: {block.type}</div>
    }
  }

  const renderToggleBlock = (block: BetterToggleBlockType) => {
    const hasChildren = block.children?.length > 0

    return (
      <div className="my-4">
        <button onClick={() => hasChildren && setIsOpen(!isOpen)} className="font-bold flex items-center">
          {renderRichText(block.toggle.rich_text)}
          {hasChildren &&
            (isOpen ? <ChevronUpIcon className="h-5 w-5 ml-2" /> : <ChevronDownIcon className="h-5 w-5 ml-2" />)}
        </button>
        {isOpen && hasChildren && (
          <div>
            {block.children.map((child) => (
              <ReadingPageBlock key={child.id} block={child} />
            ))}
          </div>
        )}
      </div>
    )
  }

  const renderListBlock = (block: BlockObjectResponse) => {
    switch (block.type) {
      case "bulleted_list_item":
        return <li>{renderRichText(block.bulleted_list_item.rich_text)}</li>
      case "numbered_list_item":
        return <li>{renderRichText(block.numbered_list_item.rich_text)}</li>
      default:
        return null
    }
  }

  if (block.type === "heading_1" || block.type === "heading_2" || block.type === "heading_3") {
    return <h1>{renderHeadingBlock(block)}</h1>
  }

  if (block.type === "paragraph") {
    return <p className="mt-2">{renderRichText(block.paragraph.rich_text)}</p>
  }

  if (block.type === "toggle") {
    return <div>{renderToggleBlock(block as BetterToggleBlockType)}</div>
  }

  if (block.type === "bulleted_list_item" || block.type === "numbered_list_item") {
    return <ul className="list-inside list-disc">{renderListBlock(block)}</ul>
  }

  if (block.type === "quote") {
    return (
      <blockquote className="mt-2 border-l-4 border-gray-300 pl-4 italic text-gray-600">
        {renderRichText(block.quote.rich_text)}
      </blockquote>
    )
  }

  return <div>Unsupported block type: {block.type}</div>
}
