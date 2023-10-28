import { CartContext, CartProduct } from "@/providers/cart";
import Image from "next/image";
import React, { useContext } from "react";
import { Button } from "./button";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";

interface CartItemProps {
  product: CartProduct;
}

export const CartItem = ({ product }: CartItemProps) => {
  const { decreaseProductQuantity } = useContext(CartContext);

  const handleDescreaseProductQuantityClick = () => {
    decreaseProductQuantity(product.id);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <div className="bg-accent h-[77px] w-[77px] flex items-center justify-center rounded lg">
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            alt={product.name}
            className="w-auto max-h-[70%] h-auto max-w-[80%]"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-xs">{product.name}</p>

          <div className="flex items-center gap-2">
            <p className="text-sm font-bold">{product.totalPrice.toFixed(2)}</p>
            {product.discountPercentage > 0 && (
              <p className="opacity-75 line-through text-xs">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            )}
          </div>

          <div className="flex items-center gap-1">
            <Button
              size="icon"
              className="w-8 h-8"
              variant="outline"
              onClick={handleDescreaseProductQuantityClick}
            >
              <ArrowLeftIcon size={12} />
            </Button>

            <span className="text-xs">{product.quantity}</span>

            <Button size="icon" className="w-8 h-8" variant="outline">
              <ArrowRightIcon size={12} />
            </Button>
          </div>
        </div>
      </div>

      <Button size="icon" variant="outline">
        <TrashIcon size={16} />
      </Button>
    </div>
  );
};
