"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../../../styles/select-page.module.css";
import { faBackwardStep, faCouch } from "@fortawesome/free-solid-svg-icons";
import { Button } from "antd";
import CheckOutBox from "../../components/checkout-box";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "@/lib/Interfaces/state";
import { getBookingParamsSuccess } from "@/lib/slices/movies.slice";
import { useEffect, useState } from "react";
import { bookingService } from "@/core/apis/booking.service";

interface ISeat {
  type: number;
  code: string;
}

enum SeatType {
  normal,
  vip,
  couple,
  selected,
  sold,
}

enum SeatColor {
  "#a39d9d",
  "#e6830b",
  "#f01880",
  "#8AC441",
  "#c70808",
}

export default function SelectSeat() {
  const router = useRouter();
  const dispatch = useDispatch();
  const authInfo = useSelector((state: IState) => state?.auth?.authInfo);
  const movieDetail = useSelector(
    (state: IState) => state?.movies?.movieDetail
  );
  const bookingParams = useSelector(
    (state: IState) => state?.movies?.bookingParams
  );
  const listSeat: ISeat[] = [
    {
      type: SeatType.normal,
      code: "A1",
    },
    {
      type: SeatType.normal,
      code: "A2",
    },
    {
      type: SeatType.normal,
      code: "A3",
    },
    {
      type: SeatType.normal,
      code: "A4",
    },
    {
      type: SeatType.normal,
      code: "A5",
    },
    {
      type: SeatType.normal,
      code: "A6",
    },
    {
      type: SeatType.normal,
      code: "A7",
    },
    {
      type: SeatType.normal,
      code: "A8",
    },
    {
      type: SeatType.normal,
      code: "A9",
    },
    {
      type: SeatType.normal,
      code: "A10",
    },
    {
      type: SeatType.normal,
      code: "A11",
    },
    {
      type: SeatType.normal,
      code: "A12",
    },
    {
      type: SeatType.normal,
      code: "B1",
    },
    {
      type: SeatType.normal,
      code: "B2",
    },
    {
      type: SeatType.normal,
      code: "B3",
    },
    {
      type: SeatType.normal,
      code: "B4",
    },
    {
      type: SeatType.normal,
      code: "B5",
    },
    {
      type: SeatType.normal,
      code: "B6",
    },
    {
      type: SeatType.normal,
      code: "B7",
    },
    {
      type: SeatType.normal,
      code: "B8",
    },
    {
      type: SeatType.normal,
      code: "B9",
    },
    {
      type: SeatType.normal,
      code: "B10",
    },
    {
      type: SeatType.normal,
      code: "B11",
    },
    {
      type: SeatType.normal,
      code: "B12",
    },
    {
      type: SeatType.vip,
      code: "C1",
    },
    {
      type: SeatType.vip,
      code: "C2",
    },
    {
      type: SeatType.vip,
      code: "C3",
    },
    {
      type: SeatType.vip,
      code: "C4",
    },
    {
      type: SeatType.vip,
      code: "C5",
    },
    {
      type: SeatType.vip,
      code: "C6",
    },
    {
      type: SeatType.vip,
      code: "C7",
    },
    {
      type: SeatType.vip,
      code: "C8",
    },
    {
      type: SeatType.vip,
      code: "C9",
    },
    {
      type: SeatType.vip,
      code: "C10",
    },
    {
      type: SeatType.vip,
      code: "C11",
    },
    {
      type: SeatType.vip,
      code: "C12",
    },
    {
      type: SeatType.vip,
      code: "D1",
    },
    {
      type: SeatType.vip,
      code: "D2",
    },
    {
      type: SeatType.vip,
      code: "D3",
    },
    {
      type: SeatType.vip,
      code: "D4",
    },
    {
      type: SeatType.vip,
      code: "D5",
    },
    {
      type: SeatType.vip,
      code: "D6",
    },
    {
      type: SeatType.vip,
      code: "D7",
    },
    {
      type: SeatType.vip,
      code: "D8",
    },
    {
      type: SeatType.vip,
      code: "D9",
    },
    {
      type: SeatType.vip,
      code: "D10",
    },
    {
      type: SeatType.vip,
      code: "D11",
    },
    {
      type: SeatType.vip,
      code: "D12",
    },
    {
      type: SeatType.vip,
      code: "E1",
    },
    {
      type: SeatType.vip,
      code: "E2",
    },
    {
      type: SeatType.vip,
      code: "E3",
    },
    {
      type: SeatType.vip,
      code: "E4",
    },
    {
      type: SeatType.vip,
      code: "E5",
    },
    {
      type: SeatType.vip,
      code: "E6",
    },
    {
      type: SeatType.vip,
      code: "E7",
    },
    {
      type: SeatType.vip,
      code: "E8",
    },
    {
      type: SeatType.vip,
      code: "E9",
    },
    {
      type: SeatType.vip,
      code: "E10",
    },
    {
      type: SeatType.vip,
      code: "E11",
    },
    {
      type: SeatType.vip,
      code: "E12",
    },
    {
      type: SeatType.vip,
      code: "F1",
    },
    {
      type: SeatType.vip,
      code: "F2",
    },
    {
      type: SeatType.vip,
      code: "F3",
    },
    {
      type: SeatType.vip,
      code: "F4",
    },
    {
      type: SeatType.vip,
      code: "F5",
    },
    {
      type: SeatType.vip,
      code: "F6",
    },
    {
      type: SeatType.vip,
      code: "F7",
    },
    {
      type: SeatType.vip,
      code: "F8",
    },
    {
      type: SeatType.vip,
      code: "F9",
    },
    {
      type: SeatType.vip,
      code: "F10",
    },
    {
      type: SeatType.vip,
      code: "F11",
    },
    {
      type: SeatType.vip,
      code: "F12",
    },
    {
      type: SeatType.vip,
      code: "G1",
    },
    {
      type: SeatType.vip,
      code: "G2",
    },
    {
      type: SeatType.vip,
      code: "G3",
    },
    {
      type: SeatType.vip,
      code: "G4",
    },
    {
      type: SeatType.vip,
      code: "G5",
    },
    {
      type: SeatType.vip,
      code: "G6",
    },
    {
      type: SeatType.vip,
      code: "G7",
    },
    {
      type: SeatType.vip,
      code: "G8",
    },
    {
      type: SeatType.vip,
      code: "G9",
    },
    {
      type: SeatType.vip,
      code: "G10",
    },
    {
      type: SeatType.vip,
      code: "G11",
    },
    {
      type: SeatType.vip,
      code: "G12",
    },
    {
      type: SeatType.couple,
      code: "H1",
    },
    {
      type: SeatType.couple,
      code: "H2",
    },
    {
      type: SeatType.couple,
      code: "H3",
    },
    {
      type: SeatType.couple,
      code: "H4",
    },
    {
      type: SeatType.couple,
      code: "H5",
    },
    {
      type: SeatType.couple,
      code: "H6",
    },
    {
      type: SeatType.couple,
      code: "H7",
    },
    {
      type: SeatType.couple,
      code: "H8",
    },
    {
      type: SeatType.couple,
      code: "H9",
    },
    {
      type: SeatType.couple,
      code: "H10",
    },
    {
      type: SeatType.couple,
      code: "H11",
    },
    {
      type: SeatType.couple,
      code: "H12",
    },
  ];
  const listSeatArr = useSelector(
    (state: IState) => state?.movies?.bookingParams?.listAllSeat
  );

  const seatDes = [
    {
      name: "Ghế thường",
      type: SeatType.normal,
    },
    {
      name: "Ghế VIP",
      type: SeatType.vip,
    },
    {
      name: "Ghế đôi",
      type: SeatType.couple,
    },
    {
      name: "Ghế đã chọn",
      type: SeatType.selected,
    },
    {
      name: "Ghế đã bán",
      type: SeatType.sold,
    },
  ];

  useEffect(() => {
    initListSeat();
  }, []);

  const initListSeat = async () => {
    const theaterId = await bookingService.getTheaterIdByName(
      bookingParams?.cinemaLocation
    );
    const listSeatSold = await bookingService.getSeatSold(
      movieDetail?._id!,
      bookingParams?.time,
      theaterId
    );
    console.log(listSeatSold)
    const updatedBookingParams = { ...bookingParams };
    const updatedSeatArr = listSeat?.map((item: any) => {
      if (listSeatSold?.includes(item.code)) {
        return { ...item, type: SeatType.sold };
      } else {
        return item;
      }
    });
    updatedBookingParams.listAllSeat = updatedSeatArr;
    updatedBookingParams.theaterId = theaterId;
    dispatch(getBookingParamsSuccess(updatedBookingParams));
  };

  const selectSeat = (seat: string, type: number) => {
    if (type === SeatType.sold) {
      return;
    }
    if (type !== SeatType.selected) {
      const updatedBookingParams = { ...bookingParams };
      const totalPrice = updatedBookingParams.price;
      const seatArr = updatedBookingParams?.seatArr;
      const newSeatArr = [...seatArr, seat];
      const updatedSeatArr = listSeatArr?.map((item: any) => {
        if (newSeatArr?.includes(item.code)) {
          return { ...item, type: SeatType.selected };
        } else {
          return item;
        }
      });
      updatedBookingParams.seatArr = newSeatArr;
      updatedBookingParams.listAllSeat = updatedSeatArr;
      updatedBookingParams.price = totalPrice + movieDetail?.ticketPrice!;
      dispatch(getBookingParamsSuccess(updatedBookingParams));
    } else {
      const updatedBookingParams = { ...bookingParams };
      const totalPrice = updatedBookingParams.price;
      const seatArr = updatedBookingParams?.seatArr;
      const newSeatArr = seatArr.filter((item) => item !== seat);
      const updatedSeatArr = listSeatArr?.map((item: any, index: number) => {
        if (item.code === seat && index >= 0 && index <= 23) {
          return { ...item, type: SeatType.normal };
        } else if (item.code === seat && index >= 24 && index <= 83) {
          return { ...item, type: SeatType.vip };
        } else if (item.code === seat && index >= 84 && index <= 95) {
          return { ...item, type: SeatType.couple };
        } else {
          return item;
        }
      });
      updatedBookingParams.seatArr = newSeatArr;
      updatedBookingParams.listAllSeat = updatedSeatArr;
      updatedBookingParams.price = totalPrice - movieDetail?.ticketPrice!;
      dispatch(getBookingParamsSuccess(updatedBookingParams));
    }
  };

  return (
    <section className="py-12 px-32">
      <p className="text-center font-bold text-[25px] mb-12">
        Bước 2: Chọn ghế
      </p>
      <div className="flex gap-12">
        <div className="w-2/3">
          <div className="flex justify-center">
            <div className={styles.screen_theater}></div>
          </div>
          <p className="text-center font-bold text-[#ccc] text-[22px] mt-[-75px]">
            Màn hình
          </p>
          <div className="grid grid-cols-12 w-[550px] mx-auto pl-5 mt-[70px] gap-y-4">
            {listSeatArr?.map((item: any, index: any) => {
              return (
                <div
                  key={index}
                  className="relative cursor-pointer"
                  onClick={() => selectSeat(item.code, item.type)}
                >
                  <FontAwesomeIcon
                    fontSize={28}
                    color={SeatColor[item.type]}
                    icon={faCouch}
                  />
                  <div className="absolute top-[2px] right-0 left-0 w-[36px]">
                    <p className="text-[9px] font-semibold text-center">
                      {item.code}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-3 w-[600px] mx-auto pl-[70px] mt-[50px] gap-y-4">
            {seatDes.map((item, index) => {
              return (
                <div key={index} className="flex items-center">
                  <FontAwesomeIcon
                    fontSize={26}
                    color={SeatColor[item.type]}
                    icon={faCouch}
                  />
                  <span className="font-semibold ml-4">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/3">
          <CheckOutBox />
        </div>
      </div>
    </section>
  );
}
