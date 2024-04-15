import React from 'react'
import styles from './eventCard.module.css'

const EventCard = () => {
  return (
    <div className={styles.container}>
      <div className="text-center mb-3">
        <a className="inline-block" href="">
          <img
            className="rounded-lg"
            src="https://bhdstar.vn/wp-content/uploads/2023/08/Rectangle-23.png"
            alt=""
          />
        </a>
      </div>
      <div className=" mb-3">
        <p className="font-bold text-primary3 text-[20px]">HAPPY DAY THỨ 2 GIÁ RẺ – CHỈ TỪ 60K/ VÉ</p>
      </div>
      <div className=" mb-3">
        <p className="font-bold text-white text-[16px]">Thời gian sự kiện: 18/2/2024-20/4/2024</p>
      </div>
    </div>
  );
}

export default EventCard