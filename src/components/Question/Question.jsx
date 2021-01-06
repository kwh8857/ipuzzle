import React from "react";
import "./css/index.css";
function Question() {
  return (
    <div
      className="question"
      style={{
        backgroundImage: `url(/assets/question/qa_back.png)`,
        height: `${parseInt(window.innerHeight - 70)}px`,
      }}
    >
      <div className="title">궁금하신 점이 있으신가요?</div>
      <div className="sub">
        아이퍼즐에 대해 궁금한 사항이 있다면 언제든지 문의해주세요
      </div>
      <div
        className="box"
        style={{
          backgroundColor: "white",
          color: "black",
          marginBottom: "18px",
        }}
      >
        <img src="/assets/question/google.svg" alt="구글" className="google" />
        <div className="box_title">메일로 문의히기</div>
        <div className="box_right">ipuzzle@ipuzzle.co.kr</div>
      </div>
      <a
        href="https://www.youtube.com/channel/UC3thrRHglHR8oUHOJ01LIMQ"
        className="box "
        style={{
          backgroundColor: "#383838",
          color: "white",
          cursor: "pointer",
        }}
      >
        <img
          src="/assets/question/yotube.svg"
          alt="유튜브"
          className="youtube"
        />
        <div className="box_title">Youtube</div>
        <div className="box_right">아이퍼즐 유튜브 바로가기</div>
      </a>
    </div>
  );
}

export default Question;
