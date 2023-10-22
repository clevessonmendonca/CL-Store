import { Product } from "@prisma/client";
import Image from "next/image";
import React from "react";

interface ProductItemProps {
  product: Product;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex flex-col gap-4 max-w-[156px]">
      <div className="bg-accent rounded-lg h-[170px] w-[150px] flex items-center justify-center">
        <Image
          src={product.imageUrls[0]}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-auto max-h-[70%] max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
          alt={product.name}
        />
      </div>

      <div>
        <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis ">
          {product.name}
        </p>
      </div>
    </div>
  );
};
