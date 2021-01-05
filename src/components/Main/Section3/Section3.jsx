import React from "react";
import "./css/index.css";
function Section3() {
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
      <img
        className="mainimg"
        src="/assets/main/s3_pc.png"
        srcSet="/assets/main/s3_pc@2x.png 2x , /assets/main/s3_pc@3x.png 3x"
        alt="이미지"
      />
    </div>
  );
}

export default Section3;
