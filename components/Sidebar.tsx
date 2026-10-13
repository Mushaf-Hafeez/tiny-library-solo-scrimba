import { getCategories } from "@/utils/categories";
import React from "react";

const Sidebar = async () => {
  const categories = await getCategories();

  return (
    <aside className="h-full flex items-center w-2/12 bg-white p-8">
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category} className="text-sm text-zinc-600">
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
