"use client";

import { Input } from "antd";
import { Button, message } from "antd";
import Link from "next/link";
import type { FormProps } from "antd";
import { Form } from "antd";
import { userService } from "@/core/apis/user.service";
import nookies from "nookies";
import { parseCookies, setCookie, destroyCookie } from "nookies";

type FieldType = {
  email?: string;
  password?: string;
};

export default function Login() {
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const res = await userService.login(values);
    console.log(res);
    if (res?.token) {
      setCookie(null, "accessToken", res?.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      message.success("Đăng nhập thành công");
    } else {
      message.error(res.response.data.message);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <main>
      <Form
        name="basic"
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="py-12 px-32 flex gap-12">
          <div className="w-1/2">
            <img
              className="rounded-[24px] object-cover"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/66932197773601.5ecd2ebb832dc.jpeg"
              alt=""
            />
          </div>
          <div className="w-1/2 my-auto">
            <p className="text-center mb-8 text-xl font-bold text-white">
              Đăng nhập
            </p>
            <div className="w-1/2 mx-auto mb-6">
              <p className="ml-2 mb-2 text-white">Tên đăng nhập</p>
              <Form.Item<FieldType>
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input className="h-10" placeholder="Nhập email" />
              </Form.Item>
            </div>
            <div className="w-1/2 mx-auto mb-6">
              <p className="ml-2 mb-2 text-white">Mật khẩu</p>
              <Form.Item<FieldType>
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password className="h-10" placeholder="Nhập username" />
              </Form.Item>
            </div>
            <div className="w-1/2 mx-auto mt-12 mb-6">
              <Form.Item>
                <Button
                  className="w-full !bg-primary3 !h-10"
                  type="primary"
                  htmlType="submit"
                >
                  Đăng nhập
                </Button>
              </Form.Item>
            </div>
            <p className="text-[13px] text-center mx-2 text-white">
              Chưa có tài khoản?{" "}
              <span className="!text-primary3 cursor-pointer">
                <Link href={"/sign-up"}>Đăng ký</Link>
              </span>
            </p>
          </div>
        </div>
      </Form>
    </main>
  );
}
