import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Section10() {
  const Agent = useSelector((state) => state.layouts.userState);
  return (
    <div className="section10">
      <div className="wrapper">
        <div className="title">
          궁금하신 점이 {Agent === "PC" ? undefined : <br />} 있으신가요?
        </div>
        <div className="sub">
          아이퍼즐에 대해 궁금한 사항이 있다면
          {Agent === "PC" ? undefined : <br />} 언제든지 문의해주세요
        </div>
        <div className="btn">
          지금 바로 문의하기
          <img src="/assets/main/s10_arrow.svg" alt="화살" />
        </div>
      </div>
    </div>
  );
}

export default Section10;
