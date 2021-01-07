import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Part5() {
  const Agent = useSelector((state) => state.layouts.userState);
  return (
    <div className="part5">
      <div className="title">
        <span>기술과 가족을 {Agent === "PC" ? undefined : <br />}</span>{" "}
        연결합니다
        <img src="/assets/product/p4_line.svg" alt="밑줄" className="line" />
      </div>
      <div className="sub">
        아이퍼즐은 시니어층 시지각 인지 개선 등 <br /> 다양한 방면에서 전문적인
        연구를 진행합니다 <br /> 세상 모든 가족이 더 오래 행복할 수 있도록
        <br />
        <span> 아이퍼즐은 가족과 가족을 연결하는 디바이스입니다</span>
      </div>
      <div
        className="main_img"
        style={{
          backgroundImage: `url(/assets/product/p5_img${
            Agent === "PC" ? "" : "_mb"
          }.png)`,
        }}
      />
    </div>
  );
}

export default Part5;
