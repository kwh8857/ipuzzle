import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Section3() {
  const Agent = useSelector((state) => state.layouts.userState);
  return (
    <div className="section3">
      <div className="right">
        <img src="/assets/main/s3_logo.svg" alt="로고" />
        <div className="title">
          더 선명한 추억을 위해
          <br />
          <span>
            아이퍼즐이 당신과 <br />
            함께 하겠습니다
          </span>
        </div>
      </div>

      {Agent === "PC" ? (
        <div className="mainimg_pc" />
      ) : (
        <img
          className="mainimg_mb"
          src={`/assets/main/s3_mb.png`}
          srcSet={`/assets/main/s3_mb@2x.png 2x , /assets/main/s3_mb@3x.png 3x`}
          alt="이미지"
        />
      )}
    </div>
  );
}

export default Section3;
