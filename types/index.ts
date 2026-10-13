import type { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  href: string;
}

export interface AboutCardProps {
  icon: string;
  heading: string;
  text: string;
}

export interface LineProps {
  className?: string;
}

export interface Book {
  id: number;
  name: string;
  author: string;
  likes: number;
  image: string;
  category: string;
  dateAdded: string;
}

export interface BookCardProps {
  book: Book;
}
