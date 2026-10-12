"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="px-40 mx-auto w-full flex  items-center justify-between">
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          alt="error rendering the logo"
          height={"100"}
          width={"100"}
        ></Image>
      </Link>

      <ul className="flex items-center gap-10">
        <li>
          <Link
            href={"/books"}
            className={`text-sm pb-2 ${pathname === "/books" && "text-orange-400 border-b border-orange-400"}`}
          >
            BOOKS
          </Link>
        </li>
        <li>
          <Link
            href={"/about"}
            className={`text-sm pb-2 ${pathname === "/about" && "text-orange-400 border-b border-orange-400"}`}
          >
            ABOUT
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
