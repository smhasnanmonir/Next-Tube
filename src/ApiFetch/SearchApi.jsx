import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const SearchApi = (search_params) => {
  const url = `https://vid.priv.au/api/v1/search?q=${search_params}`;
  const { data, error, isLoading } = useSWR(url, fetcher);
  return { data, error, isLoading };
};

export default SearchApi;
