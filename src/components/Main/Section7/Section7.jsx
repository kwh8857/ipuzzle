import React from "react";
import "./css/index.css";
function Section7() {
  return (
    <div
      className="section7"
      style={{ backgroundImage: `url(/assets/main/s7_back.png)` }}
    >
      <div className="wrapper">
        <div className="left">
          아이퍼즐에 대해 더 알아보고 싶으신가요?
          <br />
          <span>
            아이퍼즐에 대해 더 알아보고싶다면 제품 상세내용을 확인해주세요
          </span>
        </div>
        <div className="right">
          제품상세보기
          <img className="arrow" src="/assets/main/s7_arrow.svg" alt="화살표" />
        </div>
      </div>
    </div>
  );
}

export default Section7;
