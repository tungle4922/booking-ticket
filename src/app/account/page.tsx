"use client";
import { FormEvent, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { User } from "@nextui-org/react";
import { toast } from "sonner";

type User = {
  username: string;
  email: string;
  fullName: string;
  dateOfBirth: string;
  gender: string;
  password: string;
  phoneNumber: string;
  address: string;
  bookings: string[];
};
type Voucher = {
  _id: string;
  genre: string[];
  discountPercentage: number;
  isUsed: boolean;
  expirationDate: string;
  termsAndConditions: string;
};


type obj = {
  user: User;
};
type obj1 = {
  vouchers: Voucher[];
};
type Ticket = {
  _id: string;
  movieName: string;
  seatNumbers: string[];
  ticketType: string;
  price: number;
  bookingDate: string;
  cinemaLocation: string;
  voucherId: string;
  status: string;
};

const AccountPage: React.FC = () => {
  const [userData, setUserData] = useState<User | null>(null);
  const [ticketData, setTicketData] = useState<Ticket[] | null>(null);
  const [voucherData, setVoucherData] = useState<Voucher[] | null>(null);
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const [changePass, setChangePass] = useState<boolean>(false);
  const getToken = () => {
    const cookieValue: any = Cookies.get("authInfo");
    const cookie = JSON.parse(cookieValue);
    return cookie.accessToken;
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password == rePassword) {
          const token = getToken();
          const authInfoCookie: any = Cookies.get("authInfo");
          const authInfo = JSON.parse(authInfoCookie);
          const userId = authInfo.userId;

          const response = await fetch(`http://localhost:8080/user/${userId}`, {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: userData?.username,
              email: userData?.email,
              fullName: userData?.fullName,
              dateOfBirth: userData?.dateOfBirth,
              gender: userData?.gender,
              phoneNumber: userData?.phoneNumber,
              address: userData?.address,
              password: userData?.password,
            }),
          });
          const data = await response.json();
          toast.success("Đổi thông tin thành công");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
    } else {
      toast.error("Mật khẩu chưa khớp");
    }

  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const authInfoCookie = Cookies.get("authInfo");

        if (authInfoCookie) {
          const authInfo = JSON.parse(authInfoCookie);
          const userId = authInfo.userId;

          const response = await fetch(`http://localhost:8080/user/${userId}`);
          const data: obj = await response.json(); // Type the fetched data as obj
          const dataU: User = data.user;

          const email: string = dataU.email
          const response1 = await fetch(
            `http://localhost:8080/voucher/getVoucherByEmail?email=${email}`
          );
          const data1: obj1 = await response1.json(); // Type the fetched data as obj
          const listVoucher: Voucher[] = data1.vouchers;
          const bookingIds: string[] = dataU.bookings;

          // Fetch ticket data concurrently using Promise.all
          const ticketPromises = bookingIds.map((bookingId) =>
            fetch(`http://localhost:8080/booking/${bookingId}`)
              .then((res) => res.json())
              .then((ticket) => ticket.booking)
          );

          const tickets = await Promise.all(ticketPromises);
          setUserData(dataU);
          setVoucherData(listVoucher)
          setTicketData(tickets);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData || !ticketData) {
    return (
      <div className="h-[400px] flex justify-center items-center text-2xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-[1330px] mx-auto">
      <h1 className="text-center text-2xl font-bold py-[30px]">Tài khoản</h1>
      <div className=" flex w-full">
        <div className="w-[58%] px-[20px]">
          <div className="border-1 border-gray-500 rounded p-[20px]">
            <div className="flex gap-[15px] align-middle items-center">
              <img
                className="max-w-[150px] rounded-full"
                src="https://bhdstar.vn/wp-content/assets/loodo/no-user.jpg"
                alt=""
              />
              <div>
                <h2 className="pb-[10px] text-lg font-bold text-[#72be43]">
                  {userData.username}
                </h2>
                <ul className="pb-[8px]">
                  <li className="inline mr-5">
                    Điểm RP: <span className="text-[#72be43]">0</span>
                  </li>
                  <li className="inline mr-5">
                    Tổng visit: <span className="text-[#72be43]">0</span>
                  </li>
                </ul>
                <ul className="pb-[8px]">
                  <li className="inline mr-5">
                    Expried visit: <span className="text-[#72be43]">0</span>
                  </li>
                  <li className="inline mr-5">
                    Active visit: <span className="text-[#72be43]">0</span>
                  </li>
                </ul>
                <ul className="pb-[8px]">
                  <li className="inline mr-5">
                    Tổng chi tiêu trong tháng:{" "}
                    <span className="text-[#72be43]">0 VND</span>
                  </li>
                </ul>
                <span>
                  Vui lòng đăng ảnh chân dung, thấy rõ mặt có kích thước: ngang
                  200 pixel và dọc 200 pixel (dung lượng dưới 1MB)
                </span>
              </div>
            </div>
            <hr className="border-dashed my-[30px] border-[#454D6A] opacity-100 border-t" />
            <div>
              <form
                className="flex flex-wrap gap-y-4 justify-center"
                onSubmit={(e) => submitForm(e)}
              >
                <div className="w-full">
                  <label htmlFor="fullName" className="block pb-[10px]">
                    Họ tên<span></span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    className="rounded bg-transparent border-[#454d6a] border inline-block px-3 w-full h-[38px]"
                    value={userData.fullName}
                    onChange={(events) =>
                      setUserData({
                        ...userData,
                        [events.target.name]: events.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-full ">
                  <label htmlFor="email" className="block pb-[10px]">
                    Email <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="rounded bg-transparent border-[#454d6a] border inline-block px-3 w-full h-[38px]"
                    value={userData.email}
                    readOnly
                    onChange={(events) =>
                      setUserData({
                        ...userData,
                        [events.target.name]: events.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="pass2" className="block pb-[10px]">
                    Mật khẩu<span>*</span>
                  </label>
                  <div className="flex justify-between">
                    <input
                      type="password"
                      name="password2"
                      readOnly
                      className="rounded bg-transparent border-[#454d6a] border block px-3 w-[63%] h-[38px]"
                      value={"12345678910"}
                    />
                    <a
                      onClick={() => setChangePass(!changePass)}
                      className="block w-1/3 bg-[#72be43] text-center rounded h-[38px] leading-[38px] text-base font-bold cursor-pointer"
                    >
                      ĐỔI MẬT KHẨU
                    </a>
                  </div>
                </div>
                {changePass == true && (
                  <>
                    <div className="w-full">
                      <label htmlFor="pass" className="block pb-[10px]">
                        Mật khẩu mới<span>*</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        className="rounded bg-transparent border-[#454d6a] border inline-block px-3 w-full h-[38px]"
                        value={password}
                        onChange={(events) => {
                          setUserData({
                            ...userData,
                            [events.target.name]: events.target.value,
                          });

                          setPassword(events.target.value);
                        }}
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="pass1" className="block pb-[10px]">
                        Nhập lại Mật khẩu <span>*</span>
                      </label>
                      <input
                        type="password"
                        name="password1"
                        className="rounded bg-transparent border-[#454d6a] border inline-block px-3 w-full h-[38px]"
                        onChange={(events) =>
                          setRePassword(events.target.value)
                        }
                      />
                    </div>
                  </>
                )}

                <div className="w-full ">
                  <label htmlFor="phone" className="block pb-[10px]">
                    Số điện thoại <span></span>
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={userData.phoneNumber}
                    className="rounded bg-transparent border-[#454d6a] border inline-block px-3 w-full h-[38px]"
                    onChange={(events) =>
                      setUserData({
                        ...userData,
                        [events.target.name]: events.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-full ">
                  <label htmlFor="gender" className="block pb-[10px]">
                    Giới tính <span>*</span>
                  </label>
                  <div className="flex items-center justify-center relative min-w-full h-[38px]">
                    <select
                      id="gender"
                      name="gender"
                      className="bg-transparent border border-[#454d6a]  px-3 w-full h-full appearance-none"
                      value={userData.gender}
                      onChange={(e) => {
                        setUserData({
                          ...userData,
                          [e.target.name]: e.target.value,
                        });
                      }}
                    >
                      <option className="bg-[black]" value="male">
                        Nam
                      </option>
                      <option className="bg-[black]" value="female">
                        Nữ
                      </option>
                      <option className="bg-[black]" value="other">
                        Khác
                      </option>
                    </select>
                    <img
                      src="https://bhdstar.vn/wp-content/themes/loodo-starter/inc/imgs/chevron-down.png"
                      className="absolute right-1 pointer-events-none"
                      alt=""
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="block w-1/3 bg-[#72be43] text-center rounded h-[38px] leading-[38px] text-base font-bold"
                >
                  CẬP NHẬT
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-auto px-[10px]">
          <div className="border-1 border-[#72be43] rounded p-[25px]">
            <div className="flex items-center">
              <img
                className="w-[130px] border-[15px] border-white rounded-lg"
                src="https://bhdstar.vn/phpqrcode/?text=ONLA1068087"
                alt=""
              />
              <ul className="pl-[16px] text-[#ccc]">
                <li className="pb-2">
                  Tên đăng nhập:
                  <span className="text-white"> {userData.username}</span>
                </li>
                <li className="pb-2">
                  Số thẻ: <span className="text-white">ONLA1068087</span>
                </li>
                <li className="pb-2">
                  Hạng thẻ: <span className="text-white">Star</span>
                </li>
                <li className="pb-2">
                  Ngày đăng ký: <span className="text-white">14/04/2024</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex py-5 px-[20px]">
        <h1 className="text-2xl font-bold">Danh sách voucher</h1>
      </div>
      <div className="w-full overflow-x-auto px-[20px] pb-[20px]">
        <table className="w-full text-left  border border-collapse border-gray-400 rounded sm:border-separate ">
          <tbody className="">
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-[#272b3d]"
              >
                Mã voucher
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-[#272b3d]"
              >
                Thể loại
              </th>

              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-[#272b3d]"
              >
                Giảm giá
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-[#272b3d]"
              >
                Trạng thái
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-[#272b3d]"
              >
                Ngày hết hạn
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-[#272b3d]"
              >
                Điều khoản
              </th>
            </tr>
            {voucherData?.map((voucher, index) => (
              <tr key={index}>
                <td className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-transparent">
                  {voucher._id}
                </td>
                <td className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-transparent">
                  {voucher.genre}
                </td>
                <td className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-transparent">
                  {voucher.discountPercentage}
                </td>
                <td className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-transparent">
                  {voucher.isUsed?"Đã dùng":"Chưa dùng"}
                </td>
                <td className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-transparent">
                  {voucher.expirationDate}
                </td>
                <td className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-transparent">
                  {voucher.termsAndConditions}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {voucherData?.length == 0 && (
          <div className="text-center pt-2 text-xl">Trống</div>
        )}
      </div>

      <div className="flex py-5 px-[20px]">
        <h1 className="text-2xl font-bold">Lịch sử giao dịch</h1>
      </div>
      <div className="w-full overflow-x-auto px-[20px] pb-[20px]">
        <table className="w-full text-left  border border-collapse border-gray-400 rounded sm:border-separate ">
          <tbody className="">
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-[#272b3d]"
              >
                Phim
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-[#272b3d]"
              >
                Thời gian giao dịch
              </th>

              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-[#272b3d]"
              >
                Mã lấy vé
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-[#272b3d]"
              >
                Thông tin rạp
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-[#272b3d]"
              >
                Số ghế
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-[#272b3d]"
              >
                Tổng tiền
              </th>
            </tr>
            {ticketData?.map((ticket) => (
              <tr key={ticket._id}>
                <td className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-transparent">
                  {ticket.movieName}
                </td>
                <td className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-transparent">
                  {ticket.bookingDate}
                </td>
                <td className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-transparent">
                  {ticket._id}
                </td>
                <td className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-transparent">
                  {ticket.cinemaLocation}
                </td>
                <td className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-transparent">
                  {ticket.seatNumbers}
                </td>
                <td className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-transparent">
                  {ticket.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {ticketData?.length == 0 && (
          <div className="text-center pt-2 text-xl">Trống</div>
        )}
      </div>
    </div>
  );
};
export default AccountPage;
