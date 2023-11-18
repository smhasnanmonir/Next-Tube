const TrendingVideos = async () => {
  const url = "https://onion.tube/api/v1/trending";
  const res = await fetch(url, { next: { revalidate: 3600 } });
  return res.json();
};

export default TrendingVideos;
