import React from "react";
import "./css/index.css";
function Part2() {
  return (
    <div className="part2">
      <div className="title">
        <span>언제 어디서나 간편하게</span> 휴대할 수 있는 사이즈
        <img className="line" src="/assets/product/p2_line.svg" alt="밑줄" />
      </div>
      <div className="sub">
        두손에 들어오는 휴대하기 좋은 사이즈로 <br /> 집에서도, 외출할 때도 언제
        어디서나 사용할 수 있습니다
      </div>
      <img
        className="main_img"
        src="/assets/product/p2_img.png"
        srcSet="/assets/product/p2_img@2x.png 2x , /assets/product/p2_img@3x.png 3x"
        alt="이미지"
      />
    </div>
  );
}

export default Part2;
