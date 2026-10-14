import { Book, BooksGridProps } from "@/types";
import BookCard from "./BookCard";

const BooksGrid = ({ books }: BooksGridProps) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {books.map((book: Book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksGrid;
