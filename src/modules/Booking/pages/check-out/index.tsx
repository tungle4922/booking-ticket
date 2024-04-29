"use client";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "@/lib/Interfaces/state";
import CheckOutBox from "../../components/checkout-box";
import { Button } from "antd";
import { Input, Radio, Space } from "antd";
import { useEffect, useState } from "react";
import type { RadioChangeEvent } from "antd";
import { getBookingParamsSuccess } from "@/lib/slices/movies.slice";

export default function CheckOut() {
  const router = useRouter();
  const dispatch = useDispatch();
  const authInfo = useSelector((state: IState) => state?.auth?.authInfo);
  const movieDetail = useSelector(
    (state: IState) => state?.movies?.movieDetail
  );
  const bookingParams = useSelector(
    (state: IState) => state?.movies?.bookingParams
  );
  const [value, setValue] = useState<string>("SHOPEEPAY");

  useEffect(() => {
    const updatedBookingParams = { ...bookingParams };
    updatedBookingParams.paymentMethod = value;
    dispatch(getBookingParamsSuccess(updatedBookingParams));
  }, []);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    const updatedBookingParams = { ...bookingParams };
    updatedBookingParams.paymentMethod = e.target.value;
    dispatch(getBookingParamsSuccess(updatedBookingParams));
  };

  return (
    <section className="py-12 px-32">
      <p className="text-center font-bold text-[25px] mb-12">
        Bước 3: Nhập thông tin / Thanh toán
      </p>
      <div className="flex gap-12">
        <div className="w-2/3">
          <div className="border-[1px] border-[#a49999] rounded-[12px] py-4 px-6 h-fit ml-[200px]">
            <p className="font-semibold">Mã giảm giá</p>
            <div className="h-[1px] bg-[#ccc] mx-[-24px] my-4"></div>
            <div className="flex item py-2">
              <Input className="!h-10" placeholder="Nhập mã giảm giá tại đây" />
              <Button type="primary" className="!bg-primary3 !h-10">
                Áp dụng
              </Button>
            </div>
          </div>
          <div className="border-[1px] border-[#a49999] rounded-[12px] py-4 px-6 h-fit ml-[200px] mt-10">
            <p className="font-semibold">Hình thức thanh toán</p>
            <div className="h-[1px] bg-[#ccc] mx-[-24px] my-4"></div>
            <div className="flex item py-2">
              <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                  <Radio value={"SHOPEEPAY"}>
                    <div className="flex items-center py-1">
                      <img
                        className="w-8 h-8 rounded-lg mr-2"
                        src="https://play-lh.googleusercontent.com/oXs9tsmauo4_xFDsovB7i3ONfNWZ9FR8shrnegcYC4tHCjybZexXa0fpe9N_3kYqw-U"
                        alt=""
                      />
                      <span className="text-white font-medium">
                        Thanh toán qua SHOPEEPAY
                      </span>
                    </div>
                  </Radio>
                  <Radio value={"VNPAY"}>
                    <div className="flex items-center py-1">
                      <img
                        className="w-8 h-8 rounded-lg mr-2"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQULr3Ust3Yw-IS1KvGuHQFys81W1ava9Ohd8gduuRPXA&s"
                        alt=""
                      />
                      <span className="text-white font-medium">
                        Thanh toán qua VNPAY
                      </span>
                    </div>
                  </Radio>
                  <Radio value={"MOMO"}>
                    <div className="flex items-center py-1">
                      <img
                        className="w-8 h-8 rounded-lg mr-2"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGds0dVYCpsArM9iAbJ8GNMQIHWR_M7vECi27mUxg1cQ&s"
                        alt=""
                      />
                      <span className="text-white font-medium">
                        Thanh toán qua ví MOMO
                      </span>
                    </div>
                  </Radio>
                </Space>
              </Radio.Group>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <CheckOutBox />
        </div>
      </div>
    </section>
  );
}
