/* eslint-disable @next/next/no-img-element */
"use client";

import ReuseableFetch from "@/ApiFetch/ReuseableFetch";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import VideoBox from "@/components/VideoBox/VideoBox";

const ChannelPage = ({ params }) => {
  const { data, isLoading } = ReuseableFetch(
    `https://pipedapi.kavin.rocks/channel/${params?.id}`
  );
  console.log(data);
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
              src={data?.bannerUrl}
              alt=""
              srcset=""
            />
            <div className="flex gap-4 items-center justify-center py-[13px]">
              <img
                className="w-[95px] rounded-full"
                src={data?.avatarUrl}
                alt="Channel DP"
              />
              <div className="">
                <h1 className="font-semibold text-xl">{data?.author}</h1>
                <h1 className="font-medium">{data?.subscriberCount} Subs</h1>
              </div>
            </div>
            <div>
              <h1 className="font-bold pb-[25px]">Channel Videos</h1>
              <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
                {data?.relatedStreams?.slice(2)?.map((vid) => (
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
