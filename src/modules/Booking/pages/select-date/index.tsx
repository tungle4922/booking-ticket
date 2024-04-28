"use client";

import { movieService } from "@/core/apis/movie.service";
import { IState } from "@/lib/Interfaces/state";
import {
  getBookingParamsSuccess,
  getMovieDetailSuccess,
} from "@/lib/slices/movies.slice";
import { IBookingMainParams } from "@/models/booking";
import { IGetAllMovieRes } from "@/models/movie";
import { Calendar } from "antd";
import type { Dayjs } from "dayjs";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface ITimeBox {
  time: string;
  type1: string;
  type2: string;
}

export default function SelectDate() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const movieId = searchParams.get("movieId");
  const authInfo = useSelector((state: IState) => state?.auth?.authInfo);
  const movieDetail = useSelector(
    (state: IState) => state?.movies?.movieDetail
  );
  const today = new Date();
  const [dateSelected, setDateSelected] = useState<string>(today.toISOString());
  const onSelect = (date: Dayjs, info: any) => {
    setDateSelected(date.format("YYYY-MM-DD"));
  };

  const timeBox: ITimeBox[] = [
    {
      time: "10:05",
      type1: "Phụ đề",
      type2: "2D",
    },
    {
      time: "11:05",
      type1: "Phụ đề",
      type2: "2D",
    },
    {
      time: "14:05",
      type1: "Phụ đề",
      type2: "2D",
    },
    {
      time: "15:05",
      type1: "Phụ đề",
      type2: "2D",
    },
    {
      time: "17:05",
      type1: "Phụ đề",
      type2: "2D",
    },
    {
      time: "10:05",
      type1: "Phụ đề",
      type2: "2D",
    },
    {
      time: "10:05",
      type1: "Phụ đề",
      type2: "2D",
    },
  ];

  useEffect(() => {
    getMovieDetail();
  }, [movieId]);

  const getMovieDetail = async () => {
    if (movieId) {
      const res = await movieService.getMovieById(movieId);
      dispatch(getMovieDetailSuccess(res));
    }
  };

  const selectTime = (time: string, theater: string) => {
    let fullDate = "";
    if (!dateSelected.includes("T")) {
      fullDate = dateSelected + "T" + time + ":00.000Z";
    } else {
      const splitDate = dateSelected.split("T");
      fullDate = splitDate[0] + "T" + time + ":00.000Z";
    }
    const bookingParam: IBookingMainParams = {
      time: fullDate,
      movieId: movieDetail._id!,
      movieName: movieDetail.title!,
      movieImage: movieDetail.image!,
      userId: authInfo.userId,
      seatArr: [],
      ticketType: "Standard",
      price: 0,
      cinemaLocation: theater,
      status: "Confirmed",
      listAllSeat: []
    };
    dispatch(getBookingParamsSuccess(bookingParam));
    router.push("/booking/select-seat");
  };

  return (
    <section className="py-12 px-32">
      <p className="text-center font-bold text-[25px] mb-12">
        Bước 1: Chọn thời gian và địa điểm
      </p>
      <div className="flex gap-12">
        <div className="w-1/3 border-[1px] border-[#a49999] rounded-[12px] h-fit">
          <Calendar className="!m-4" fullscreen={false} onSelect={onSelect} />
        </div>
        <div className="w-2/3 border-[1px] border-[#a49999] rounded-[12px]">
          {movieDetail?.theaters?.map((theaterName, index) => {
            return (
              <div
                key={index}
                className="!m-4 border-[1px] border-[#a49999] rounded-[12px]"
              >
                <div className="p-5">
                  <div className="flex items-center mb-3">
                    <img
                      src="https://www.bhdstar.vn/wp-content/uploads/2023/08/logo.png"
                      alt=""
                      className="w-6 h-6 mr-3"
                    />
                    <span>{theaterName}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-5">
                    {timeBox.map((item, index) => {
                      return (
                        <div key={index}>
                          <div
                            className="cursor-pointer"
                            onClick={() => selectTime(item.time, theaterName)}
                          >
                            <div className="rounded-[4px] mb-2 bg-[#817c7c] p-3 hover:bg-primary3 cursor-pointer">
                              <p className="text-center">{item.time}</p>
                            </div>
                            <div className="flex justify-center items-center">
                              <div className="text-[12px] py-1 px-2 bg-primary1 border-[1px] border-yellow-400 rounded-[4px] mr-2">
                                {item.type1}
                              </div>
                              <div className="text-[12px] py-1 px-2 bg-primary3 border-[1px] border-primary3 rounded-[4px]">
                                {item.type2}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
