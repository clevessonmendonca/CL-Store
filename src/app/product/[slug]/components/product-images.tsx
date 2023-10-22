"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImageProps {
  name: string;
  imageUrls: string[];
}

export const ProductImage = ({ imageUrls, name }: ProductImageProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

    const handleImageClick = (imageUrl: string) => {
        setCurrentImage(imageUrl)
    }

  return (
    <div className="flex flex-col">
      <div className="bg-accent h-[300px] w-full flex items-center justify-center">
        <Image
          src={currentImage}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <div className="grid px-5 grid-cols-4 gap-4 mt-5">
        {imageUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            className={`bg-accent h-[100px] flex justify-center items-center rounded-lg ${
              imageUrl === currentImage &&
              "border-2 border-primary border-solid"
            }`}
            onClick={() => handleImageClick(imageUrl)}
          >
            <Image
              src={imageUrl}
              alt={name}
              width={0}
              height={0}
              sizes="100vw"
              className="h-[auto] max-h-[70%] w-auto max-w-[80%]"
              style={{
                objectFit: "contain",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
