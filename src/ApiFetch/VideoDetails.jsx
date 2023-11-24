import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const VideoDetails = (video_url) => {
  const url = `https://vid.priv.au/api/v1/videos/${video_url}`;
  const { data, error, isLoading } = useSWR(url, fetcher);
  return { data, error, isLoading };
};

export default VideoDetails;
