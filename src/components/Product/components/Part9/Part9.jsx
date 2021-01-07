import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Part9() {
  const Agent = useSelector((state) => state.layouts.userState);

  return (
    <div className="part9">
      <div className="top">
        <div className="wrapper">
          <div className="left">
            <div className="title">
              지금 바로 아이퍼즐을 {Agent === "PC" ? undefined : <br />}{" "}
              만나보세요
            </div>
            <div className="sub">
              지금 바로 네이버스토어팜에서 {Agent === "PC" ? undefined : <br />}{" "}
              아이퍼즐을 구매하실 수 있습니다
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
          className="p9_img"
          src={`/assets/product/p9_main${Agent === "PC" ? "" : "_mb"}.png`}
          srcSet={`/assets/product/p9_main${
            Agent === "PC" ? "" : "_mb"
          }@2x.png 2x , /assets/product/p9_main${
            Agent === "PC" ? "" : "_mb"
          }@3x.png 3x`}
          alt="이미지"
        />
      </div>
    </div>
  );
}

export default Part9;
