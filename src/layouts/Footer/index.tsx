export default function Footer() {
  return (
    <footer className="bg-primary2 px-16 py-14 flex gap-[160px]">
      <div>
        <p className="font-bold text-xl mb-6">VỀ BHD STAR</p>
        <p className="mb-2">Hệ thống rạp</p>
        <p className="mb-2">Cụm rạp</p>
        <p className="mb-2">Liên hệ</p>
      </div>
      <div>
        <p className="font-bold text-xl mb-6">QUY ĐỊNH & ĐIỀU KHOẢN</p>
        <p className="mb-2">Quy định thành viên</p>
        <p className="mb-2">Hướng dẫn đặt vé trực tuyến</p>
        <p className="mb-2">Quy định và chính sách chung</p>
        <p className="mb-2">
          Chính sách bảo vệ thông tin cá nhân của người tiêu dùng
        </p>
      </div>
      <div>
        <p className="font-bold text-xl mb-6">CHĂM SÓC KHÁCH HÀNG</p>
        <p className="mb-2">Hotline: 19002099</p>
        <p className="mb-2">Giờ làm việc: 9:00 - 22:00</p>
        <p className="mb-2">Email hỗ trợ: cskh@bhdstar.vn</p>
        <p className="mb-2">MẠNG XÃ HỘI</p>
        <div className="flex items-center"> 
            <img className="w-8 h-8 rounded-full mx-1" src="https://cdn.tgdd.vn/2020/03/GameApp/Facebook-200x200.jpg" alt="" />
            <img className="w-8 h-8 rounded-full mx-1" src="https://cdn.tgdd.vn/2020/03/GameApp/Instagram-200x200.jpg" alt="" />
            <img className="w-8 h-8 rounded-full mx-1" src="https://stc-zaloprofile.zdn.vn/pc/v1/images/zalo_sharelogo.png" alt="" />
        </div>
      </div>
    </footer>
  );
}
