import React from "react";
import "./css/index.css";
function Section1() {
  return (
    <div
      className="section1"
      style={{ backgroundImage: `url(/assets/main/s1_backgorund.png)` }}
    >
      <div className="wrapper">
        <div className="left">
          <div className="title">
            가족과 추억을 연결하는 <br /> 행복 디바이스
          </div>
          <div className="sub">
            우리 가족의 추억이 담긴 사진으로 함께하는 <br /> 인지능력향상 교구
            아이퍼즐과 함께 <br /> 가족들과 소중한 추억을 공유하세요
          </div>
        </div>
      </div>
      <img
        src="/assets/main/s1_pc.png"
        srcSet="/assets/main/s1_pc@2x.png 2x , /assets/main/s1_pc@3x.png 3x"
        alt="이미지"
      />
    </div>
  );
}

export default Section1;
