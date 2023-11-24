import VideoBox from "@/components/VideoBox/VideoBox";
import TrendingVideos from "../ApiFetch/TrendingVideos";

const TrendingVideosHome = async () => {
  const all_trending_data = await TrendingVideos();
  return (
    <div className="py-[2%]">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
        {all_trending_data?.slice(0, 35)?.map((data) => (
          <VideoBox key={data?.videoId} data={data}></VideoBox>
        ))}
      </div>
    </div>
  );
};

export default TrendingVideosHome;
