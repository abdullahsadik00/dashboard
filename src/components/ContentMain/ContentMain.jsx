import React from "react";
import Report from "../Report/Report";
import "./ContentMain.css";
import Loans from "../Loans/Loans";
import { overviews } from "../../data/data";
import Product from "../Product/Product";
import Cardrow from "../Cardrow/Cardrow";
const ContentMain = () => {
  return (
    <div className="main-content-holder">
      <div className="content-grid-row-1_3">
        {overviews.map((overview) => (
          <div key={overview.title}>
            <Cardrow
              title={overview.title}
              amount={overview.amount}
              percent={overview.percent}
              month={overview.month}
              image={overview.image}
              increase={overview.increase}
              gradient={overview.grad}
            />
          </div>
        ))}
      </div>
      <div className="content-grid-2_3">
        <Report />
        <Loans />
      </div>
      <div className="content-grid-row-1">
        <Product />
      </div>
    </div>
  );
};

export default ContentMain;
