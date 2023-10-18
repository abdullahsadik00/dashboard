import React from "react";
import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
const ContentTop = () => {
  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <h3 className="content-top-title">Hello Shahrukh 👋,</h3>
      </div>
      <div className="content-top-right">
        <div className="wrapper">
          <img src={iconsImgs.search} alt="" />
          <input type="text" placeholder="search" />
        </div>
      </div>
    </div>
  );
};

export default ContentTop;
