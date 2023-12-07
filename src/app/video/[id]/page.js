/* eslint-disable @next/next/no-img-element */
"use client";
import "video-react/dist/video-react.css"; // import css
import {
  Player,
  ControlBar,
  PlaybackRateMenuButton,
  ReplayControl,
  ForwardControl,
} from "video-react";
import VideoDetails from "@/ApiFetch/VideoDetails";
import { TailSpin } from "react-loader-spinner";
import VideoBox from "@/components/VideoBox/VideoBox";
import Link from "next/link";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";

const VideoPage = ({ params }) => {
  const { data, isLoading } = VideoDetails(params?.id);
  console.log(data?.authorThumbnails?.[0]);
  return (
    <div className=" py-[2%] md:px-0">
      {isLoading ? (
        <>
          <LoadingScreen></LoadingScreen>
        </>
      ) : (
        <div className="md:grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <Player autoPlay poster={data?.videoThumbnails?.[0]} startTime={0}>
              <ControlBar>
                <PlaybackRateMenuButton rates={[2, 1.75, 1.5, 1, 0.5]} />
              </ControlBar>
              <source
                src={
                  data?.formatStreams?.[2]?.url
                    ? data?.formatStreams?.[2]?.url
                    : data?.formatStreams?.[1]?.url
                }
              />
            </Player>
            <Link
              className="block hover:text-blue-500 hover:font-semibold transition-all ease-linear duration-200"
              href={`/channel/${data?.authorId}`}
            >
              <div className="flex gap-3 items-center pt-[10px]">
                <img
                  className="rounded-full w-[45px]"
                  src={data?.authorThumbnails?.[4]?.url}
                  alt="Channel DP"
                />
                <h1>{data?.author}</h1>
              </div>
            </Link>
            <div className="mt-[10px]">
              <h1 className="font-semibold mt-[10px]">{data?.title}</h1>
              <div className="flex md:flex-row flex-col  gap-[10px] py-[5px]">
                <a
                  className="text-center px-2 py-2 bg-red-500 rounded-md text-white hover:bg-red-600"
                  href={data?.formatStreams?.[2]?.url}
                  download={`${data?.title}.mp4`}
                  target="_blank"
                >
                  Download Video
                </a>
                <a
                  className="text-center px-2 py-2 bg-green-500 rounded-md text-white hover:bg-green-600"
                  href={data?.adaptiveFormats?.[4]?.url}
                  type="audio"
                  download={`${data?.title}.mp3`}
                  target="_blank"
                >
                  Download Audio
                </a>
              </div>
            </div>
          </div>
          <div className="grid gap-4 md:py-0 py-[5%]">
            <h1 className="font-semibold md:text-center">Recommended Videos</h1>
            {data?.recommendedVideos?.map((recVid) => (
              <VideoBox key={recVid?.videoId} data={recVid}></VideoBox>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPage;
