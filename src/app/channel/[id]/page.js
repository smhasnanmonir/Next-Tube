/* eslint-disable @next/next/no-img-element */
"use client";

import ReuseableFetch from "@/ApiFetch/ReuseableFetch";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import VideoBox from "@/components/VideoBox/VideoBox";

const ChannelPage = ({ params }) => {
  const { data, isLoading } = ReuseableFetch(
    `https://vid.priv.au/api/v1/channels/${params?.id}`
  );
  return (
    <>
      {isLoading ? (
        <>
          <LoadingScreen></LoadingScreen>
        </>
      ) : (
        <>
          <div className="">
            <img
              className="brightness-50 w-full h-[250px] object-cover"
              src={data?.authorBanners?.[0].url}
              alt=""
              srcset=""
            />
            <div className="flex gap-4 items-center justify-center py-[13px]">
              <img
                className="w-[95px] rounded-full"
                src={data?.authorThumbnails?.[5].url}
                alt="Channel DP"
              />
              <div className="">
                <h1 className="font-semibold text-xl">{data?.author}</h1>
                <h1 className="font-medium">{data?.subCount} Subs</h1>
              </div>
            </div>
            <div>
              <h1 className="font-bold pb-[25px]">Channel Videos</h1>
              <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
                {data?.latestVideos?.map((vid) => (
                  <VideoBox key={vid?.videoId} data={vid}></VideoBox>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ChannelPage;
