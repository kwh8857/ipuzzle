import React from "react";
import "./css/index.css";
function Section2() {
  return (
    <div className="section2">
      <div className="wrapper">
        <div className="title">
          누구에게나 오랫동안 간직하고 싶은
          <br />
          <span>소중한 기억은 있습니다</span>
          <img
            src="/assets/main/s2_pc.png"
            srcSet="/assets/main/s2_pc@2x.png 2x , /assets/main/s2_pc@3x.png 3x"
            alt="이미지"
          />
        </div>

        <div className="greybox" />
      </div>
    </div>
  );
}

export default Section2;
