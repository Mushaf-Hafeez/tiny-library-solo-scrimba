import Form from "next/form";
import type { Book } from "@/types";
import { getBooks } from "@/utils/books";
import BookCard from "@/components/BookCard";
import BooksGrid from "@/components/BooksGrid";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

type PageProps = {
  searchParams: SearchParams;
};

const page = async ({ searchParams }: PageProps) => {
  const { query } = (await searchParams) || "";
  let books = await getBooks();

  if (query) {
    books = books.filter((book) => book.name.toLowerCase().includes(query));
  }

  return (
    <main className="h-full w-full overflow-y-auto">
      <div className="px-10 py-10 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold ">Books</h2>
          <Form action={"/books"}>
            <input
              type="text"
              placeholder="Search for a book"
              name="query"
              className="px-4 py-1.5 rounded-full border border-zinc-600"
              autoComplete={"off"}
            />
          </Form>
        </div>
        <BooksGrid books={books} />
      </div>
    </main>
  );
};

export default page;
