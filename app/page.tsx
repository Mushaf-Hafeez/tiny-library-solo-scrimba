import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="h-[84vh] w-full px-40 flex items-center justify-between">
      <div className="w-1/2 space-y-4">
        <p className="uppercase text-md font-medium">Browse books</p>
        <h1 className="text-5xl font-bold">Find your next favourite book</h1>
        <p className="text-lg w-8/12 mb-8">
          Tiny Library is a cosy corner of the web where readers discover
          hand‑picked titles across every genre, from timeless classics to
          hidden indie gems.
        </p>

        <Button href="/books">browse books</Button>
      </div>

      <div>
        <Image
          src="/hero-image.png"
          alt={"Error rendering the hero image"}
          height={"627"}
          width={"627"}
          className="size-125"
        />
      </div>
    </main>
  );
};

export default page;
