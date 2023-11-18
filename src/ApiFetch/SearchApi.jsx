import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const SearchApi = (search_params) => {
  const url = `https://onion.tube/api/v1/search?q=${search_params}`;
  const { data, error, isLoading } = useSWR(url, fetcher);
  return { data, error, isLoading };
};

export default SearchApi;
