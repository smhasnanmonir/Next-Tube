"use client";

import Link from "next/link";
import { useState } from "react";

const NavBarComp = () => {
  const [inputValue, setInputValue] = useState("");
  const input_array = inputValue.split(" ").join("-");
  return (
    <div className="py-[15px] place-content-center flex gap-1">
      <Link href="/" className="block bg-red-500 text-white px-3 py-2 rounded">
        Home
      </Link>
      <div>
        <form className="flex gap-1">
          <input
            onChange={(e) => setInputValue(e.target.value)}
            name="search"
            className="block px-3 py-2 rounded bg-red-50"
            placeholder="search"
            type="text"
          />
          <Link
            href={`/search/${input_array}`}
            className="bg-emerald-300 text-white px-3 py-2 rounded"
            type="submit"
          >
            Search
          </Link>
        </form>
      </div>
    </div>
  );
};

export default NavBarComp;
