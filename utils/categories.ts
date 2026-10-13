import data from "@/data/categories.json";

export const getCategories = async (): Promise<string[]> => {
  return data.categories;
};
