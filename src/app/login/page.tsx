import { Input } from "antd";
import { Button } from "antd";
import Link from "next/link";

export default function Login() {
  return (
    <main>
      <div className="py-12 px-32 flex gap-12">
        <div className="w-1/2">
          <img
            className="rounded-[24px] object-cover"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/66932197773601.5ecd2ebb832dc.jpeg"
            alt=""
          />
        </div>
        <div className="w-1/2 my-auto">
          <p className="text-center mb-8 text-xl font-bold">Đăng nhập</p>
          <div className="w-1/2 mx-auto mb-6">
            <p className="ml-2 mb-2">Tên đăng nhập</p>
            <Input className="h-10" placeholder="Nhập username" />
          </div>
          <div className="w-1/2 mx-auto mb-6">
            <p className="ml-2 mb-2">Mật khẩu</p>
            <Input className="h-10" placeholder="Nhập mật khẩu" />
          </div>
          <div className="w-1/2 mx-auto mt-12 mb-6">
            <Button className="w-full !bg-primary3 !h-10" type="primary">
              Đăng nhập
            </Button>
          </div>
          <p className="text-[13px] text-center mx-2">
            Chưa có tài khoản?{" "}
            <span className="text-primary3 cursor-pointer">
              <Link href={"/sign-up"}>Đăng ký</Link>
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
