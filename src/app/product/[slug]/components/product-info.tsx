"use client";

import { Button } from "@/components/ui/button";
import { DiscountBadge } from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  TruckIcon,
} from "lucide-react";
import React, { useContext, useState } from "react";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuatity] = useState(1);

  const { addProductToCart } = useContext(CartContext);

  const handleDecreaseQuantityClick = () => {
    setQuatity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantityClick = () => {
    setQuatity((prev) => prev + 1);
  };

  const handleAddToCartClick = () => {
    addProductToCart({ ...product, quantity });
  };

  return (
    <div className="flex flex-col px-5 ">
      <h2 className="text-lg">{product.name}</h2>

      <div className="flex items-center gap-1">
        <h1 className="text-xl font-bold">
          R$ {product.totalPrice.toFixed(2)}
        </h1>
        {product.discountPercentage > 0 && (
          <DiscountBadge>{product.discountPercentage}</DiscountBadge>
        )}
      </div>

      {product.discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          R$ {Number(product.basePrice).toFixed(2)}
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
        <p className="opacity-75 text-sm">{product.description}</p>
      </div>

      <Button
        className="mt-5 uppercase font-bold"
        onClick={handleAddToCartClick}
      >
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
