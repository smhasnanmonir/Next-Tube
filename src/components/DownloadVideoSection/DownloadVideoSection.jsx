"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const DownloadVideoSection = () => {
  const [inputValue11, setInputValue11] = useState("");
  const [inputValue12, setInputValue12] = useState("");
  const link_44 =
    "https://www.youtube.com/watch?v=TUVcZfQe-Kw&list=RDONdviW7a6NA&index=4&pp=8AUB";
  console.log(link_44.indexOf("v"));
  useEffect(() => {
    if (inputValue11?.charAt(30) == "v") {
      setInputValue12(inputValue11?.slice(32));
    } else if (inputValue11?.charAt(15) == "e") {
      let indexof_1 = inputValue11.indexOf("?");
      setInputValue12(inputValue11?.slice(17, indexof_1));
    } else if (inputValue11?.indexOf("v") == 28) {
      let indexof_1 = inputValue11.indexOf("v");
      setInputValue12(inputValue11?.slice(indexof_1 + 2));
    } else if (inputValue11?.charAt(30) == "v" && inputValue11?.length > 60) {
      let indexof_1 = inputValue11.indexOf("v");
      let indexof_2 = inputValue11.indexOf("&");
      setInputValue12(inputValue11?.slice(indexof_1 + 2, indexof_2));
      console.log(inputValue12);
    }
  }, [inputValue11, inputValue12]);
  return (
    <div className="grid place-items-center md:py-[15px] py-[15px] gap-3">
      <input
        onChange={(e) => setInputValue11(e.target.value)}
        placeholder="Paste youtube link"
        className="py-[13px] px-[10px] inline-block bg-red-100 rounded-md md:w-[45%] w-full"
        type="text"
      />
      <Link
        href={`/downloader/downloadLink/${inputValue12}`}
        className="px-[10px] py-[13px] bg-green-200 font-semibold rounded-md"
      >
        Generate download links
      </Link>
    </div>
  );
};

export default DownloadVideoSection;
