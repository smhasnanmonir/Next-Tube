import TrendingVideosHome from "@/TrendingHome/TrendingVideosHome";
import Link from "next/link";
export default function Home() {
  return (
    <main className="grid place-items-center">
      <div>
        <Link
          href={"/downloader"}
          className="inline-block py-[12px] px-[10px] bg-orange-300 rounded-md "
        >
          Go to Download Video page
        </Link>
      </div>
      <TrendingVideosHome></TrendingVideosHome>
    </main>
  );
}
