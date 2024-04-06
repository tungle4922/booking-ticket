import { Button } from 'antd';

export default function Header() {
  return (
    <header className='sticky top-0 left-0 right-0 z-50'>
      <div className="flex justify-between bg-primary2 px-8 py-4 items-center">
        <img
          src="https://www.bhdstar.vn/wp-content/uploads/2023/08/logo.png"
          alt=""
          className="w-[45px] h-[45px] cursor-pointer"
        />
        <div className="flex">
          <p className="text-white mr-4">Lịch chiếu</p>
          <p className="text-white mr-4">Hệ thống rạp</p>
          <p className="text-white mr-4">Khuyến mãi/Sự kiện</p>
          <p className="text-white mr-4">Cửa hàng</p>
        </div>
        <div className="flex">
          <Button type="default">Đăng ký</Button>
          <Button type="primary" className='ml-3 !bg-primary3'>Đăng nhập</Button>
        </div>
      </div>
    </header>
  );
}
