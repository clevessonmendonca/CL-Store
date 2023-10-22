import Image, { ImageProps } from "next/image";
import React from "react";

export const PromoBanner = ({ alt, ...props }: ImageProps) => {
  return <Image sizes="100vw" width={0} height={0} alt={alt} {...props} />;
};
