"use client";

import React from "react";
import { Card } from "./card";
import { Button } from "./button";
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";
import Link from "next/link";
import { Cart } from "./cart";

export const Header = () => {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <Card className="flex justify-between items-center p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          {status === "authenticated" && data?.user && (
            <div className="flex flex-col">
              <div className="py-4 flex items-center gap-2">
                <Avatar>
                  <AvatarFallback>
                    {data.user.name?.[0].toUpperCase()}
                  </AvatarFallback>

                  {data.user.image && <AvatarImage src={data.user.image} />}
                </Avatar>

                <div className="flex flex-col">
                  <p className="font-medium">{data.user.name}</p>
                  <p className="text-sm opacity-75">Boas Compras!</p>
                </div>
              </div>

              <Separator />
            </div>
          )}

          <div className="mt-2 flex flex-col gap-2">
            {status === "unauthenticated" && (
              <Button
                onClick={handleLoginClick}
                variant="outline"
                className="w-full gap-2 flex justify-start "
              >
                <LogInIcon size={16} />
                Fazer Login
              </Button>
            )}

            {status === "authenticated" && (
              <Button
                onClick={handleLogoutClick}
                variant="outline"
                className="w-full gap-2 flex justify-start "
              >
                <LogOutIcon size={16} />
                Fazer Lougout
              </Button>
            )}

            <Button
              variant="outline"
              className="w-full gap-2 flex justify-start "
            >
              <HomeIcon size={16} />
              Início
            </Button>

            <Button
              variant="outline"
              className="w-full gap-2 flex justify-start "
            >
              <PercentIcon size={16} />
              Ofertas
            </Button>

            <Link href={"/catalog"}>
              <Button
                variant="outline"
                className="w-full gap-2 flex justify-start "
              >
                <ListOrderedIcon size={16} />
                Catálogo
              </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      <Link href="/">
        <h1 className="font-semibold text-lg">
          <span className="text-primary">CL</span> Store
        </h1>
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <ShoppingCartIcon />
          </Button>
        </SheetTrigger>

        <SheetContent className="w-[350px]">
          <Cart />
        </SheetContent>
      </Sheet>
    </Card>
  );
};
