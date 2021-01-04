import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
import Menu from "./components/Menu";
function Header() {
  const headerInfo = useSelector((state) => state.layouts.header);
  return (
    <div className="header">
      <img src="/assets/header/logo.svg" alt="로고" />
      <div className="menu_wrapper">
        {headerInfo.list.map((item, idx) => {
          return <Menu key={idx} data={item} />;
        })}
      </div>
    </div>
  );
}

export default Header;
