const TrendingVideos = async () => {
  const url = "https://invidious.slipfox.xyz/api/v1/trending";
  const res = await fetch(url, { next: { revalidate: 3600 } });
  return res.json();
};

export default TrendingVideos;
