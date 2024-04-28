import { IGetAllMovieRes, TypeMovie } from "@/models/movie";
import { Button } from "antd";
import Link from "next/link";

interface Props {
  data: IGetAllMovieRes;
  type: number;
}

export default function MovieCard(props: Props) {
  const { data, type } = props;
  return (
    <div>
      <Link href={`/movie-detail/${data._id}`}>
        <div>
          <img
            className="w-full rounded-[6px] mb-3 h-[350px] object-cover"
            src={data?.image}
            alt=""
          />
          <div className="flex gap-2 my-2 items-center">
            <div className="bg-red-500 p-1 rounded-[6px] font-semibold text-[12px]">
              T18
            </div>
            <div className="border-[1px] border-yellow-600 p-1 rounded-[6px] font-semibold text-[12px] px-2">
              PHỤ ĐỀ
            </div>
            <div className="bg-primary3 p-1 rounded-[6px] font-semibold text-[12px] px-2">
              2D
            </div>
          </div>
          <p className="uppercase font-bold mt-4 mb-3 line-clamp-1">
            {data?.title}
          </p>
          <p className="mb-4 text-[14px]">
            Thể loại phim:{" "}
            <span className="font-medium">{data?.genre && data.genre[0]}</span>
          </p>
        </div>
      </Link>
      <div>
        {type === TypeMovie.showing && (
          <Button type="primary" className="!bg-primary3">
            <Link href={`/booking/select-date?movieId=${data?._id}`}>Mua vé ngay</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
