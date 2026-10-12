import AboutCard from "@/components/AboutCard";
import Button from "@/components/Button";
import Line from "@/components/Line";

import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main>
      {/* hero section */}
      <section className="h-[84vh] w-full px-40 flex items-center justify-between">
        <div>
          <Image
            src="/hero-image-square.png"
            alt={"Error rendering the about image"}
            height={"627"}
            width={"627"}
            className="size-125"
          />
        </div>
        <div className="w-1/2 space-y-4">
          <p className="uppercase text-md font-medium">About Tiny Library</p>
          <h1 className="text-5xl font-bold">Small shelf, big impact</h1>
          <p className="text-lg w-8/12 mb-8">
            Tiny Library started as a simple idea: make it easier for curious
            readers to actually find books they’ll love, not just scroll endless
            lists. Every title here is chosen with care, not algorithms.
          </p>

          <div className="flex items-center justify-center">
            <Button href="/contact">contact us</Button>
          </div>
        </div>
      </section>

      <section className="border border-zinc-300 px-40 py-10 flex items-center justify-between">
        <AboutCard
          icon="/icons/stack.png"
          heading="Curated, not crowded"
          text="Tiny Library keeps the catalogue intentionally small so every book feels like a recommendation."
        />
        <Line />
        <AboutCard
          icon="/icons/GlobeSimple.png"
          heading="Easy to browse"
          text="Clear categories and simple descriptions make it quick to choose what you actually want to read next."
        />
        <Line />
        <AboutCard
          icon="/icons/flag.png"
          heading="Readers first"
          text="Every part of Tiny Library is designed to help you spend less time searching and more time reading."
        />
      </section>
    </main>
  );
};

export default page;
