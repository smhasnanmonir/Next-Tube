/* eslint-disable @next/next/no-img-element */
"use client";

// import ChannelDetails from "@/ApiFetch/ChannelDetails";
import ReuseableFetch from "@/ApiFetch/ReuseableFetch";
// import VideoDetails from "@/ApiFetch/VideoDetails";

const ChannelPage = ({ params }) => {
  const { data, isLoading } = ReuseableFetch(
    `https://vid.priv.au/api/v1/channels/${params?.id}`
  );
  console.log(data);
  // const {data: data1, isLoading: isLoading1 } = VideoDetails()
  return (
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
        <h1 className="font-bold">Channel Videos</h1>
      </div>
    </div>
  );
};

export default ChannelPage;
