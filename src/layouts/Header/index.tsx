import { Button } from "antd";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50">
      <div className="flex justify-between bg-primary2 px-8 py-4 items-center">
        <Link href={"/"}>
          <img
            src="https://www.bhdstar.vn/wp-content/uploads/2023/08/logo.png"
            alt=""
            className="w-[45px] h-[45px] cursor-pointer"
          />
        </Link>
        <div className="flex">
          <p className="text-white mr-4">Lịch chiếu</p>
          <Link href={"/theater"}>
            <p className="text-white mr-4">Hệ thống rạp</p>
          </Link>
          <Link href={"/discount"}>
            <p className="text-white mr-4">Khuyến mãi/Sự kiện</p>
          </Link>
          <p className="text-white mr-4">Cửa hàng</p>
        </div>
        <div className="flex">
          <Button type="default">
            <Link href={"/sign-up"}>Đăng ký</Link>
          </Button>
          <Button type="primary" className="ml-3 !bg-primary3">
            <Link href={"/login"}>Đăng nhập</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
