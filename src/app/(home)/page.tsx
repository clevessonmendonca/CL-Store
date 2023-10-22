import { Categories } from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import { ProductList } from "./components/product-list";
import { SectionTitle } from "./components/section-title";
import { PromoBanner } from "./components/promo-banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  return (
    <div className="flex flex-col gap-8">
      <PromoBanner
        alt="Até 55% de Desconto esse mês!"
        src="/banner-home-01.png"
      />

      <div className="px-5">
        <Categories />
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        alt="Até 55% de Desconto em mouses!"
        src="/banner-home-02.png"
      />

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <PromoBanner
        alt="Até 20% de Desconto em fones!"
        src="/banner-home-03.png"
      />

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>
    </div>
  );
}
