import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const VideoDetails = (video_url) => {
  const url = `https://pipedapi.kavin.rocks/streams/${video_url}`;
  const { data, error, isLoading } = useSWR(url, fetcher);
  return { data, error, isLoading };
};

export default VideoDetails;
