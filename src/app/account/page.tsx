import React from 'react'

const AccountPage = () => {
    
  const days = []
  const months = []
  const years = []
  for (let i = 1; i <= 31; i++) {
    days.push(
      <option key={i} value={i} className="bg-[black]">
        {i}
      </option>
    );
  }
  for (let i = 1; i <= 12; i++) {
    months.push(
      <option key={i} value={i} className="bg-[black]">
        {i}
      </option>
    );
  }
  for (let i = 1930; i <= 2024; i++) {
    years.push(
      <option key={i} value={i} className="bg-[black]">
        {i}
      </option>
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
                    Trọng Hiệp Nguyễn
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
                      Tổng chi tiêu trong tháng (4/2024):{" "}
                      <span className="text-[#72be43]">0 VND</span>
                    </li>
                  </ul>
                  <span>
                    Vui lòng đăng ảnh chân dung, thấy rõ mặt có kích thước:
                    ngang 200 pixel và dọc 200 pixel (dung lượng dưới 1MB)
                  </span>
                </div>
              </div>
              <hr className="border-dashed my-[30px] border-[#454D6A] opacity-100 border-t" />
              <div className="flex flex-wrap gap-y-4 justify-center">
                <div className="w-1/2 pr-[10px]">
                  <label htmlFor="last_name" className="block pb-[10px]">
                    Họ <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="rounded bg-transparent border-[#454d6a] border inline-block px-3 w-full h-[38px]"
                  />
                </div>
                <div className="w-1/2 pl-[10px]">
                  <label htmlFor="first_name" className="block pb-[10px]">
                    Tên đệm và tên <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="rounded bg-transparent border-[#454d6a] border inline-block px-3 w-full h-[38px]"
                  />
                </div>
                <div className="w-full ">
                  <label htmlFor="email" className="block pb-[10px]">
                    Email <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="rounded bg-transparent border-[#454d6a] border inline-block px-3 w-full h-[38px]"
                  />
                </div>
                <div className="w-2/3 pr-[10px]">
                  <label htmlFor="pass" className="block pb-[10px]">
                    Mật khẩu <span>*</span>
                  </label>
                  <input
                    type="password"
                    id="pass"
                    className="rounded bg-transparent border-[#454d6a] border inline-block px-3 w-full h-[38px]"
                  />
                </div>
                <div className="w-1/3 pl-[10px]">
                  <label htmlFor="" className="block pb-[10px]">
                    &nbsp;
                  </label>
                  <a
                    href=""
                    className="block max-w-full bg-[#72be43] text-center rounded h-[38px] leading-[38px] text-base font-bold"
                  >
                    ĐỔI MẬT KHẨU
                  </a>
                </div>
                <div className="w-full ">
                  <label htmlFor="phone" className="block pb-[10px]">
                    Số điện thoại <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    readOnly
                    disabled
                    value={"0976071573"}
                    className="rounded bg-transparent border-[#454d6a] border inline-block px-3 w-full h-[38px]"
                  />
                </div>
                <div className="w-full ">
                  <label htmlFor="sex" className="block pb-[10px]">
                    Giới tính <span>*</span>
                  </label>
                  <div className="flex items-center justify-center relative min-w-full h-[38px]">
                    <select
                      id="sex"
                      name="sex"
                      className="bg-transparent border border-[#454d6a]  px-3 w-full h-full appearance-none"
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
                <div className="w-full">
                  <label className="block pb-[10px]" htmlFor="">
                    Ngày sinh *
                  </label>
                  <div className="w-full flex gap-3">
                    <div className="flex items-center justify-center relative w-1/3 h-[38px] pr-[10px]">
                      <select
                        id="day"
                        name="day"
                        className="bg-transparent border border-[#454d6a]  px-3 w-full h-full appearance-none"
                      >
                        {days}
                      </select>
                      <img
                        src="https://bhdstar.vn/wp-content/themes/loodo-starter/inc/imgs/chevron-down.png"
                        className="absolute right-3 pointer-events-none"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center justify-center relative w-1/3 h-[38px] pr-[10px]">
                      <select
                        id="month"
                        name="month"
                        className="bg-transparent border border-[#454d6a]  px-3 w-full h-full appearance-none"
                      >
                        {months}
                      </select>
                      <img
                        src="https://bhdstar.vn/wp-content/themes/loodo-starter/inc/imgs/chevron-down.png"
                        className="absolute right-3 pointer-events-none"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center justify-center relative w-1/3 h-[38px] pr-[10px]">
                      <select
                        id="year"
                        name="year"
                        className="bg-transparent border border-[#454d6a]  px-3 w-full h-full appearance-none"
                      >
                        {years}
                      </select>
                      <img
                        src="https://bhdstar.vn/wp-content/themes/loodo-starter/inc/imgs/chevron-down.png"
                        className="absolute right-3 pointer-events-none"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <a
                  href=""
                  className="block w-1/3 bg-[#72be43] text-center rounded h-[38px] leading-[38px] text-base font-bold"
                >
                  CẬP NHẬT
                </a>
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
                    <span className="text-white"> hiepyolo02@gmail.com</span>
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

        <div className="flex justify-between py-5 px-[20px]">
          <h1 className="text-2xl font-bold">Lịch sử giao dịch</h1>
          <div className="flex">
            <input
              className="bg-white border px-2 rounded-md text-white border-gray-500"
              type="month"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="w-full overflow-x-auto px-[20px] pb-[20px]">
          <table className="w-full text-left  border border-collapse border-gray-400 rounded sm:border-separate ">
            <tbody className="">
              <tr>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium  border-l first:border-l-0 text-white-700 bg-[#272b3d]"
                >
                  STT
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
                  Tổng tiền
                </th>
              </tr>
              <tr>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-transparent"
                >
                  
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-transparent"
                >
                  
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-transparent"
                >
                  
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-transparent"
                >
                  
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium border-l first:border-l-0 text-white-700 bg-transparent"
                >
                  Tổng tiền
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
}
export default AccountPage