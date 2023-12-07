"use client";

import ReuseableFetch from "@/ApiFetch/ReuseableFetch";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";

const page = ({ params }) => {
  const { data, isLoading } = ReuseableFetch(
    `https://vid.priv.au/api/v1/videos/${params?.id}`
  );
  console.log(data);
  return (
    <div>
      {isLoading ? (
        <>
          <LoadingScreen></LoadingScreen>
        </>
      ) : (
        <>
          <div className="grid place-items-center">
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
        </>
      )}
    </div>
  );
};

export default page;