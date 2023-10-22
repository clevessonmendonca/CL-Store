import { Category } from "@prisma/client";
import Image from "next/image";
import React from "react";

interface CategoryItemProps {
  category: Category;
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="bg-category-item-gradient flex h-[150px] w-full items-center justify-center rounded-tl-lg rounded-tr-lg">
        <Image
          src={category.imageUrl}
          alt={category.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-auto max-h-[70%] max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <div className="bg-accent py-3 rounded-br-lg rounded-bl-lg">
        <p className="font-semibold text-sm text-center">{category.name}</p>
      </div>
    </div>
  );
};
