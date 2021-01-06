import React from "react";
import { Link, useLocation } from "react-router-dom";

function Menu({ data: { title, type, url } }) {
  const location = useLocation();
  return (
    <Link
      to={url}
      className="menu"
      style={{
        color:
          location.pathname === "/"
            ? "white"
            : location.pathname === url
            ? "#60e7a3"
            : "#a8a8a8",
        fontFamily: location.pathname === url ? "KoPub_Bold" : "KoPub_Medium",
      }}
    >
      {title}
    </Link>
  );
}

export default Menu;
