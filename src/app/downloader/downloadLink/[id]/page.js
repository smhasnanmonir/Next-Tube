/* eslint-disable @next/next/no-img-element */
"use client";

import ReuseableFetch from "@/ApiFetch/ReuseableFetch";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";

const page = ({ params }) => {
  const { data, isLoading, error } = ReuseableFetch(
    `https://invidious.slipfox.xyz/api/v1/videos/${params?.id}`
  );
  return (
    <div>
      {isLoading ? (
        <>
          <LoadingScreen></LoadingScreen>
        </>
      ) : (
        <>
          {data?.error ? (
            <>
              <div className="grid place-items-center">
                <h1 className="text-red-600">
                  Seems like you have not provided the correct link.
                </h1>
              </div>
            </>
          ) : (
            <>
              <div className="grid place-items-center">
                <h1 className="font-semibold mt-[10px]">{data?.title}</h1>
                <div className="flex md:flex-row flex-col  gap-[10px] py-[5px]">
                  <a
                    className="text-center px-2 py-2 bg-red-500 rounded-md text-white hover:bg-red-600"
                    href={
                      data?.formatStreams?.[2]?.url
                        ? data?.formatStreams?.[2]?.url
                        : data?.formatStreams?.[1]?.url
                    }
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
        </>
      )}
    </div>
  );
};

export default page;
