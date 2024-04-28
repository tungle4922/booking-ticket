"use client";

import { Input } from "antd";
import { Button, message } from "antd";
import Link from "next/link";
import type { FormProps } from "antd";
import { Form } from "antd";
import { userService } from "@/core/apis/user.service";
import { useRouter } from "next/navigation";
import { validateEmail } from "@/core/shared/validator";
import { useSelector } from "react-redux";
import { IState } from "@/lib/Interfaces/state";
import { useEffect, useState } from "react";
import { Spin } from "antd";

type FieldType = {
  email?: string;
  username: string;
  password?: string;
  rePassword?: string;
};

export default function SignUp() {
  const authInfo = useSelector((state: IState) => state?.auth?.authInfo);
  const router = useRouter();
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (authInfo) {
      router.push("/");
    }
  }, [authInfo]);

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    setIsLoading(true);
    const res = await userService.register(values);
    console.log(res)
    if (res?.user) {
      setIsLoading(false);
      message.success("Đăng ký thành công");
      router.push("/login");
    } else {
      setIsLoading(false);
      message.error(res.message || "Có lỗi xảy ra");
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const validateRePassword = (_: any, value: any) => {
    if (value && value !== form.getFieldValue("password")) {
      return Promise.reject(new Error("Mật khẩu nhập lại không khớp"));
    }
    return Promise.resolve();
  };

  return (
    <main>
      <Form
        form={form}
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
          <div className="w-1/2  my-auto">
            <p className="text-center mb-8 text-xl font-bold text-white">
              Đăng ký tài khoản
            </p>
            <div className="w-1/2 mx-auto mb-6">
              <p className="ml-2 mb-2 text-white">Email</p>
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
              <p className="ml-2 mb-2 text-white">Username</p>
              <Form.Item<FieldType>
                name="username"
                rules={[{ required: true, message: "Vui lòng nhập username" }]}
              >
                <Input className="h-10" placeholder="Nhập username" />
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
            <div className="w-1/2 mx-auto mb-6">
              <p className="ml-2 mb-2 text-white">Nhập lại mật khẩu</p>
              <Form.Item<FieldType>
                name="rePassword"
                rules={[
                  { required: true, message: "Vui lòng nhập mật khẩu" },
                  {
                    validator: validateRePassword,
                  },
                ]}
              >
                <Input.Password
                  className="h-10"
                  placeholder="Nhập lại mật khẩu"
                />
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
                    Đăng ký
                  </Button>
                </Spin>
              </Form.Item>
            </div>
            <p className="text-[13px] text-center mx-2 text-white">
              Đã có tài khoản?{" "}
              <span className="text-primary3 cursor-pointer">
                <Link href={"/login"}>Đăng nhập</Link>
              </span>
            </p>
          </div>
        </div>
      </Form>
    </main>
  );
}
