import { BookCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

// Todo: add the click and navigateo single book page

const BookCard = ({ book }: BookCardProps) => {
  return (
    <Link
      href={`/books/${book.id}`}
      key={book.id}
      className="border border-zinc-200 rounded-lg overflow-hidden hover:scale-101 transition-all duration-200 ease-in-out hover:shadow-xl cursor-pointer"
    >
      <Image
        // src={book.image}
        src={"/hero-image-square.png"}
        alt="Error rendering the book image"
        height={"267"}
        width={"267"}
        className="w-full"
      />
      <div className="p-4 space-y-2">
        <h2 className="text-xl truncate" title={book.name}>
          {book.name}
        </h2>
        <p className="text-md">{book.author}</p>
        {/* pill */}
        <span className="px-3 py-1 inline-block my-2 rounded-full border border-zinc-200">
          {book.category}
        </span>
        <div className="flex items-center gap-2">
          <Image
            src={"/icons/Like.png"}
            alt="Error rendering the like image"
            height={"15"}
            width={"18"}
          />
          <p className="text-md text-zinc-600">{book.likes}</p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
