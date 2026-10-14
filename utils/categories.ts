import data from "@/data/categories.json";

export const getCategories = (): string[] => {
  return data.categories;
};
