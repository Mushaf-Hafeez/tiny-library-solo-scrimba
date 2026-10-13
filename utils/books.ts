import books from "@/data/books.json";
import { Book } from "@/types";

export const getBooks = async (): Promise<Book[]> => {
  return books;
};

export const getBookById = (id: number): Promise<Book | undefined> => {
  console.log("id is: ", id);
  const book = books.find((item) => item.id === id);

  return Promise.resolve(book);
};
