"use client";

import SearchApi from "@/ApiFetch/SearchApi";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import VideoBox from "@/components/VideoBox/VideoBox";
import Link from "next/link";
const SearchPage = ({ params }) => {
  const { data, isLoading } = SearchApi(params?.text);
  console.log(data);
  return (
    <>
      {isLoading ? (
        <>
          <LoadingScreen></LoadingScreen>
        </>
      ) : (
        <>
          <div className="py-[25px] flex gap-3">
            {/* <Link
              className="bg-red-400 text-white inline-block py-[13px] px-[15px] text-[16px] rounded-md font-semibold"
              href={`/search/${params?.id}`}
            >
              Video
            </Link>

            <Link
              className="bg-red-400 text-white inline-block py-[13px] px-[15px] text-[16px] rounded-md font-semibold"
              href={`/search/${params?.id} lala`}
            >
              Channel
            </Link> */}
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            {data?.items?.map((search_data, i) => (
              <VideoBox
                key={i}
                type={search_data?.type}
                data={search_data}
              ></VideoBox>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default SearchPage;
