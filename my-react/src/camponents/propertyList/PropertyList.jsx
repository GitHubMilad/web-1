import "./propertyList.css"
import {svgs, imgs} from "../../img/img"

const propertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src={imgs.jpg1} alt="" className="pListImg" />
            <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>233 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={imgs.jpg2} alt="" className="pListImg" />
            <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>233 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={imgs.jpg3} alt="" className="pListImg" />
            <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>233 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={imgs.jpg4} alt="" className="pListImg" />
            <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>233 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={imgs.jpg5} alt="" className="pListImg" />
            <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>233 Hotels</h2>
            </div>
        </div>
    </div>
  )
}

export default propertyList