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

const VideoPage = ({ params }) => {
  console.log(params?.id);
  const { data, isLoading } = VideoDetails(params?.id);
  console.log(data?.formatStreams[2]?.url);
  console.log(isLoading);
  const downloadFile = (url) => {
    window.location.href = url;
  };
  return (
    <div className="md:w-3/4 mx-auto py-[2%] md:px-0 grid justify-center">
      {isLoading ? (
        <>
          <div>
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
        <>
          <div className="aspect-video md:w-[950px] md:block hidden">
            <Player>
              <ControlBar>
                <PlaybackRateMenuButton rates={[2, 1.75, 1.5, 1, 0.5]} />
                <ReplayControl seconds={10} order={2.1} />
                <ForwardControl seconds={10} order={3.1} />
              </ControlBar>
              <source src={data?.formatStreams?.[2]?.url} />
            </Player>
          </div>

          <div className="aspect-video md:hidden">
            <Player>
              <ControlBar>
                <PlaybackRateMenuButton rates={[2, 1.75, 1.5, 1, 0.5]} />
              </ControlBar>
              <source src={data?.formatStreams?.[2]?.url} />
            </Player>
          </div>
          <h1 className="font-semibold mt-[10px]">{data?.title}</h1>
          <div className="flex gap-3 md:flex-row flex-col mt-[10px]">
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
        </>
      )}
    </div>
  );
};

export default VideoPage;
