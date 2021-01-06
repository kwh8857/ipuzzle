import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Section6() {
  const Agent = useSelector((state) => state.layouts.userState);

  return (
    <div
      className="section6"
      style={
        Agent === "PC"
          ? { backgroundImage: `url(/assets/main/s6_img.png)` }
          : undefined
      }
    >
      <div className="top">
        사진 속 추억이 <br /> 당신의 기억이 되도록
        <span>아이퍼즐이 당신과 가족을 연결합니다</span>
      </div>
      {Agent === "MB" ? (
        <img
          className="main_img"
          src={`/assets/main/s6_mb.png`}
          srcSet={`/assets/main/s6_mb@2x.png 2x , /assets/main/s6_mb@3x.png 3x`}
          alt="이미지"
        />
      ) : undefined}
    </div>
  );
}

export default Section6;
