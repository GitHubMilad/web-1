import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { imgs, svgs } from "../../img/img";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="header">
      <div className={type === "list" ? "headerContaner listMode" : "headerContaner"}>
        <div className="headerList">
          <div className="headerListitem active">
            <img className="imgDeb" src={svgs.bedSVG} alt="img" />
            <span>stays</span>
          </div>
          <div className="headerListitem">
            <img className="imgDeb" src={svgs.bedSVG} alt="img" />
            <span>stays</span>
          </div>
          <div className="headerListitem">
            <img className="imgDeb" src={svgs.bedSVG} alt="img" />
            <span>stays</span>
          </div>
          <div className="headerListitem">
            <img className="imgDeb" src={svgs.bedSVG} alt="img" />
            <span>stays</span>
          </div>
          <div className="headerListitem">
            <img className="imgDeb" src={svgs.bedSVG} alt="img" />
            <span>stays</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">Lorem ipsum dolor sit amet consectetur.</h1>
            <p className="headerDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolore unde eos,
              laudantium incidunt id.
            </p>
            <button className="headerBtn">sign in / register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <img className="imgDeb" src={svgs.bedSVG} alt="img" />
                <input
                  type="text"
                  placeholder="where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <img className="imgDeb" src={svgs.dateSVG} alt="img" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].startDate,
                  "MM/dd/yyyy"
                )} `}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <img className="imgDeb" src={svgs.resultSVG} alt="img" />
                <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">
                  {`${options.adult} adult .${options.children} children .${options.room} room`}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="optionsItem">
                      <span className="optionsText">Adult</span>
                      <div className="optionsCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionsCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionsCounterNumber">{options.adult}</span>
                        <button
                          className="optionsCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionsItem">
                      <span className="optionsText">children</span>
                      <div className="optionsCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionsCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionsCounterNumber">{options.children}</span>
                        <button
                          className="optionsCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionsItem">
                      <span className="optionsText">Room</span>
                      <div className="optionsCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionsCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionsCounterNumber">{options.room}</span>
                        <button
                          className="optionsCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
