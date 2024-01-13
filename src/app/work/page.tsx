import Image from "next/image"
import workExperiences from "./work-exp.json"
import { LinkIcon } from "@heroicons/react/24/solid"

export default function Work() {
  return (
    <div>
      {workExperiences.map((item) => (
        <div key={item.name} className="work-item mb-6 p-4 border border-gray-300 rounded-lg shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex items-center">
              <Image src={item.imageLink} alt={`${item.name} logo`} width={30} height={30} className="mr-2" />
              <div className="ml-3">
                <p className="flex items-center gap-1">
                  <a href={item.website} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-xl font-bold flex items-center gap-1">{item.name}</h3>
                  </a>{" "}
                  <span className="text-sm font-normal text-gray-500">
                    ({item.startDate} - {item.endDate})
                  </span>
                </p>
                <p className="text-gray-500 text-sm">{item.description}</p>
                <p className="text-gray-600 mt-1">{item.role}</p>
              </div>
            </div>
            <LinkIcon width={16} className="text-gray-400" />
          </div>
          <ul className="list-inside mt-4 space-y-2">
            {item.bullets.map((bulletPoint, index) => (
              <li key={index} className="text-gray-700 flex items-start">
                {bulletPoint}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
