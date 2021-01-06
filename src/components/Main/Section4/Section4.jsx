import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Section4() {
  const layouts = useSelector((state) => state.layouts.main.s4);
  return (
    <div className="section4">
      <div className="top">
        <div className="top_title">
          시간이 지나면 흐려질 수 밖에 없는 소중한 기억, <br />
          <span>
            소중하기에 더 오래 간직되어야 할 <br /> 추억에 집중했습니다
          </span>
          <img className="line" src="/assets/main/s4_line.svg" alt="밑줄" />
        </div>
      </div>
      <div className="bottom">
        {layouts.map(({ img, title, sub }, idx) => {
          return (
            <div
              className={img}
              key={idx}
              style={{ backgroundColor: idx !== 1 ? "#f5f5f5" : undefined }}
            >
              <div className="bottom_wrapper">
                <div className="imgwrapper">
                  <img
                    src={`/assets/main/${img}.png`}
                    srcSet={`/assets/main/${img}@2x.png 2x , /assets/main/${img}@3x.png 3x`}
                    alt="이미지"
                  />
                </div>
                <div className="bottom_right">
                  <div className="bottom_title">{title}</div>
                  <div className="bottom_sub">{sub}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Section4;
