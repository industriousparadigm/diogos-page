"use client"
import { useState } from "react"

type ImageObject = {
  src: string
  alt: string
}

type ImageGalleryProps = {
  images: ImageObject[]
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<ImageObject | null>(null)

  const openPopup = (image: ImageObject) => {
    setSelectedImage(image)
  }

  const closePopup = () => {
    setSelectedImage(null)
  }

  return (
    <>
      <div className="flex gap-2 sm:gap-3 flex-wrap justify-center sm:justify-start overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex flex-none h-38 relative rounded-lg"
            // onClick={() => openPopup(image)}
          >
            <img src={image.src} alt={image.alt} className="rounded-md h-[100px] sm:h-[150px]" />
          </div>
        ))}
      </div>
      {/* {selectedImage && (
        <div
          className="fixed top-0 inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
          onClick={closePopup}
        >
          <div
            className="bg-white p-2 rounded-lg max-w-full max-h-full sm:max-w-[66%] sm:max-h-[80%]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center h-full">
              <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-full" />
            </div>
          </div>
        </div>
      )} */}
    </>
  )
}

export default ImageGallery
