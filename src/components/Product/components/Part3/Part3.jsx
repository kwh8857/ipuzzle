import React from "react";
import "./css/index.css";
function Part3() {
  return (
    <div className="part3">
      <div className="title">
        <span>이미지와 이미지를</span> 연결합니다
      </div>
      <div className="sub">
        그림부터 자신이 직접 찍은 가족의 사진까지 <br /> 아이퍼즐은 제한없이
        다양한 사진을 담고 연결하는 과정에서 <br /> 다양한 시각인지 조합활동을
        유도합니다
      </div>
      <img
        className="main_img"
        src="/assets/product/p3_img.png"
        srcSet="/assets/product/p3_img@2x.png 2x , /assets/product/p3_img@3x.png 3x"
        alt="이미지"
      />
    </div>
  );
}

export default Part3;
