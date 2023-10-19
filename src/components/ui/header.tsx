import React from "react";
import { Card } from "./card";
import { Button } from "./button";
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PercentCircleIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

export const Header = () => {
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
            <div className="mt-2 flex flex-col gap-2">
              <Button
                variant="outline"
                className="w-full gap-2 flex justify-start "
              >
                <LogInIcon size={16} />
                Fazer Login
              </Button>

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

              <Button
                variant="outline"
                className="w-full gap-2 flex justify-start "
              >
                <ListOrderedIcon size={16} />
                Catálogo
              </Button>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <h1 className="font-semibold text-lg">
        <span className="text-primary">CL</span> Store
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};
