import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const SearchApi = (search_params) => {
  const url = `https://pipedapi.kavin.rocks/search?q=${search_params}&filter=all`;
  const { data, error, isLoading } = useSWR(url, fetcher);
  return { data, error, isLoading };
};

export default SearchApi;
