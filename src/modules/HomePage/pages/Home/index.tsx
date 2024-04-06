import React from "react";
import { Carousel } from "antd";
import MovieCard from "../../components/MovieCard";

export default function Home() {
  return (
    <main>
      <Carousel autoplay autoplaySpeed={3000}>
        <div>
          <img
            className="w-full"
            src="https://media.lottecinemavn.com/Media/WebAdmin/f0c4d329b1a544d1898558562bd6f73c.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full"
            src="https://media.lottecinemavn.com/Media/WebAdmin/ad8a6b7932ba455cbd6c5d87b02a71a9.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full"
            src="https://media.lottecinemavn.com/Media/WebAdmin/bf503cfa01aa4c658f14e7e0e466fe33.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full"
            src="https://media.lottecinemavn.com/Media/WebAdmin/18d1440da2634f27bac6025b259575ad.jpg"
            alt=""
          />
        </div>
      </Carousel>
      <div className="px-[160px] py-[50px]">
        <div>
          <p className="text-center font-bold my-6 text-[20px]">
            Phim đang chiếu
          </p>
          <div className="flex gap-7">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </div>
        <div>
          <p className="text-center font-bold my-6 text-[20px] mt-[100px]">
            Phim sắp chiếu
          </p>
          <div className="flex gap-7">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </div>
      </div>
    </main>
  );
}
