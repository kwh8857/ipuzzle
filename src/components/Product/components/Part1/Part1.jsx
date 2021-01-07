import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Part1() {
  const Agent = useSelector((state) => state.layouts.userState);

  return (
    <div
      className="part1"
      style={{
        backgroundImage: `url(/assets/product/p1_back${
          Agent === "PC" ? "" : "_mb"
        }.png)`,
      }}
    >
      <div className="wrapper">
        <div className="title">
          이미지로 연결되는 <br /> 인지능력향상 디바이스 <br /> 아이퍼즐
          <br />
          <div className="sub">
            이미지를 연결하는 시각인지활동을 통한 <br /> 인지능력향상 교구
            아이퍼즐
          </div>
          <img src="/assets/product/p1_line.svg" alt="라인" />
        </div>
      </div>
    </div>
  );
}

export default Part1;
