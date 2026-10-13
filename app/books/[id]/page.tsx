import { getBookById } from "@/utils/books";
import Image from "next/image";
import React from "react";
import moment from "moment";
import Link from "next/link";
import Button from "@/components/Button";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const book = await getBookById(Number(id));

  if (!book) {
    return (
      <div className="flex flex-col gap-4 items-center justify-center h-[80vh]">
        <h1 className="text-5xl">404 - Book not found</h1>
        <Button href="/books">Browse Books</Button>
      </div>
    );
  }

  return (
    <main>
      <div className="px-40 py-10 flex items-center gap-20">
        <div>
          <Image
            // src={book.image}
            src={"/hero-image-square.png"}
            alt={"Error while rendering the image"}
            height={"629"}
            width={"629"}
            className="size-125"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Image
              src={"/icons/Like.png"}
              alt="Error rendering the like image"
              height={"15"}
              width={"18"}
              className="size-4"
            />
            <p className="text-lg text-zinc-600">{book.likes}</p>
          </div>
          <h2 className="text-3xl w-sm" title={book.name}>
            {book.name}
          </h2>
          {/* pill */}
          <span className="px-3 py-1 inline-block my-2 rounded-full border border-zinc-200">
            {book.category}
          </span>
          <p className="text-md">{book.author}</p>
          <p className="text-sm text-zinc-400 mt-5">
            Added on {moment(book.dateAdded).format("l")}
          </p>
        </div>
      </div>
    </main>
  );
};

export default page;
