"use client";

import { Input } from "antd";
import { Button, message } from "antd";
import Link from "next/link";
import type { FormProps } from "antd";
import { Form } from "antd";
import { userService } from "@/core/apis/user.service";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setCookie } from "cookies-next";
import { getAuthInfoSuccess } from "@/lib/slices/auth.slice";
import { validateEmail } from "@/core/shared/validator";
import { IState } from "@/lib/Interfaces/state";
import { useEffect, useState } from "react";
import { Spin } from "antd";

type FieldType = {
  email?: string;
  password?: string;
};

export default function Login() {
  const authInfo = useSelector((state: IState) => state?.auth?.authInfo);
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (authInfo) {
      router.push("/");
    }
  }, [authInfo]);

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    setIsLoading(true);
    const res = await userService.login(values);
    if (res?.token) {
      setIsLoading(false);
      const authInfo = {
        accessToken: res?.token,
        userId: res?.user?._id,
      };
      setCookie("authInfo", authInfo, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      dispatch(getAuthInfoSuccess(authInfo));
      message.success("Đăng nhập thành công");
      router.push("/");
    } else {
      setIsLoading(false);
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
                  { required: true, message: "Vui lòng nhập email" },
                  {
                    validator: validateEmail,
                  },
                ]}
              >
                <Input className="h-10" placeholder="Nhập email" />
              </Form.Item>
            </div>
            <div className="w-1/2 mx-auto mb-6">
              <p className="ml-2 mb-2 text-white">Mật khẩu</p>
              <Form.Item<FieldType>
                name="password"
                rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
              >
                <Input.Password className="h-10" placeholder="Nhập mật khẩu" />
              </Form.Item>
            </div>
            <div className="w-1/2 mx-auto mt-12 mb-6">
              <Form.Item>
                <Spin className="!ml-[52px]" size="small" spinning={isLoading}>
                  <Button
                    className="w-full !bg-primary3 !h-10"
                    type="primary"
                    htmlType="submit"
                  >
                    Đăng nhập
                  </Button>
                </Spin>
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
