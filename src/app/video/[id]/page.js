/* eslint-disable @next/next/no-img-element */
"use client";
import VideoDetails from "@/ApiFetch/VideoDetails";
import VideoBox from "@/components/VideoBox/VideoBox";
import Link from "next/link";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import VideoComments from "@/components/VideoComments/VideoComments";
import { useEffect, useState } from "react";
// import { tree } from "next/dist/build/templates/app-page";
import { Replay } from "vimond-replay";
import HlsjsVideoStreamer from "vimond-replay/video-streamer/hlsjs";
import "vimond-replay/index.css";

const VideoPage = ({ params }) => {
  const { data, isLoading } = VideoDetails(params?.id);
  console.log(data);
  const videoWithAudio = data?.videoStreams?.filter(
    (video_data) => video_data.videoOnly != true
  );
  console.log(videoWithAudio);
  const [hideComment, setHideComment] = useState(
    localStorage?.getItem("hideComment") === "true"
  );
  useEffect(() => {
    localStorage?.setItem("hideComment", hideComment);
  }, [hideComment]);
  const toggleHideComment = () => {
    setHideComment(!hideComment);
  };
  const playerStyle = {
    width: "100%",
    // Add more styles as needed
  };
  return (
    <div className=" py-[2%] md:px-0">
      {isLoading ? (
        <>
          <LoadingScreen></LoadingScreen>
        </>
      ) : (
        <div className="md:grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <Replay
              source={data?.hls}
              initialPlaybackProps={{ isPaused: false }}
            >
              <HlsjsVideoStreamer />
            </Replay>
            {/* <ReactPlayer url={data?.hls}></ReactPlayer> */}
            <Link
              className="block max-w-fit hover:text-blue-500 hover:font-semibold transition-all ease-linear duration-200"
              href={`${data?.uploaderUrl}`}
            >
              <div className="flex gap-3 items-center pt-[10px]">
                <img
                  className="rounded-full w-[45px]"
                  src={data?.uploaderAvatar}
                  alt="Channel DP"
                />
                <h1 className="font-semibold">{data?.uploader}</h1>
              </div>
            </Link>

            <div className="flex gap-3 py-[5px]">
              <h1>
                {" "}
                <span className="font-semibold">Published:</span>{" "}
                {data?.uploadDate?.slice(0, 10)}
              </h1>
              <h1>
                {" "}
                <span className="font-semibold">Likes:</span> {data?.likes}
              </h1>
            </div>

            <div className="">
              <h1 className="font-semibold text-2xl pb-[4px]">{data?.title}</h1>
              <div className="flex md:flex-row flex-col  gap-[10px] py-[5px]">
                <a
                  className="text-center px-2 py-2 bg-red-500 rounded-md text-white hover:bg-red-600"
                  href={videoWithAudio?.[1]?.url}
                  download={`${data?.title}.mp4`}
                  target="_blank"
                >
                  Download Video
                </a>
                <a
                  className="text-center px-2 py-2 bg-green-500 rounded-md text-white hover:bg-green-600"
                  href={data?.audioStreams?.[1]?.url}
                  type="audio"
                  download={`${data?.title}.mp3`}
                  target="_blank"
                >
                  Download Audio
                </a>
                <a
                  className="text-center px-2 py-2 bg-orange-500 rounded-md text-white hover:bg-orange-600"
                  href={`https://youtu.be/${params?.id}`}
                  target="_blank"
                >
                  Open in Youtube
                </a>
              </div>
            </div>
            <div className="py-[6px] flex gap-3 items-center">
              <h1 className="font-semibold">Comments</h1>
              <button
                className="px-[7px] py-[5px] bg-yellow-300 rounded-md"
                onClick={() => toggleHideComment()}
              >
                {hideComment ? <>Show Comments</> : <>Hide Comments</>}
              </button>
            </div>
            <div className={`${hideComment ? "hidden" : "block"} md:w-[90%]`}>
              <VideoComments video_id={params?.id}></VideoComments>
            </div>
          </div>
          <div className="grid gap-4 md:py-0 py-[5%]">
            <h1 className="font-semibold md:text-center">Recommended Videos</h1>
            {data?.relatedStreams?.slice(2)?.map((recVid) => (
              <VideoBox key={recVid?.videoId} data={recVid}></VideoBox>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPage;
