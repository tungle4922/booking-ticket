import React from "react";
import { Carousel } from "antd";
import MovieCard from "../../components/MovieCard";
import { movieService } from "@/core/apis/movie.service";
import { IGetAllMovieRes, TypeMovie } from "@/models/movie";

export default async function Home() {
  const listMovie: IGetAllMovieRes[] = await movieService.getAllMovies();
  console.log(listMovie);
  return (
    <main>
      <Carousel autoplay autoplaySpeed={3000}>
        <div>
          <img
            className="w-full"
            src="https://cdn-test.eztek.net/Eztek/Images/de8d76e436864e92a1230171b76d7f51_638486860569905056_ORIGIN.webp"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full"
            src="https://cdn-test.eztek.net/Eztek/Images/bf503cfa01aa4c658f14e7e0e466fe33_638486858837685842_ORIGIN.webp"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full"
            src="https://cdn-test.eztek.net/Eztek/Images/18d1440da2634f27bac6025b259575ad_638486859504206679_ORIGIN.webp"
            alt=""
          />
        </div>
      </Carousel>
      <div className="px-[160px] py-[50px]">
        <div>
          <p className="text-center font-bold my-6 text-[20px]">
            Phim đang chiếu
          </p>
          <div className="grid grid-cols-5 gap-7">
            {listMovie?.map((item: any, index) => {
              return (
                <MovieCard key={index} data={item} type={TypeMovie.showing} />
              );
            })}
          </div>
        </div>
        <div>
          <p className="text-center font-bold my-6 text-[20px] mt-[100px]">
            Phim sắp chiếu
          </p>
          <div className="grid grid-cols-5 gap-7">
            {listMovie?.slice(0, 5).map((item: any, index) => {
              return (
                <MovieCard
                  key={index}
                  data={item}
                  type={TypeMovie.commingSoon}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
