import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Part6() {
  const layouts = useSelector((state) => state.layouts.product.part6);
  const Agent = useSelector((state) => state.layouts.userState);
  return (
    <div className="part6">
      <div className="title">
        아이퍼즐은 {Agent === "PC" ? undefined : <br />} 믿을 수 있습니다
        <img
          src={`/assets/product/p6_line${Agent === "PC" ? "" : "_mb"}.svg`}
          alt="밑줄"
          className="line"
        />
      </div>
      <div className="sub">
        {Agent === "PC"
          ? `아이퍼즐은 디자인출원부터 자체적인 기술에 대한 특허출원까지
체계적인 검증을 통해 만들어진 믿을 수 있는 제품입니다.`
          : `아이퍼즐은 디자인출원부터 자체적인 기술에
대한 특허출원까지 체계적인 검증을 통해
만들어진 믿을 수 있는 제품입니다.`}
      </div>
      <div className="wrapper">
        {layouts.map(({ title, img, mb }, idx) => {
          return (
            <div className="box" key={idx}>
              <img
                src={`/assets/product/${img}.png`}
                srcSet={`/assets/product/${img}@2x.png 2x , /assets/product/${img}@3x.png 3x`}
                alt="이미지"
              />
              <div className="box_title">
                {(idx === 2 || idx === 3) && Agent === "MB" ? mb : title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Part6;
