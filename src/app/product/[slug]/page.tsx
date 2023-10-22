import { prismaClient } from "@/lib/prisma";
import React from "react";
import { ProductImage } from "./components/product-images";

interface ProductDetailsPageProps {
  params: { slug: string };
}
export default async function ProductDetailsPage({
  params: { slug },
}: ProductDetailsPageProps) {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
  });

  if (!product) return null;

  return (
    <div>
      <ProductImage imageUrls={product.imageUrls} name={product.name} />
    </div>
  );
}
