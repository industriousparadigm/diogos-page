import Image from "next/image"
import { LinkIcon } from "@heroicons/react/24/solid"
import thingsNow from "./things-now.json"

export default function Now() {
  return (
    <div>
      <h1 className="mb-4">What I am doing now</h1>
      {thingsNow.map((item) => (
        <div key={item.name} className="work-item mb-6 p-4 border border-gray-200 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold flex items-center">{item.name}</h3>
          <p className="text-gray-500 text-sm">{item.description}</p>
          {item.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      ))}
    </div>
  )
}
