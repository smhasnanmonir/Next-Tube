import Image from "next/image";
import Link from "next/link";

const TrendingVideoBox = ({ data }) => {
  return (
    <Link
      href={`/video/${data?.videoId}`}
      className="block shadow-sm shadow-red-200 group hover:shadow-red-300 hover:shadow-md transition-all ease-linear duration-300"
    >
      <div className="px-[10px] pb-[15px]">
        <div className="overflow-hidden">
          <Image
            className="object-cover w-full h-full group-hover:scale-110 transition-all ease-linear duration-300"
            width={640}
            height={360}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABJAEkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwBQKcKAKeBXUyhKQ0/FIRU3HYiNMqRhTcUXGoirUyCo1FToKzkzZIcBTsU4LS7ay5jQq4pwFLinAV0yZxxG4prCpDTGrFyOiMSJqbinNTRS5i+UkQVYQVClWYxWUpAkPVadtpVFOxWPMXYp4ooozXoyPOgxDUbGnMahdq5ZHfAaxoBqMtSqai5o0WYzVlDVNDVlGqJMgsqadmoQ1O3VgxlbNITSZpjGvZkjyactRHaq7vT5GqrI9c8onp0mKWpytVbfzUitWTiayZcRqnV6pK1Sh6hoyuXA9L5lVPMpfMrPkKuSk0xjTzUb16zPFp7leQ1TlarcveqUtZs9WiMDc1MhquvWp0rKSN5k6mnbqYKdWZiO3Ub6ZRSsUf/Z"
            src={data?.videoThumbnails?.[0].url}
            alt="img"
          ></Image>
        </div>
        <div className="space-y-[3px] pt-[3px]">
          <h1>{data?.title?.slice(0, 40)}..</h1>
          <h1>{data?.viewCount} Views</h1>
        </div>
      </div>
    </Link>
  );
};

export default TrendingVideoBox;
