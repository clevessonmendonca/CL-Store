"use client";

import { Product } from "@prisma/client";
import { ReactNode, createContext, useState } from "react";

interface CartProduct extends Product {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  cartBasePrice: number;
  cartTotalPrice: number;
  carTotalDiscount: number;
  addProductToCart: (product: CartProduct) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  carTotalDiscount: 0,
  addProductToCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const addProductToCart = (product: CartProduct) => {
    setProducts((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        cartBasePrice: 0,
        carTotalDiscount: 0,
        cartTotalPrice: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
