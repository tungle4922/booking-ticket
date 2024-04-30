import Link from "next/link";
import React from "react";
import unidecode from "unidecode";

interface Theater {
  name: string;
  location: string;
}
interface Object {
  theaters: Theater[];
}

const slugify = (text: string): string => {
  const asciiText: string = unidecode(text); // Chuyển đổi Unicode sang ASCII
  return asciiText
    .toLowerCase()
    .replace(/[^\w\s]/gi, "") // Loại bỏ các kí tự đặc biệt
    .replace(/\s+/g, "-"); // Thay thế khoảng trắng bằng dấu gạch ngang
};

function convertToReadableName(input: string): string {
  // Tách chuỗi thành mảng các từ
  const words = input.split("-");

  // Chuyển đổi chữ cái đầu tiên của từ đầu tiên thành viết hoa
  const capitalizedWords = words.map((word, index) => {
    if (index === 0) {
      // Nếu là từ đầu tiên, viết hoa tất cả các chữ
      return word.toUpperCase();
    } else {
      // Nếu không, giữ nguyên chữ hoa thường của từ
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  });

  // Kết hợp các từ lại với nhau và chèn khoảng trắng giữa chúng
  const result = capitalizedWords.join(" ");

  return result;
}

async function getData(name: string) {
  const par = convertToReadableName(name);
  const res = await fetch(
    `http://103.95.197.219:3005/theater/findTheaterByName?name=${par}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getDatas() {
  const res = await fetch(`http://103.95.197.219:3005/theater/getAllTheater`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const TheaterDetail = async ({ params }: { params: { theaterName: string } }) => {
  console.log(params.theaterName)
  const theater: Theater = await getData(params.theaterName);
  console.log(theater)
  const datas: Object = await getDatas();
  console.log(datas)
  const theaters: Theater[] = datas.theaters;

  // const theater: Theater = {
  //   name: "cgv",
  //   location:"cgv"
  // }

  return (
    <div>
      <div className="pt-[40px] pb-[10px] text-center ">
        <Link href="/" className="hover:text-[#72be43]">
          BHD Star
        </Link>
        <span className="mx-1">{"->"}</span>
        <Link href="/theater" className="hover:text-[#72be43]">
          Rạp phim
        </Link>
        <span className="mx-1">{"->"}</span>
        <span>{theater.name}</span>
      </div>
      <h1 className="text-center text-2xl font-bold pb-[40px]">Hệ thống rạp</h1>
      <div className="max-w-[1330px] mx-auto flex w-full pb-[40px]">
        <div className="w-2/3 px-[10px]">
          <div className="border-1 border-gray-500 rounded p-[20px] ">
            <h1 className="text-2xl font-bold text-[#72be43] mb-[20px]">
              {theater.name}
            </h1>
            <h2 className="text-xl font-bold mb-[20px]">{theater.name}</h2>
            <ul className="list-disc">
              <li className="ml-[21px] mb-[10px]">
                <strong>Địa điểm:</strong> {theater.location}
              </li>
              <li className="ml-[21px] mb-[10px]">
                <strong>Số điện thoại:</strong> 1900 2099 hoặc 024 3206 8678
              </li>
              <li className="ml-[21px] mb-[10px]">
                <strong>Email:</strong> cskh@bhdstar.vn
              </li>
              <li className="ml-[21px] mb-[20px]">
                <strong>Phòng chiếu:</strong> 6 Phòng chiếu 2D & 3D. Ghế First
                Class
              </li>
              <img
                src="https://images.foody.vn/res/g103/1020967/prof/s/foody-upload-api-foody-mobile-xem-phim-mien-phi-ta-200427164954.jpg"
                alt=""
              />
              <h1 className="text-base font-bold my-[20px]">
                CÁC QUY ĐỊNH GIÁ VÉ
              </h1>
              <p>
                – Giá vé trẻ em áp dụng cho trẻ em có chiều cao dưới 1,3m. Yêu
                cầu trẻ em có mặt khi mua vé. Trẻ em dưới 0,7m sẽ được miễn phí
                vé khi mua cùng 01 vé người lớn đi kèm theo. Không áp dụng kèm
                với chương trình khuyến mãi ưu đãi về giá vé khác.
                <br />
                – Giá vé thành viên U22 chỉ áp dụng cho thành viên dưới 22 tuổi
                khi mua vé. Không áp dụng kèm với chương trình khuyến mãi ưu đãi
                về giá vé khác. Mỗi thẻ thành viên U22 được áp dụng giá vé ưu
                đãi tối đa 02 vé/ngày.
                <br />
                – Ngày lễ: 1/1, Giổ Tổ Hùng Vương 10/3 Âm Lịch, 30/4, 1/5, 02
                ngày Lễ Quốc Khánh
                <br />– Giá vé Tết Âm Lịch sẽ được áp dụng riêng.
                <br />– Suất chiếu đặc biệt áp dụng giá vé theo khung giờ của
                ngày. Không áp dụng các giá vé ưu đãi dành cho U22, Privilege
                Voucher/Staff Voucher, Happy Day. Trong trường hợp Suất chiếu
                đặc biệt cùng ngày với Happy Day sẽ áp dụng giá vé của Thứ 3
              </p>
            </ul>
          </div>
        </div>
        <div className="w-1/3 px-[10px]">
          <div className="border-1 border-[#72be43] rounded p-[20px] ">
            <h1 className="text-center text-xl font-bold pb-[10px]">
              Địa điểm khác
            </h1>
            {theaters.length > 0 && (
              <ul>
                {theaters.map((theaterr) => (
                  <li
                    key={theaterr.name}
                    className={`py-[6px] hover:text-[#72be43]${
                      theaterr.name === theater.name ? "text-[#72be43] " : ""
                    }`}
                  >
                    <Link
                      className="flex gap-x-2"
                      href="/theater/[name]"
                      as={`/theater/${slugify(theaterr.name)}`}
                    >
                      <img
                        src="https://bhdstar.vn/wp-content/themes/loodo-starter/inc/imgs/bhdIcon.png"
                        alt=""
                      />
                      {theaterr.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheaterDetail;
