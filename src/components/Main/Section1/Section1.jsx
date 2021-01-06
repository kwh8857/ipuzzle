import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Section1() {
  const Agent = useSelector((state) => state.layouts.userState);
  return (
    <div
      className="section1"
      style={{ backgroundImage: `url(/assets/main/s1_backgorund.png)` }}
    >
      <div className="wrapper">
        <div className="left">
          <div className="title">
            <img className="line" src="/assets/main/s1_line.svg" alt="밑줄" />
            가족과 추억을 연결하는 <br /> 행복 디바이스
          </div>
          <div className="sub">
            우리 가족의 추억이 담긴 사진으로 함께하는 <br /> 인지능력향상 교구
            아이퍼즐과 함께 <br /> 가족들과 소중한 추억을 공유하세요
          </div>
        </div>
      </div>
      <img
        src={`/assets/main/s1_${Agent === "PC" ? "pc" : "mb"}.png`}
        srcSet={`/assets/main/s1_${
          Agent === "PC" ? "pc" : "mb"
        }@2x.png 2x , /assets/main/s1_${
          Agent === "PC" ? "pc" : "mb"
        }@3x.png 3x`}
        alt="이미지"
      />
    </div>
  );
}

export default Section1;
