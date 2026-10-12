import type { LineProps } from "@/types";

import Image from "next/image";
import React from "react";

import clsx from "clsx";

const Line = ({ className }: LineProps) => {
  return (
    <Image
      src={"/icons/Line.png"}
      alt="Error rendering the line"
      height={"123"}
      width={"1"}
      className={clsx("mr-20", className)}
    />
  );
};

export default Line;
