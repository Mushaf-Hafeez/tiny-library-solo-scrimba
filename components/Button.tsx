import type { ButtonProps } from "@/types";

import Link from "next/link";

const Button = ({ children, href = "/" }: ButtonProps) => {
  return (
    <Link
      href={href}
      className="border-2 p-2 uppercase cursor-pointer text-sm mt-2 font-medium"
    >
      {children}
    </Link>
  );
};

export default Button;
