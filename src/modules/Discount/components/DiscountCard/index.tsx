import React from 'react'
import styles from './discountCard.module.css'

const DiscountCard = () => {
  return (
    <div className={styles.container}>
      <div className="text-center mb-3">
        <a className="inline-block" href="">
          <img
            className="rounded-lg"
            src="https://bhdstar.vn/wp-content/uploads/2023/08/Rectangle-19.png"
            alt=""
          />
        </a>
      </div>
      <div className=" mb-3">
        <p className="font-bold text-primary3 text-[20px]">Gía vé từ 55K - Dành cho Fan cứng U22</p>
      </div>
      <div className=" mb-3">
        <p className="font-bold text-white text-[16px]">Thời gian khuyến mãi: 18/3/2024 - 29/3/2024</p>
      </div>
    </div>
  );
}

export default DiscountCard