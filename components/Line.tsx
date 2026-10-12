import Image from "next/image";
import React from "react";

const Line = () => {
  return (
    <Image
      src={"/icons/Line.png"}
      alt="Error rendering the line"
      height={"123"}
      width={"1"}
      className="mr-20"
    />
  );
};

export default Line;
