import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Part8() {
  const layouts = useSelector((state) => state.layouts.product.part8);
  const Agent = useSelector((state) => state.layouts.userState);
  return (
    <div className="part8">
      {layouts.map(({ title, sub, bold, img }, idx) => {
        return (
          <div
            className="section"
            key={idx}
            style={{
              height:
                Agent === "PC"
                  ? idx === 0
                    ? "626px"
                    : "782px"
                  : idx === 0
                  ? "291px"
                  : idx === 1
                  ? "366px"
                  : "364px",
              backgroundImage: `url(/assets/product/${img}${
                Agent === "MB" ? "_mb" : ""
              }.png)`,
            }}
          >
            <div
              className="wrapper"
              style={{
                height:
                  Agent === "PC"
                    ? idx === 0
                      ? "626px"
                      : "782px"
                    : idx === 0
                    ? "291px"
                    : idx === 1
                    ? "366px"
                    : "364px",
                alignItems:
                  Agent === "PC"
                    ? idx === 1
                      ? "flex-end"
                      : "flex-start"
                    : "flex-start",
                color:
                  Agent === "PC" ? (idx === 0 ? "white" : "black") : "white",
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
                <span>{bold}</span>
                <img
                  style={{
                    width:
                      Agent === "PC"
                        ? undefined
                        : idx === 0
                        ? "167.8px"
                        : idx === 1
                        ? "198.8px"
                        : "208.1px",
                  }}
                  src={`/assets/product/${img}_line${
                    Agent === "PC" ? "" : "_mb"
                  }.svg`}
                  alt="라인"
                  className="line"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Part8;
