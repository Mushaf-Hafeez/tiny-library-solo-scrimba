"use client";

import Link from "next/link";
import { getCategories } from "@/utils/categories";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const categories = getCategories();

  return (
    <aside className="h-full flex items-center w-2/12 bg-white p-8">
      <ul className="space-y-2">
        {categories.map((category) => {
          const isActive = pathname.startsWith(
            `/books/categories/${category.toLowerCase()}`,
          );

          return (
            <li
              key={category}
              className={`ps-4 text-sm  cursor-pointer uppercase ${isActive ? "text-orange-400 border-s-2 border-s-orange-400" : "text-zinc-600"}`}
              // className="text-sm text-zinc-600 cursor-pointer uppercase "
            >
              <Link href={`/books/categories/${category}`}>{category}</Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
