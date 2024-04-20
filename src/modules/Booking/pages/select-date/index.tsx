"use client";
import { Calendar } from "antd";
import type { Dayjs } from "dayjs";
import Link from "next/link";

interface ITimeBox {
  time: string;
  type1: string;
  type2: string;
}

export default function SelectDate() {
  const onSelect = (date: Dayjs, info: any) => {
    console.log(date.format("YYYY-MM-DD"), info);
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
          <div className="!m-4 border-[1px] border-[#a49999] rounded-[12px]">
            <div className="p-5">
              <div className="flex items-center mb-3">
                <img
                  src="https://www.bhdstar.vn/wp-content/uploads/2023/08/logo.png"
                  alt=""
                  className="w-6 h-6 mr-3"
                />
                <span>CGV Vincom Trần Duy Hưng</span>
              </div>
              <div className="grid grid-cols-4 gap-5">
                {timeBox.map((item, index) => {
                  return (
                    <div key={index}>
                      <Link href={"/booking/select-seat"}>
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
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="!m-4 border-[1px] border-[#a49999] rounded-[12px]">
            <div className="p-5">
              <div className="flex items-center mb-3">
                <img
                  src="https://www.bhdstar.vn/wp-content/uploads/2023/08/logo.png"
                  alt=""
                  className="w-6 h-6 mr-3"
                />
                <span>CGV Vincom Trần Duy Hưng</span>
              </div>
              <div className="grid grid-cols-4 gap-5">
                {timeBox.map((item, index) => {
                  return (
                    <div key={index}>
                      <Link href={"/booking/select-seat"}>
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
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
