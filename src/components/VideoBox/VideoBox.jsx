/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PlaylistComponent from "../PlaylistComponent/PlaylistComponent";

const VideoBox = ({ data, type }) => {
  console.log(data?.url);
  return type == "channel" ? (
    <>
      <Link
        href={`/channel/${data?.authorId}`}
        className="block shadow-sm shadow-red-200 group hover:shadow-red-300 hover:shadow-md transition-all ease-linear duration-300"
      >
        <div className="px-[10px] pb-[15px]">
          <div className="overflow-hidden">
            <img
              className="w-full max-h-[200px] object-cover transition-all hover:scale-105 duration-200 ease-linear"
              src={data?.authorThumbnails?.[5].url}
              alt={data?.author?.slice(0, 40)}
            />
          </div>
          <div className="space-y-[3px] pt-[3px]">
            <h1>{data?.author?.slice(0, 40)}</h1>
            <h1>{data?.subCount} Subscribers</h1>
            <h1 className="font-semibold hover:text-blue-400">
              {data?.author}
            </h1>
          </div>
        </div>
      </Link>
    </>
  ) : type == "playlist" ? (
    <>
      <Link
        href={`/playlist/${data?.url?.slice(15)}`}
        className="block shadow-sm shadow-red-200 group hover:shadow-red-300 hover:shadow-md transition-all ease-linear duration-300"
      >
        <div className="px-[10px] pb-[15px]">
          <div className="overflow-hidden">
            <img
              className="w-full max-h-[200px] object-cover transition-all hover:scale-105 duration-200 ease-linear"
              src={data?.thumbnail}
              alt={data?.name?.slice(0, 40)}
            />
          </div>
          <div className="space-y-[3px] pt-[3px]">
            <h1>{data?.name?.slice(0, 40)}..</h1>
            <h1>{data?.videos} Videos</h1>
            <h1 className="font-semibold hover:text-blue-400">
              {data?.author}
            </h1>
          </div>
        </div>
      </Link>
    </>
  ) : (
    <>
      <Link
        href={`/video/${data?.url.slice(9)}`}
        className="block shadow-sm shadow-red-200 group hover:shadow-red-300 hover:shadow-md transition-all ease-linear duration-300"
      >
        <div className="px-[10px] pb-[15px]">
          <div className="overflow-hidden">
            <img
              className="w-full max-h-[200px] object-cover transition-all hover:scale-105 duration-200 ease-linear"
              src={data?.thumbnail}
              alt={data?.title?.slice(0, 40)}
            />
          </div>
          <div className="space-y-[3px] pt-[3px]">
            <h1>{data?.title?.slice(0, 40)}..</h1>
            <h1 className={type == "playlistVideo" ? "hidden" : "block"}>
              {data?.views} Views
            </h1>
            <h1 className="font-semibold hover:text-blue-400">
              {data?.author}
            </h1>
          </div>
        </div>
      </Link>
    </>
  );
};

export default VideoBox;
