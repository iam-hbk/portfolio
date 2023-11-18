import React from "react";

import { FaGithub } from "react-icons/fa";
import Link from "next/link";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className=" glass sticky top-5  z-50 m-5 flex  w-[90vw] flex-row items-center justify-end space-x-4 border border-black px-10 rounded-full">
      <Link
        href="#"
        className="link-hover link p-4 text-xl hover:text-primary"
      >
        Heritier
      </Link>
      <Link
        href="#"
        className="link-hover link p-4 text-xl hover:text-primary"
      >
        Blog
      </Link>
      <Link
        href="#"
        className="link-hover link p-4 text-xl hover:text-primary"
      >
        Works
      </Link>
      <Link
        href="#"
        className="link-hover link p-4 text-xl hover:text-primary"
      >
        Contact
      </Link>
      <Link
        href={"https://github.com/iam-hbk"}
        target="_blank"
        className="text-4xl hover:text-primary"
      >
        <FaGithub />
      </Link>
    </nav>
  );
};

export default Navbar;
