"use client";

import styles from "./view-ticket.module.css";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "@/lib/Interfaces/state";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faCouch,
  faLocation,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function ViewTicket() {
  const router = useRouter();
  const dispatch = useDispatch();
  const authInfo = useSelector((state: IState) => state?.auth?.authInfo);
  const movieDetail = useSelector(
    (state: IState) => state?.movies?.movieDetail
  );
  const bookingParams = useSelector(
    (state: IState) => state?.movies?.bookingParams
  );

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

  return (
    <section className="py-12 px-32">
      <p className="text-center font-bold text-[25px] mb-12">Bước 4: Nhận vé</p>
      <div className="flex justify-center">
        <main className={styles.ticket_system}>
          <div className={styles.top}>
            <div className={styles.printer} />
          </div>
          <div className={styles.receipts_wrapper}>
            <div className={styles.receipts}>
              <div className={styles.receipt}>
                <div className="flex gap-6">
                  <div className="w-1/3">
                    <img
                      src={bookingParams?.movieImage}
                      className="rounded-lg"
                      alt=""
                    />
                  </div>
                  <div className="w-2/3">
                    <p className="font-bold line-clamp-1 py-1 text-[#000] text-xl">
                      {bookingParams?.movieName}
                    </p>
                    <p className="py-1 text-[#000]">
                      Thời gian: {getDate(bookingParams?.time)}
                    </p>
                    <p className="py-1 text-[#000]">
                      Suất chiếu: {getTime(bookingParams?.time)}
                    </p>
                    <div className="flex gap-1 items-center">
                      <FontAwesomeIcon
                        fontSize={16}
                        icon={faLocationDot}
                        color="#000"
                      />
                      <p className="py-1 font-semibold text-[#000] line-clamp-1">
                        {bookingParams?.cinemaLocation}
                      </p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <FontAwesomeIcon
                        fontSize={18}
                        icon={faBox}
                        color="#000"
                      />
                      <p className="py-1 font-semibold text-[#000]">Cinema 5</p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <FontAwesomeIcon
                        fontSize={16}
                        icon={faCouch}
                        color="#000"
                      />
                      {bookingParams?.seatArr?.map((seat, index) => {
                        return (
                          <span
                            key={index}
                            className="py-1 font-semibold text-[#000]"
                          >
                            {seat}{" "}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="py-12"></div>
              </div>
              <div className={`${styles.receipt} ${styles.qr_code}`}>
                <div className="flex gap-6 w-full">
                  <div className="w-1/3">
                    <svg
                      className={styles.qr}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 29.938 29.938"
                    >
                      <path d="M7.129 15.683h1.427v1.427h1.426v1.426H2.853V17.11h1.426v-2.853h2.853v1.426h-.003zm18.535 12.83h1.424v-1.426h-1.424v1.426zM8.555 15.683h1.426v-1.426H8.555v1.426zm19.957 12.83h1.427v-1.426h-1.427v1.426zm-17.104 1.425h2.85v-1.426h-2.85v1.426zm12.829 0v-1.426H22.81v1.426h1.427zm-5.702 0h1.426v-2.852h-1.426v2.852zM7.129 11.406v1.426h4.277v-1.426H7.129zm-1.424 1.425v-1.426H2.852v2.852h1.426v-1.426h1.427zm4.276-2.852H.002V.001h9.979v9.978zM8.555 1.427H1.426v7.127h7.129V1.427zm-5.703 25.66h4.276V22.81H2.852v4.277zm14.256-1.427v1.427h1.428V25.66h-1.428zM7.129 2.853H2.853v4.275h4.276V2.853zM29.938.001V9.98h-9.979V.001h9.979zm-1.426 1.426h-7.127v7.127h7.127V1.427zM0 19.957h9.98v9.979H0v-9.979zm1.427 8.556h7.129v-7.129H1.427v7.129zm0-17.107H0v7.129h1.427v-7.129zm18.532 7.127v1.424h1.426v-1.424h-1.426zm-4.277 5.703V22.81h-1.425v1.427h-2.85v2.853h2.85v1.426h1.425v-2.853h1.427v-1.426h-1.427v-.001zM11.408 5.704h2.85V4.276h-2.85v1.428zm11.403 11.405h2.854v1.426h1.425v-4.276h-1.425v-2.853h-1.428v4.277h-4.274v1.427h1.426v1.426h1.426V17.11h-.004zm1.426 4.275H22.81v-1.427h-1.426v2.853h-4.276v1.427h2.854v2.853h1.426v1.426h1.426v-2.853h5.701v-1.426h-4.276v-2.853h-.002zm0 0h1.428v-2.851h-1.428v2.851zm-11.405 0v-1.427h1.424v-1.424h1.425v-1.426h1.427v-2.853h4.276v-2.853h-1.426v1.426h-1.426V7.125h-1.426V4.272h1.426V0h-1.426v2.852H15.68V0h-4.276v2.852h1.426V1.426h1.424v2.85h1.426v4.277h1.426v1.426H15.68v2.852h-1.426V9.979H12.83V8.554h-1.426v2.852h1.426v1.426h-1.426v4.278h1.426v-2.853h1.424v2.853H12.83v1.426h-1.426v4.274h2.85v-1.426h-1.422zm15.68 1.426v-1.426h-2.85v1.426h2.85zM27.086 2.853h-4.275v4.275h4.275V2.853zM15.682 21.384h2.854v-1.427h-1.428v-1.424h-1.427v2.851zm2.853-2.851v-1.426h-1.428v1.426h1.428zm8.551-5.702h2.853v-1.426h-2.853v1.426zm1.426 11.405h1.427V22.81h-1.427v1.426zm0-8.553h1.427v-1.426h-1.427v1.426zm-12.83-7.129h-1.425V9.98h1.425V8.554z" />
                    </svg>
                  </div>
                  <div className="w-2/3">
                    <div className="flex justify-between items-center">
                      <p className="text-[#000] font-bold">Giá vé:</p>
                      <p className="text-[#000]">{bookingParams?.price?.toLocaleString()} đ</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-[#000] font-bold">Giảm giá:</p>
                      <p className="text-[#000]">0 đ</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-[#000] font-bold">Phương thức:</p>
                      <p className="text-[#000]">
                        {bookingParams?.paymentMethod}
                      </p>
                    </div>
                    <div className="h-[1px] bg-[#ccc] mx-[-24px] my-4"></div>
                    <div className="flex justify-between items-center">
                      <p className="text-[#000] font-bold">Tổng cộng:</p>
                      <p className="text-[#000]">{bookingParams?.price?.toLocaleString()} đ</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="pt-3">
                Vui lòng đưa mã số này đến quầy vé để nhận vé của bạn
              </p>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
