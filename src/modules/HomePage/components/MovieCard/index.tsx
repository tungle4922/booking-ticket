import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MovieCard() {
  return (
    <div>
      <Link href={"/movie-detail"}>
        <div>
          <img
            className="w-full rounded-[6px] mb-3 h-[350px] object-cover"
            src="https://www.bhdstar.vn/wp-content/uploads/2024/03/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp.jpg"
            alt=""
          />
          <div className="flex gap-2 my-2 items-center">
            <div className="bg-red-500 p-1 rounded-[6px] font-semibold text-[12px]">
              T18
            </div>
            <div className="border-[1px] border-yellow-600 p-1 rounded-[6px] font-semibold text-[12px] px-2">
              PHỤ ĐỀ
            </div>
            <div className="bg-primary3 p-1 rounded-[6px] font-semibold text-[12px] px-2">
              2D
            </div>
          </div>
          <p className="uppercase font-bold mt-4 mb-3">KUNG FU PANDA 4</p>
          <p className="mb-4 text-[14px]">
            Thể loại phim: <span className="font-medium">Drama</span>
          </p>
        </div>
      </Link>
      <div>
        <Button type="primary" className="!bg-primary3">
          <Link href={"/booking/select-date"}>Mua vé ngay</Link>
        </Button>
      </div>
    </div>
  );
}
