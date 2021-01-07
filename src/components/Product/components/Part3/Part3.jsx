import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Part3() {
  const Agent = useSelector((state) => state.layouts.userState);
  return (
    <div className="part3">
      <div className="title">
        <span>이미지와 이미지를 {Agent === "PC" ? undefined : <br />}</span>{" "}
        <img src="/assets/product/p3_line.svg" alt="라인" className="line" />
        연결합니다
      </div>
      <div className="sub">
        그림부터 자신이 직접 찍은 가족의 사진까지 <br /> 아이퍼즐은 제한없이
        다양한 사진을 담고 연결하는 과정에서 <br /> 다양한 시각인지 조합활동을
        유도합니다
      </div>
      <img
        className="main_img"
        src={`/assets/product/p3_img${Agent === "MB" ? "_mb" : ""}.png`}
        srcSet={`/assets/product/p3_img${
          Agent === "MB" ? "_mb" : ""
        }@2x.png 2x , /assets/product/p3_img${
          Agent === "MB" ? "_mb" : ""
        }@3x.png 3x`}
        alt="이미지"
      />
    </div>
  );
}

export default Part3;
