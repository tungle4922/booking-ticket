import { Button } from "antd";
import Link from "next/link";

export default function MovieDetail() {
  return (
    <main className="py-12 px-32">
      <p className="text-white mb-10 text-xl">
        <span>
          <Link href={"/"}>Trang chủ</Link>
        </span>
        <span className="mx-3">/</span>
        <span>KUNG FU PANDA 4</span>
      </p>
      <div className="flex gap-20">
        <div className="w-1/3">
          <img
            className="rounded-[12px]"
            src="https://bhdstar.vn/wp-content/uploads/2024/03/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp.jpg"
            alt=""
          />
        </div>
        <div className="w-2/3">
          <p className="font-bold text-primary3 text-[30px]">KUNG FU PANDA 4</p>
          <p className="my-4 text-[18px]">
            Sau khi Po được chọn trở thành Thủ lĩnh tinh thần của Thung lũng Hòa
            bình, Po cần tìm và huấn luyện một Hiệp Sĩ Rồng mới, trong khi một
            nữ phù thủy quyền năng đan lên kế hoạch triệu tập lại tất cả những
            kẻ phản diện bậc thầy mà Po đã đánh bại trước đây.
          </p>
          <p className="my-4 text-[18px]">
            <span className="text-[#ccc]">Phân loại: </span> Phim phổ biến với
            mọi độ tuổi
          </p>
          <p className="my-4 text-[18px]">
            <span className="text-[#ccc]">Định dạng: </span> <span>2D</span>
          </p>
          <p className="my-4 text-[18px]">
            <span className="text-[#ccc]">Đạo diễn: </span> Mike Mitchell,
            Stephanie Stine
          </p>
          <p className="my-4 text-[18px]">
            <span className="text-[#ccc]">Diễn viên: </span> Angelina Jolie, Ke
            Huy Quan
          </p>
          <p className="my-4 text-[18px]">
            <span className="text-[#ccc]">Thể loại: </span> Animation
          </p>
          <p className="my-4 text-[18px]">
            <span className="text-[#ccc]">Khởi chiếu: </span> 08/03/2024
          </p>
          <p className="my-4 text-[18px]">
            <span className="text-[#ccc]">Thời lượng: </span> 95 phút
          </p>
          <p className="my-4 text-[18px]">
            <span className="text-[#ccc]">Ngôn ngữ: </span> Phụ đề/Lồng tiếng
          </p>
          <div className="mt-8 flex gap-6">
            <Button className="!border-[2px] !border-primary3 !bg-primary3 !text-white !pb-9 !text-[18px] !px-12">
              Mua vé ngay
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
