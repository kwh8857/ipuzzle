import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Part6() {
  const layouts = useSelector((state) => state.layouts.product.part6);
  return (
    <div className="part6">
      <div className="title">
        아이퍼즐은 믿을 수 있습니다
        <img src="/assets/product/p6_line.svg" alt="밑줄" className="line" />
      </div>
      <div className="sub">
        아이퍼즐은 디자인출원부터 자체적인 기술에 대한 특허출원까지 <br />
        체계적인 검증을 통해 만들어진 믿을 수 있는 제품입니다.
      </div>
      <div className="wrapper">
        {layouts.map(({ title, img }, idx) => {
          return (
            <div className="box" key={idx}>
              <img
                src={`/assets/product/${img}.png`}
                srcSet={`/assets/product/${img}@2x.png 2x , /assets/product/${img}@3x.png 3x`}
                alt="이미지"
              />
              <div className="box_title">{title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Part6;
