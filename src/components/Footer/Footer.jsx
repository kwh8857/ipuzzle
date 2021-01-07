import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Footer() {
  const Agent = useSelector((state) => state.layouts.userState);

  return (
    <div className="footer">
      <div className="wrapper">
        {Agent === "MB" ? (
          <img src="/assets/main/footer_mb.svg" alt="로고" />
        ) : undefined}
        <div className="content">
          아이퍼즐 | 사업자등록번호 123-12-12345 | 대표 곽창섭 <br /> 대구광역시
          중구 중앙로 123-1 | ipuzzle @naver.com
        </div>
      </div>
    </div>
  );
}

export default Footer;
