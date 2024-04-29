"use client";

import { bookingService } from "@/core/apis/booking.service";
import { IState } from "@/lib/Interfaces/state";
import { getBookingParamsSuccess } from "@/lib/slices/movies.slice";
import { IBookingReq, IUpdateSeatReq } from "@/models/booking";
import { Button, message } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";

export default function CheckOutBox() {
  const router = useRouter();
  const dispatch = useDispatch();
  const authInfo = useSelector((state: IState) => state?.auth?.authInfo);
  const pathname = usePathname();
  const bookingParams = useSelector(
    (state: IState) => state?.movies?.bookingParams
  );
  const movieDetail = useSelector(
    (state: IState) => state?.movies?.movieDetail
  );
  const [path, setPath] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!authInfo) {
      router.push("/login");
    }
  }, [authInfo]);

  useEffect(() => {
    if (!bookingParams) {
      router.push("/");
    }
  }, [bookingParams]);

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  const getDate: (ISODate: string) => string = (ISODate) => {
    const date = ISODate?.split("T");
    if (!date) return "";
    return date[0];
  };

  const getTime: (ISODate: string) => string = (ISODate) => {
    const time = ISODate?.split("T")[1];
    const hour = time?.split(":")[0];
    const minute = time?.split(":")[1];
    const result = hour + ":" + minute;
    return result;
  };

  const checkOut = async () => {
    setIsLoading(true);
    const res1 = await updateSeat();
    if (res1 === 0) {
      message.error("Có lỗi xảy ra");
      setIsLoading(false);
      return;
    }
    const res2 = await bookingTicket();
    if (res2 === 0) {
      message.error("Có lỗi xảy ra");
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    message.success("Đặt vé thành công");
    router.push("/booking/view-ticket");
  };

  const updateSeat = async () => {
    const body: IUpdateSeatReq = {
      movieId: bookingParams.movieId,
      showTime: bookingParams.time,
      bookedSeats: bookingParams.seatArr,
      theaterId: bookingParams.theaterId,
    };
    return await bookingService.updateBookedSeat(body);
  };

  const bookingTicket = async () => {
    const body: IBookingReq = {
      movieId: bookingParams.movieId,
      movieName: bookingParams.movieName,
      movieImage: bookingParams.movieImage,
      userId: authInfo.userId,
      seatNumbers: bookingParams.seatArr,
      ticketType: bookingParams.ticketType,
      price: bookingParams.price,
      bookingDate: bookingParams.time,
      cinemaLocation: bookingParams.cinemaLocation,
      voucherId: bookingParams.voucherId!,
      status: bookingParams.status,
    };
    return await bookingService.bookingTicket(body);
  };

  return (
    <section className="border-[1px] border-[#a49999] rounded-[12px] py-4 px-6 h-fit">
      <p className="font-semibold">{bookingParams?.cinemaLocation}</p>
      <p className="my-3">
        <span className="text-primary3">Screen 3</span> -{" "}
        {getDate(bookingParams?.time)} - Suất chiếu:{" "}
        {getTime(bookingParams?.time)}
      </p>
      <div className="h-[1px] bg-[#ccc] mx-[-24px] my-4"></div>
      <p className="text-lg font-bold text-primary3">
        {bookingParams?.movieName}
      </p>
      <div className="flex items-center my-3">
        <div className="text-[10px] py-1 px-2 bg-primary1 border-[1px] border-yellow-400 rounded-[4px] mr-2">
          PHỤ ĐỀ
        </div>
        <div className="text-[10px] py-1 px-2 bg-primary3 border-[1px] border-primary3 rounded-[4px]">
          2D
        </div>
      </div>
      <div className="flex items-center justify-between my-5 gap-4">
        <div className="w-2/3">
          <p>{bookingParams?.seatArr?.length} x Adult-2D-HL</p>
          {bookingParams?.seatArr?.map((seat, index) => {
            return <span key={index}>{seat} </span>;
          })}
        </div>
        <p className="w-1/3 line-clamp-1 text-right">
          {bookingParams?.price?.toLocaleString()} VND
        </p>
      </div>
      <div className="h-[1px] bg-[#ccc] mx-[-24px] my-4"></div>
      <div className="my-7 flex justify-between">
        <p>Tổng tiền</p>
        <p className="font-semibold text-lg">
          {bookingParams?.price.toLocaleString()} VND
        </p>
      </div>
      {path === "/booking/select-seat" && (
        <Button
          onClick={() => router.push("/booking/check-out")}
          className="!bg-primary3 w-full"
          type="primary"
        >
          TIẾP TỤC
        </Button>
      )}
      {path === "/booking/check-out" && (
        <Spin className="!ml-[52px]" size="small" spinning={isLoading}>
          <Button
            onClick={checkOut}
            className="!bg-primary3 w-full"
            type="primary"
          >
            THANH TOÁN
          </Button>
        </Spin>
      )}
      <p
        className="text-center text-[13px] my-4 cursor-pointer"
        onClick={() =>
          router.push(`/booking/select-date?movieId=${movieDetail?._id}`)
        }
      >
        {"<"} Trở lại
      </p>
    </section>
  );
}
