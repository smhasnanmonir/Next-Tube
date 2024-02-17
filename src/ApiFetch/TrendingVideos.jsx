const TrendingVideos = async () => {
  const url = "https://pipedapi.kavin.rocks/trending?region=US";
  const res = await fetch(url, { next: { revalidate: 3600 } });
  return res.json();
};

export default TrendingVideos;
