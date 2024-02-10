/* eslint-disable @next/next/no-img-element */
"use client";

import ReuseableFetch from "@/ApiFetch/ReuseableFetch";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import VideoBox from "@/components/VideoBox/VideoBox";
import Link from "next/link";

const page = ({ params }) => {
  const { data, isLoading, isError } = ReuseableFetch(
    `https://invidious.jing.rocks/api/v1/playlists/${params?.id}`
  );
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
              src={data?.playlistThumbnail}
              alt={data?.title}
              srcset=""
            />
            <Link
              className="max-w-fit flex items-center gap-3 py-[13px] pl-[10px]"
              href={`${data?.authorUrl}`}
            >
              <img
                className="rounded-full"
                src={data?.authorThumbnails[4]?.url}
                alt=""
                srcset=""
              />
              <div>
                <h1>{data?.author}</h1>
              </div>
            </Link>
            <div className="pl-[10px]">
              <p>Total videos: {data?.videoCount}</p>
              <p>Views: {data?.viewCount}</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 pt-[15px]">
            {data?.videos?.map((video, i) => (
              <VideoBox data={video} type="playlistVideo" key={i}></VideoBox>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default page;
