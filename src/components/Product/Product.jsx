import React from "react";
import Part1 from "./components/Part1/Part1";
import Part2 from "./components/Part2/Part2";
import Part3 from "./components/Part3/Part3";
import Part4 from "./components/Part4/Part4";
import Part5 from "./components/Part5/Part5";
import Part6 from "./components/Part6/Part6";
import Part7 from "./components/Part7/Part7";
import Part8 from "./components/Part8/Part8";
import Part9 from "./components/Part9/Part9";
import Footer from "../Footer/Footer";

function Product() {
  return (
    <div className="product">
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
      <Part6 />
      <Part7 />
      <Part8 />
      <Part9 />
      <Footer />
    </div>
  );
}

export default Product;
