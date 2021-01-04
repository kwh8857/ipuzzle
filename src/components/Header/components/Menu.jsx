import React from "react";

function Menu({ data: { title, type } }) {
  return <div className="menu">{title}</div>;
}

export default Menu;
