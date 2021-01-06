import React, { useState, useCallback } from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
import Menu from "./components/Menu";
import { useLocation, useHistory } from "react-router-dom";
function Header() {
  const history = useHistory();
  const headerInfo = useSelector((state) => state.layouts.header);
  const Agent = useSelector((state) => state.layouts.userState);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const mobileHistory = useCallback(
    (url) => {
      history.push(url);
      setIsOpen(false);
    },
    [history]
  );
  return (
    <div
      className="header"
      style={{
        backgroundColor:
          Agent === "PC"
            ? location.pathname === "/"
              ? "#60e7a3"
              : "white"
            : isOpen
            ? "white "
            : "#60e7a3",
      }}
    >
      <div className="text_wrapper">
        <img
          src={`/assets/header/logo${
            Agent === "PC"
              ? location.pathname === "/"
                ? ""
                : "_color"
              : isOpen
              ? "_color"
              : ""
          }.svg`}
          alt="로고"
        />
        <div className="menu_wrapper">
          {Agent === "PC" ? (
            headerInfo.list.map((item, idx) => {
              return <Menu key={idx} data={item} />;
            })
          ) : (
            <img
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              src={`/assets/header/menu_${isOpen ? "grey" : "white"}.svg`}
              alt="메뉴"
              className="menu"
            />
          )}
        </div>
      </div>
      {Agent === "MB" ? (
        <div className="wrapper" style={{ opacity: isOpen ? 1 : 0 }}>
          {headerInfo.list.map((item, idx) => {
            return (
              <div
                className="menubox"
                key={idx}
                onClick={() => {
                  mobileHistory(item.url);
                }}
                style={{
                  color: location.pathname === item.url ? "#60e7a3" : "#a8a8a8",
                }}
              >
                {item.title}
              </div>
            );
          })}
        </div>
      ) : undefined}
    </div>
  );
}

export default Header;
