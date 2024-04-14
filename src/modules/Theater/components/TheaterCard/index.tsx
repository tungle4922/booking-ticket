import React from 'react'
import styles from './theaterCard.module.css'

const TheaterCard = () => {
  return (
    <div className={styles.container}>
      <div className="text-center mb-3">
        <a className="inline-block" href="">
          <img
            className="rounded-lg"
            src="https://www.bhdstar.vn/wp-content/uploads/2023/12/GARDEN-243x330-1.jpg"
            alt=""
          />
        </a>
      </div>
      <div className=" mb-3">
        <a href="">BHD Star The Garden</a>
      </div>
      <div>
        <a href="" className={styles.btnDetail}>
          THÔNG TIN CHI TIẾT
        </a>
        <a href="" className={styles.btnShare}>
          <span className={styles.spanShare}>CHIA SẺ</span>
        </a>
      </div>
    </div>
  );
}

export default TheaterCard