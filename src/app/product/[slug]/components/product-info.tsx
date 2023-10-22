"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductWithTotalPrice } from "@/helpers/product";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  TruckIcon,
} from "lucide-react";
import React, { useState } from "react";

interface ProductInfoProps {
  product: Pick<
    ProductWithTotalPrice,
    "basePrice" | "discountPercentage" | "description" | "name" | "totalPrice"
  >;
}

export const ProductInfo = ({
  product: { basePrice, description, discountPercentage, name, totalPrice },
}: ProductInfoProps) => {
  const [quantity, setQuatity] = useState(1);

  const handleDecreaseQuantityClick = () => {
    setQuatity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantityClick = () => {
    setQuatity((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col px-5 ">
      <h2 className="text-lg">{name}</h2>

      <div className="flex items-center gap-1">
        <h1 className="text-xl font-bold">R$ {totalPrice.toFixed(2)}</h1>
        {discountPercentage > 0 && (
          <Badge className="px-2 py-[2px]">
            <ArrowDownIcon size={12} /> {discountPercentage}%
          </Badge>
        )}
      </div>

      {discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          R$ {Number(basePrice).toFixed(2)}
        </p>
      )}

      <div className="flex items-center gap-4 mt-4">
        <Button
          size="icon"
          variant="outline"
          onClick={handleDecreaseQuantityClick}
        >
          <ArrowLeftIcon size={16} />
        </Button>

        <span>{quantity}</span>

        <Button size="icon" variant="outline">
          <ArrowRightIcon size={16} onClick={handleIncreaseQuantityClick} />
        </Button>
      </div>

      <div className="flex gap-3 flex-col">
        <h3 className="font-bold">Descrição</h3>
        <p className="opacity-75 text-sm">{description}</p>
      </div>

      <Button className="mt-5 uppercase font-bold">
        Adicionar ao carrinho
      </Button>

      <div className="flex items-center justify-between rounded-lg px-5 py-2 bg-accent mt-5">
        <div className="flex items-center gap-2">
          <TruckIcon />

          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via <span className="font-bold">FSPacket</span>
            </p>
            <p className="text-xs text-primary">
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>

        <p className="font-bold text-xs">Frete Grátis</p>
      </div>
    </div>
  );
};
