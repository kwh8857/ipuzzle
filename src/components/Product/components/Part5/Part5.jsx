import React from "react";
import "./css/index.css";
function Part5() {
  return (
    <div className="part5">
      <div className="title">
        <span>기술과 가족을</span> 연결합니다
        <img src="/assets/product/p4_line.svg" alt="밑줄" className="line" />
      </div>
      <div className="sub">
        아이퍼즐은 시니어층 시지각 인지 개선 등 <br /> 다양한 방면에서 전문적인
        연구를 진행합니다 <br /> 세상 모든 가족이 더 오래 행복할 수 있도록
        <br />
        <span> 아이퍼즐은 가족과 가족을 연결하는 디바이스입니다</span>
      </div>
      <img
        className="main_img"
        src="/assets/product/p5_img.png"
        srcSet="/assets/product/p5_img@2x.png 2x , /assets/product/p5_img@3x.png 3x"
        alt="이미지"
      />
    </div>
  );
}

export default Part5;
