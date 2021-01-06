import React from "react";
import "./css/index.css";
import YouTube from "react-youtube";
function Section8() {
  return (
    <div className="section8">
      <div className="wrapper">
        <div className="top">더욱 생생한 아이퍼즐을 만나보세요 :)</div>
        <YouTube
          videoId="-9orwvFH0fo"
          opts={{
            width: "1134px",
            height: "636px",
          }}
        />
      </div>
    </div>
  );
}

export default Section8;
