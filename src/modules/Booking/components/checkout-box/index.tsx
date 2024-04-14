import { Button } from "antd";

export default function CheckOutBox() {
  return (
    <section className="border-[1px] border-[#a49999] rounded-[12px] py-4 px-6 h-fit">
      <p className="font-semibold">CGV VINCOM TRẦN DUY HƯNG</p>
      <p className="my-3">
        <span className="text-primary3">Screen 3</span> - 18/04/2024 - Suất
        chiếu: 13h55
      </p>
      <div className="h-[1px] bg-[#ccc] mx-[-24px] my-4"></div>
      <p className="text-lg font-bold text-primary3">KUNGFU PANDA 4</p>
      <div className="flex items-center my-3">
        <div className="text-[10px] py-1 px-2 bg-primary1 border-[1px] border-yellow-400 rounded-[4px] mr-2">
          PHỤ ĐỀ
        </div>
        <div className="text-[10px] py-1 px-2 bg-primary3 border-[1px] border-primary3 rounded-[4px]">
          2D
        </div>
      </div>
      <div className="flex items-center justify-between my-5">
        <div>
          <p>2 x Adult-VIP-2D-HL</p>
          <p>E8,E9</p>
        </div>
        <p>210.000 VND</p>
      </div>
      <div className="h-[1px] bg-[#ccc] mx-[-24px] my-4"></div>
      <div className="my-7 flex justify-between">
        <p>Tổng tiền</p>
        <p className="font-semibold text-lg">210.000 VND</p>
      </div>
      <Button className="!bg-primary3 w-full" type="primary">
        THANH TOÁN
      </Button>
      <p className="text-center text-[13px] my-4">{"<"} Trở lại</p>
    </section>
  );
}
