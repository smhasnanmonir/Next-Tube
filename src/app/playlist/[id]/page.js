/* eslint-disable @next/next/no-img-element */
"use client";

import ReuseableFetch from "@/ApiFetch/ReuseableFetch";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import VideoBox from "@/components/VideoBox/VideoBox";
import Link from "next/link";

const page = ({ params }) => {
  const { data, isLoading, isError } = ReuseableFetch(
    ` 	https://piped-api.lunar.icu/playlists/${params?.id}`
  );
  console.log(data);
  return (
    <div>
      {isLoading ? (
        <>
          <LoadingScreen></LoadingScreen>
        </>
      ) : (
        <>
          <div className="grid place-content-center">
            <img
              className="object-cover w-screen h-[350px] rounded-md"
              src={data?.thumbnailUrl}
              alt={data?.name}
              srcset=""
            />
            <Link
              className="max-w-fit flex items-center gap-3 py-[13px] pl-[10px]"
              href={`${data?.uploader}`}
            >
              <img
                className="rounded-full"
                src={data?.uploaderAvatar}
                alt=""
                srcset=""
              />
              <div>
                <h1>{data?.uploader}</h1>
              </div>
            </Link>
            <div className="pl-[10px]">
              <p>Total videos: {data?.videos}</p>
              <p>Views: {data?.views}</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 pt-[15px]">
            {data?.relatedStreams?.slice(2)?.map((video, i) => (
              <VideoBox data={video} type="playlistVideo" key={i}></VideoBox>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default page;
