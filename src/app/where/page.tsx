import Image from "next/image"
import { LinkIcon } from "@heroicons/react/24/solid"
import Map from "@/components/map"
import dynamic from "next/dynamic"

const DeckGLMap = dynamic(() => import("../../components/map"), { ssr: false })

export default function Where() {
  return (
    <div className="w-full h-full">
      <h1 className="mb-4">Where</h1>
      <div className="w-full h-2/3 relative">
        <DeckGLMap />
      </div>
    </div>
  )
}
