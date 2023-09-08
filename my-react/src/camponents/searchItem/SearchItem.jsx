import "./searchItem.css";
import { imgs, svgs } from "../../img/img";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src={imgs.jpg1} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Feee airport txti</span>
        <span className="siSubtitle">Stubio Apartment with Air conditioing</span>
        <span className="siFeatures">Entire studio • 1 bathroom • 21m² 1full bed</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">Yo can cancel later, so lock in this great price today!</span>
        
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailtexts">
          <span className="siprice">$123</span>
          <span className="sitaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">see availadility</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
