import type { Book } from "@/types";
import { getBooks } from "@/utils/books";
import BookCard from "@/components/BookCard";

const page = async () => {
  const books = await getBooks();

  return (
    <main>
      <div className="px-40 py-10 space-y-4">
        <h2 className="text-3xl font-bold ">Books</h2>
        <div className="grid grid-cols-4 gap-6">
          {books.map((book: Book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
