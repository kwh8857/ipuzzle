import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Section2() {
  const Agent = useSelector((state) => state.layouts.userState);

  return (
    <div className="section2">
      <div className="wrapper">
        <div className="title">
          누구에게나 오랫동안 간직하고 싶은
          <br />
          <span>
            <img className="line" src="/assets/main/s2_line.svg" alt="밑줄" />
            소중한 기억은 있습니다
          </span>
          <img
            src={`/assets/main/s2_${Agent === "PC" ? "pc" : "mb"}.png`}
            srcSet={`/assets/main/s2_${
              Agent === "PC" ? "pc" : "mb"
            }@2x.png 2x , /assets/main/s2_${
              Agent === "PC" ? "pc" : "mb"
            }@3x.png 3x`}
            alt="이미지"
          />
        </div>

        {Agent === "PC" ? <div className="greybox" /> : undefined}
      </div>
    </div>
  );
}

export default Section2;
