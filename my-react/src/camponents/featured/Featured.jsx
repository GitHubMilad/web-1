import "./featured.css";
import { imgs, svgs } from "../../img/img";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={imgs.jpg1} alt="n" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={imgs.jpg2} alt="n" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={imgs.jpg3} alt="n" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
