"use client";
import Link from "next/link";
import { scrollToId } from "@/app/lib/utils";

export default function NavBar() {
  return (
    <header className="top-0 w-full h-16 flex justify-between">
      <div className="flex items-center m-6">
        <p>Bimal CV</p>
      </div>
      <nav className="flex items-center gap-6 text-sm p-4">
        <Link
          href="/#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("about");
          }}
        >
          About
        </Link>
        <Link href="#">Skills</Link>
        <Link href="#">Experience</Link>
        <Link href="#">Education</Link>
        <Link
          href="/#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("contact");
          }}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
