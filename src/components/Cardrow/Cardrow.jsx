import React from "react";
import "./Cardrow.css";
const Cardrow = ({
  title,
  amount,
  percent,
  month,
  image,
  increase,
  gradient,
}) => {
  return (
    <div className="wrapper grid-common">
      <div className="wrapper__container">
        <div className="container__icon">
          <div className={`img ${gradient}`}>
            <img src={image} alt="" />
          </div>
        </div>
        <div className="container__text">
          <h4 className="text__light">{title}</h4>
          <h2 className="text__amount">{amount}</h2>
          <h4 className="text__dark">
            {increase == true ? (
              <>
                <span className="text__green">{`↑${percent} `}</span>
              </>
            ) : (
              <>
                <span className="text__red">{`↓${percent} `}</span>
              </>
            )}
            this
            {month == true ? " Month" : " Week"}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Cardrow;
