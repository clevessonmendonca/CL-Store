"use client";

import React from "react";
import { CategorieItem } from "./categorie-item";
import { prismaClient } from "@/lib/prisma";

export const Categories = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="grid grid-col-2 gap-y-4 gap-x-2">
      {categories.map((category) => (
        <CategorieItem key={category.id} category={category} />
      ))}
    </div>
  );
};
