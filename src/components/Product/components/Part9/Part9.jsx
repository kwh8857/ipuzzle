import React from "react";
import "./css/index.css";
function Part9() {
  return (
    <div className="part9">
      <div className="top">
        <div className="wrapper">
          <div className="left">
            <div className="title">지금 바로 아이퍼즐을 만나보세요</div>
            <div className="sub">
              지금 바로 네이버스토어팜에서 아이퍼즐을 구매하실 수 있습니다
            </div>
          </div>
          <div className="right">
            제품 구매하기
            <img
              src="/assets/product/p9_arrow.svg"
              alt="화살표"
              className="arrow"
            />
          </div>
        </div>
      </div>
      <div className="bottom">
        <img
          className="main"
          src={`/assets/product/p9_main.png`}
          srcSet={`/assets/product/p9_main@2x.png 2x , /assets/product/p9_main@3x.png 3x`}
          alt="이미지"
        />
      </div>
    </div>
  );
}

export default Part9;
