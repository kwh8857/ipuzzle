import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Part8() {
  const layouts = useSelector((state) => state.layouts.product.part8);
  return (
    <div className="part8">
      {layouts.map(({ title, sub, bold, img }, idx) => {
        return (
          <div
            className="section"
            key={idx}
            style={{
              height: idx === 0 ? "626px" : "782px",
              backgroundImage: `url(/assets/product/${img}.png)`,
            }}
          >
            <div
              className="wrapper"
              style={{
                height: idx === 0 ? "626px" : "782px",
                alignItems: idx === 1 ? "flex-end" : "flex-start",
                color: idx === 0 ? "white" : "black",
              }}
            >
              <div
                className="title"
                style={{ width: idx === 1 ? "372px" : undefined }}
              >
                {title}
              </div>
              <div className="sub">
                {sub} <br />
                <span>{bold}</span>{" "}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Part8;
