import Form from "next/form";
import type { Book } from "@/types";
import { getBooks } from "@/utils/books";
import BookCard from "@/components/BookCard";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

// 2. Strongly type the page props
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
