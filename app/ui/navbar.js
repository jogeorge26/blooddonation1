import React from "react";
import Link from "next/link";

export default function Navbar2() {
  return (
    <nav className="bg-white p-4 flex flex-row justify-between sticky top-0">
      <h1 className="text-black pl-2 font-bold text-2xl">Blood</h1>
      <ul className="flex space-x-4 pr-2">
        <li className="p-3 hover:bg-gray-100">
          <Link className="text-black" href="/">
            Home
          </Link>
        </li>
        <li className="p-3 hover:bg-gray-100">
          <Link className="text-black" href="/explore">
            Explore
          </Link>
        </li>
        <li className="p-3 pl-6 pr-6 rounded-full bg-gray-200 hover:bg-red-500">
          <Link className="text-black" href="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
