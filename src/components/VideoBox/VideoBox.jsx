/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const VideoBox = ({ data }) => {
  return (
    <Link
      href={`/video/${data?.videoId}`}
      className="block shadow-sm shadow-red-200 group hover:shadow-red-300 hover:shadow-md transition-all ease-linear duration-300"
    >
      <div className="px-[10px] pb-[15px]">
        <div className="overflow-hidden">
          <img
            className="w-full max-h-[200px] object-cover transition-all hover:scale-105 duration-200 ease-linear"
            src={
              data?.videoThumbnails?.[0].url
                ? data?.videoThumbnails?.[0].url
                : data?.videoThumbnails?.[3].url
            }
            alt={data?.title?.slice(0, 40)}
          />
        </div>
        <div className="space-y-[3px] pt-[3px]">
          <h1>{data?.title?.slice(0, 40)}..</h1>
          <h1>{data?.viewCount} Views</h1>
          <h1 className="font-semibold hover:text-blue-400">{data?.author}</h1>
        </div>
      </div>
    </Link>
  );
};

export default VideoBox;
