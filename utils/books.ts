import books from "@/data/books.json";
import { Book } from "@/types";

export const getBooks = async (): Promise<Book[]> => {
  return books;
};

export const getBookById = (id: number): Promise<Book | undefined> => {
  const book = books.find((item) => item.id === id);

  return Promise.resolve(book);
};

export const getBooksByCategory = async (category: string): Promise<Book[]> => {
  let filteredBooks = books;

  if (category !== "all") {
    filteredBooks = books.filter(
      (book) => book.category.toLowerCase() === category.toLowerCase(),
    );
  }

  return Promise.resolve(filteredBooks);
};
