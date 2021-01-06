import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Section7() {
  const Agent = useSelector((state) => state.layouts.userState);
  return (
    <div
      className="section7"
      style={{
        backgroundImage: `url(/assets/main/s7_back${
          Agent === "PC" ? "" : "_mb"
        }.png)`,
      }}
    >
      <div className="wrapper">
        <div className="left">
          아이퍼즐에 대해 더{Agent === "PC" ? undefined : <br />} 알아보고
          싶으신가요?
          <br />
          <div className="sub">
            아이퍼즐에 대해 더 알아보고싶다면
            {Agent === "PC" ? undefined : <br />}제품 상세내용을 확인해주세요
          </div>
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
