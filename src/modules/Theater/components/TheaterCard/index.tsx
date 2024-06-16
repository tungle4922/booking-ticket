"use client";
import React from "react";
import styles from "./theaterCard.module.css";
import Link from "next/link";
import unidecode from "unidecode";
import { FacebookShareButton } from "react-share";

type Props = {
  name: string;
};

const slugify = (text: string): string => {
  const asciiText: string = unidecode(text); // Chuyển đổi Unicode sang ASCII
  return asciiText
    .toLowerCase()
    .replace(/[^\w\s]/gi, "") // Loại bỏ các kí tự đặc biệt
    .replace(/\s+/g, "-"); // Thay thế khoảng trắng bằng dấu gạch ngang
};

const TheaterCard = (props: Props) => {
  const slug = slugify(props.name);

  const shareUrl =
    "https://www.bhdstar.vn/rap-phim/"
  const title = "BHD CINEMA";

  return (
    <div className={styles.container}>
      <div className="text-center mb-3">
        <Link
          href="/theater/[name]"
          as={`/theater/${slug}`}
          className="inline-block"
        >
          <img
            className="rounded-lg"
            src="https://www.bhdstar.vn/wp-content/uploads/2023/12/GARDEN-243x330-1.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className=" mb-3">
        <Link href="/theater/[name]" as={`/theater/${slug}`}>
          {props.name}
        </Link>
      </div>
      <div>
        <Link href="/theater/[name]" as={`/theater/${slug}`}>
          <span className={styles.btnDetail}>THÔNG TIN CHI TIẾT</span>
        </Link>
        <FacebookShareButton url={shareUrl} title={title}>
          <a href="" className={styles.btnShare}>
            <span className={styles.spanShare}>CHIA SẺ</span>
          </a>
        </FacebookShareButton>
      </div>
    </div>
  );
};

export default TheaterCard;
