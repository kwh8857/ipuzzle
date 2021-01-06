import React from "react";
import "./css/index.css";
function Part7() {
  return (
    <div className="part7">
      <div className="title">
        아이퍼즐은 함께합니다
        <img src="/assets/product/p7_line.svg" alt="라인" className="line" />
      </div>
      <div className="sub">
        아이퍼즐은 믿을 수 있는 기업 및 기관들과 함께하여 <br /> 믿을 수 있는
        제품을 만들기 위해 노력하고 있습니다
      </div>
      <div className="wrapper">
        <div className="top">
          <img
            className="one"
            src={`/assets/product/p7_1.png`}
            srcSet={`/assets/product/p7_1@2x.png 2x , /assets/product/p7_1@3x.png 3x`}
            alt="이미지"
          />
          <img
            className="two"
            src={`/assets/product/p7_2.png`}
            srcSet={`/assets/product/p7_2@2x.png 2x , /assets/product/p7_2@3x.png 3x`}
            alt="이미지"
          />
          <img
            className="three"
            src={`/assets/product/p7_3.png`}
            srcSet={`/assets/product/p7_3@2x.png 2x , /assets/product/p7_3@3x.png 3x`}
            alt="이미지"
          />
        </div>
        <div className="bottom">
          <img
            className="four"
            src={`/assets/product/p7_4.png`}
            srcSet={`/assets/product/p7_4@2x.png 2x , /assets/product/p7_4@3x.png 3x`}
            alt="이미지"
          />{" "}
          <img
            className="five"
            src={`/assets/product/p7_5.png`}
            srcSet={`/assets/product/p7_5@2x.png 2x , /assets/product/p7_5@3x.png 3x`}
            alt="이미지"
          />
        </div>
      </div>
    </div>
  );
}

export default Part7;
