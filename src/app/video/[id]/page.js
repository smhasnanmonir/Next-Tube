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

const VideoPage = ({ params }) => {
  const { data, isLoading } = VideoDetails(params?.id);
  return (
    <div className=" py-[2%] md:px-0">
      {isLoading ? (
        <>
          <div className="grid place-items-center">
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
        <div className="md:grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <Player autoPlay poster={data?.videoThumbnails?.[0]} startTime={0}>
              <ControlBar>
                <PlaybackRateMenuButton rates={[2, 1.75, 1.5, 1, 0.5]} />
              </ControlBar>
              <source src={data?.formatStreams?.[2]?.url} />
            </Player>
            {/* <video controls autoPlay>
              <source
                src={data?.formatStreams?.[2]?.url}
                type="video/mp4"
              ></source>
            </video> */}
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
