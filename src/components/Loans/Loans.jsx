import { iconsImgs } from "../../utils/images";
import "./Loans.css";

const Loans = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c7">
      <div className="grid-pie-title">
        <h3 className="grid-c-title-text">Customers</h3>
        <h3 className="grid-c-title-text">Customer that buy products</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} />
        </button>
      </div>
      <div className="grid-c7-content">
        <div className="content__progress" style={{ position: "relative" }}>
          <div class="progress">
            <progress value="75" min="0" max="100">
              75%
            </progress>
          </div>
          <div className="content__text">
            <h3 className="text__amount">65%</h3>
            <p className="text_dark">
              Total New <br />
              Customer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loans;
