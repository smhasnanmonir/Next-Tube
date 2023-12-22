/* eslint-disable @next/next/no-img-element */
"use client";

import ReuseableFetch from "@/ApiFetch/ReuseableFetch";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const VideoComments = ({ video_id }) => {
  const { data, error, isLoading } = ReuseableFetch(
    `https://vid.priv.au/api/v1/comments/${video_id}`
  );
  console.log("from comments page", data);
  console.log(video_id);
  return (
    <div>
      {isLoading ? (
        <>
          <LoadingScreen></LoadingScreen>
        </>
      ) : (
        <>
          <div className="py-[7px]">
            {data?.comments?.slice(1).map((comment, i) => (
              <div className="flex items-start gap-[10px] py-[7px]" key={i}>
                <img
                  className="rounded-full"
                  src={comment?.authorThumbnails?.[0]?.url}
                  alt="Author DP"
                />
                <div className="">
                  <h1>{comment?.author}</h1>
                  <h1>{comment?.content}</h1>
                  <h1>Replied: {comment?.publishedText}</h1>
                  <h1 className="font-semibold">{comment?.likeCount} Likes</h1>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default VideoComments;
