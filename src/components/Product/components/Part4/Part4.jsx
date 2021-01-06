import React from "react";
import "./css/index.css";
function Part4() {
  return (
    <div className="part4">
      <div className="title">
        <span>추억과 기억을</span> 연결합니다
        <img src="/assets/product/p4_line.svg" alt="밑줄" className="line" />
      </div>
      <div className="sub">
        퍼즐을 완성하고 그 사진에 담긴 영상을 확인해보세요 <br /> 사진에서 더
        나아가 영상을 통해 추억과 기억을 담을 수 있습니다.
      </div>
      <div className="wrapper">
        <div className="number">
          <div className="circle">1</div>
          <div className="content">완성된 퍼즐을 아이퍼즐 APP에 인식하기</div>
        </div>
        <div className="number">
          <div className="circle">2</div>
          <div className="content">
            인식이 완료되면 그 안에 담긴 영상이 재생됩니다
          </div>
        </div>
      </div>
      <div
        className="img_wrapper"
        style={{ backgroundImage: `url("/assets/product/p4_img.png")` }}
      >
        <div className="greybox" />
      </div>
    </div>
  );
}

export default Part4;
