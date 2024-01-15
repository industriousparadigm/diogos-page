"use client"
import { useCallback, useState } from "react"
import DeckGL from "@deck.gl/react/typed"
import StaticMap from "react-map-gl"
import { IconLayer } from "@deck.gl/layers/typed"
import { PickingInfo } from "@deck.gl/core/typed"

const initialViewState = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 1,
  pitch: 0,
  bearing: 0,
}

const markers = [
  { id: "london", name: "London", coordinates: [-0.1276, 51.5072] },
  { id: "lisbon", name: "Lisbon", coordinates: [-9.1393, 38.7223] },
  { id: "pittsburgh", name: "Pittsburgh", coordinates: [-79.9959, 40.4406] },
]

const cloudinaryIconUrl = "https://res.cloudinary.com/thunder-fusion/image/upload/v1705229380/xf4duarj6p0nicix5o0c.png"

export default function Map() {
  const [hoverInfo, setHoverInfo] = useState<PickingInfo>()
  const [cursor, setCursor] = useState<string>("auto")

  const layers = [
    new IconLayer({
      id: "icon-layer",
      data: markers,
      pickable: true,
      getIcon: () => ({
        url: cloudinaryIconUrl,
        width: 128,
        height: 128,
        anchorY: 128,
      }),
      sizeScale: 7,
      getPosition: (d) => d.coordinates,
      getSize: (d) => 5,
    }),
  ]

  const getTooltip = ({ object }: PickingInfo) =>
    object
      ? {
          text: object.name,
          style: {
            backgroundColor: "white",
            color: "black",
            fontSize: "1em",
            padding: "4px",
            borderRadius: "4px",
          },
        }
      : null

  const onMouseEnter = useCallback(() => setCursor("pointer"), [])
  const onMouseLeave = useCallback(() => setCursor("auto"), [])

  return (
    <DeckGL initialViewState={initialViewState} controller={true} layers={layers} getTooltip={getTooltip}>
      <StaticMap
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/light-v11"
        projection={{ name: "mercator" }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        cursor={cursor}
      />
    </DeckGL>
  )
}
