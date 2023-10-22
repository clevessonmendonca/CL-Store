import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import React from "react";
import { CategoryItem } from "./components/category-item";

export default async function CatalogPage() {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="p-5 flex gap-8 flex-col">
      <Badge
        className="gap-1 w-fit text-base uppercase border-primary px-3 py-[0.375rem] border-2"
        variant="outline"
      >
        <ShapesIcon size={16} /> 
        Catálogo
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
