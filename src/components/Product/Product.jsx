import React from "react";
import "./Product.css";
import { iconsImgs } from "../../utils/images";
const Product = () => {
  return (
    <div className="header grid-common">
      {" "}
      <div className="main-content-top">
        <div className="content-top-left">
          <h3 className="content-top-title">Product Sell</h3>
        </div>
        <div className="content-top-right">
          <div className="wrapper">
            <img src={iconsImgs.search} alt="" />
            <input type="text" placeholder="search" />
          </div>
        </div>
      </div>
      <div className="product_table">
        <table>
          <thead>
            <tr>
              <td className="grid-c-title-text">Product Name</td>
              <td className="grid-c-title-text">Stock</td>
              <td className="grid-c-title-text">Price</td>
              <td className="grid-c-title-text">Total Sales</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h4>
                  Abstract 3d
                  <br />
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, voluptatibus.
                </p>
              </td>
              <td>32 in stock</td>
              <td>$45.32</td>
              <td>20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
