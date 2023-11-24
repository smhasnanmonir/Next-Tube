"use client";

import SearchApi from "@/ApiFetch/SearchApi";
import VideoBox from "@/components/VideoBox/VideoBox";
import React from "react";
import { TailSpin } from "react-loader-spinner";

const SearchPage = ({ params }) => {
  const { data, isLoading } = SearchApi(params?.text);

  return (
    <>
      {isLoading ? (
        <>
          <div className="grid place-content-center">
            <TailSpin
              height="80"
              width="80"
              color="#EE4B2B"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        </>
      ) : (
        <>
          <div className="grid md:grid-cols-3 gap-3">
            {data?.map((video) => (
              <VideoBox key={video?.videoId} data={video}></VideoBox>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default SearchPage;
