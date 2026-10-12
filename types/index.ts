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
