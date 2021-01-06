import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Section5() {
  const Agent = useSelector((state) => state.layouts.userState);
  return (
    <div className="section5">
      <div className="top">
        <div className="wrapper">
          <div className="title">추억이 담긴 사진을 퍼즐로 담아 함께하세요</div>
          <img className="logo" src="/assets/main/s5_logo.svg" alt="로고" />
          <img
            className="main_img"
            src="/assets/main/s5_img.png"
            srcSet="/assets/main/s5_img@2x.png 2x , /assets/main/s5_img@3x.png 3x"
            alt="이미지"
          />
        </div>
      </div>
      <img
        className="bottom_img"
        src="/assets/main/s5_main.png"
        srcSet="/assets/main/s5_main@2x.png 2x , /assets/main/s5_main@3x.png 3x"
        alt="이미지"
      />
    </div>
  );
}

export default Section5;
