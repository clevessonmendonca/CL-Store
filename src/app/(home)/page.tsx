import Image from "next/image";
import { Categories } from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import { ProductList } from "./components/product-list";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div>
      <Image
        className="h-auto w-full p-5"
        sizes="100vw"
        src="/banner-home-01.png"
        width={0}
        height={0}
        alt="Até 55% de Desconto esse mês."
      />

      <div className="mt-8 p-5">
        <Categories />
      </div>

      <div className="mt-5">
        <ProductList products={deals} />
      </div>
    </div>
  );
}
