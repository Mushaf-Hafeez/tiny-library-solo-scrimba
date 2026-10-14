import Form from "next/form";

import BooksGrid from "@/components/BooksGrid";
import Button from "@/components/Button";
import { getBooksByCategory } from "@/utils/books";

const page = async ({ params, searchParams }) => {
  const { slug: category } = await params;
  const { query } = await searchParams;
  let books = await getBooksByCategory(category);

  if (query && query !== "") {
    books = books.filter(
      (book) =>
        book.author.toLowerCase().includes(query.toLowerCase()) ||
        book.name.toLowerCase().includes(query.toLowerCase()),
    );
  }

  if (books.length === 0) {
    return (
      <div className="h-full w-full flex flex-col gap-2 items-center justify-center">
        <h1 className="text-3xl font-bold">
          No book found with this category: {category}
        </h1>
        <Button href="/books">Browse Books</Button>
      </div>
    );
  }

  return (
    <main className="h-full w-full overflow-y-auto">
      <div className="px-10 py-10 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold ">Books</h2>
          <Form action={`/books/categories/${category}`}>
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
