import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const ChannelDetails = (video_url) => {
  const { data, error, isLoading } = useSWR(
    " 	https://piped-api.lunar.icu/api/v1/channels/${video_url}/videos",
    fetcher
  );
  return { data, error, isLoading };
};

export default ChannelDetails;
