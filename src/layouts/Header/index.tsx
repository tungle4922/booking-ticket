"use client";

import { Button } from "antd";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCookie, getCookie } from "cookies-next";
import { IState } from "@/lib/Interfaces/state";
import {
  getAuthInfoSuccess,
  getUserInfoSuccess,
} from "@/lib/slices/auth.slice";
import { userService } from "@/core/apis/user.service";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

export default function Header() {
  const authInfo = useSelector((state: IState) => state?.auth?.authInfo);
  const userInfo = useSelector((state: IState) => state?.auth?.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    const authInfoCookie = getCookie("authInfo")
      ? JSON.parse(getCookie("authInfo")!)
      : null;
    dispatch(getAuthInfoSuccess(authInfoCookie));
    getUserInfo();
  }, [getCookie("authInfo")]);

  useEffect(() => {
    getUserInfo();
  }, [authInfo]);

  const logOut = () => {
    deleteCookie("authInfo");
    dispatch(getAuthInfoSuccess(null));
  };

  const getUserInfo = async () => {
    if (authInfo && authInfo.userId) {
      const res = await userService.getUserInfo(authInfo?.userId);
      dispatch(getUserInfoSuccess(res.user));
    }
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <p
          onClick={logOut}
          className="py-1 px-4 cursor-pointer font-medium"
        >
          Đăng xuất
        </p>
      ),
    },
  ];

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
        {authInfo ? (
          <div className="flex items-center">
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png"
                    alt=""
                    className="w-[40px] h-[40px] cursor-pointer mt-1"
                    onClick={getUserInfo}
                  />
                </Space>
              </a>
            </Dropdown>
            <span className="ml-2 line-clamp-1">{userInfo?.username}</span>
          </div>
        ) : (
          <div className="flex">
            <Button type="default">
              <Link href={"/sign-up"}>Đăng ký</Link>
            </Button>
            <Button type="primary" className="ml-3 !bg-primary3">
              <Link href={"/login"}>Đăng nhập</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
