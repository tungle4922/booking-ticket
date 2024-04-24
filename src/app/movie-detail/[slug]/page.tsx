import { movieService } from "@/core/apis/movie.service";
import { IGetAllMovieRes } from "@/models/movie";
import { Button } from "antd";
import Link from "next/link";

interface IParams {
  params: {
    slug: string;
    searchParams: any;
  };
}

export default async function MovieDetail(params: IParams) {
  const movieDetail: IGetAllMovieRes = await movieService.getMovieById(
    params?.params?.slug
  );
  console.log(movieDetail);

  return (
    <main className="py-12 px-32">
      <p className="text-white mb-10 text-xl">
        <span>
          <Link href={"/"}>Trang chủ</Link>
        </span>
        <span className="mx-3">/</span>
        <span>{movieDetail?.title}</span>
      </p>
      <div className="flex gap-20">
        <div className="w-1/3">
          <img
            className="rounded-[12px] w-full"
            src={movieDetail?.image}
            alt=""
          />
        </div>
        <div className="w-2/3">
          <p className="font-bold text-primary3 text-[30px]">
            {movieDetail?.title}
          </p>
          <p className="my-4 text-[18px]">{movieDetail?.plot}</p>
          <p className="my-4 text-[18px]">
            <span className="text-[#ccc]">Phân loại: </span> Phim phổ biến với
            mọi độ tuổi
          </p>
          <p className="my-4 text-[18px]">
            <span className="text-[#ccc]">Định dạng: </span> <span>2D</span>
          </p>
          <p className="my-4 text-[18px]">
            <span className="text-[#ccc]">Đạo diễn: </span>{" "}
            {movieDetail?.director}
          </p>
          <p className="my-4 text-[18px]">
            <span className="text-[#ccc]">
              Diễn viên:{" "}
              {movieDetail?.cast &&
                movieDetail.cast.map((item, index) => {
                  return (
                    <span className="text-[#fff]" key={index}>
                      {index > 0 && ", "} {item}
                    </span>
                  );
                })}
            </span>
          </p>
          <p className="my-4 text-[18px]">
            <span className="text-[#ccc]">
              Thể loại:
              {movieDetail?.genre &&
                movieDetail.genre.map((item, index) => {
                  return (
                    <span className="text-[#fff]" key={index}>
                      {index > 0 && ", "} {item}
                    </span>
                  );
                })}
            </span>
          </p>
          <p className="my-4 text-[18px]">
            <span className="text-[#ccc]">Khởi chiếu: </span>{" "}
            {movieDetail?.releaseDate}
          </p>
          <p className="my-4 text-[18px]">
            <span className="text-[#ccc]">Thời lượng: </span>{" "}
            {movieDetail?.duration} phút
          </p>
          <p className="my-4 text-[18px]">
            <span className="text-[#ccc]">Ngôn ngữ: </span> Phụ đề/Lồng tiếng
          </p>
          <div className="mt-8 flex gap-6">
            <Button className="!border-[2px] !border-primary3 !bg-primary3 !text-white !pb-9 !text-[18px] !px-12">
              <Link href={"/booking/select-date"}>Mua vé ngay</Link>
            </Button>
            <Button className="!border-[2px] !border-white !text-white !bg-primary1 !pb-9 !text-[18px] !px-12">
              Xem Trailer
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
