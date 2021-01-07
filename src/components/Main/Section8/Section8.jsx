import React from "react";
import "./css/index.css";
import YouTube from "react-youtube";
import { useSelector } from "react-redux";
function Section8() {
  const Agent = useSelector((state) => state.layouts.userState);
  return (
    <div className="section8">
      <div className="wrapper">
        <div className="top">
          더욱 생생한 아이퍼즐을 {Agent === "PC" ? undefined : <br />}만나보세요
          :)
        </div>
        <YouTube
          videoId="-9orwvFH0fo"
          opts={
            Agent === "PC"
              ? {
                  width: "1134px",
                  height: "636px",
                }
              : {
                  width: "360px",
                  height: "202px",
                }
          }
        />
      </div>
    </div>
  );
}

export default Section8;
