import "./hotel.css";
import Navbar from "../../camponents/navbar/Navbar";
import Header from "../../camponents/header/Header";
import MailList from "../../camponents/mailList/MailList";
import Footer from "../../camponents/footer/Footer";
import { imgs, svgs } from "../../img/img";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    { jpg: require("../../img/1.jpg") },
    { jpg: require("../../img/2.jpeg") },
    { jpg: require("../../img/3.jpg") },
    { jpg: require("../../img/4.jpg") },
    { jpg: require("../../img/5.jpg") },
    { jpg: require("../../img/6.jpg") },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);  
    setOpen(true);
  };

  const handleMove = (direction) =>{
    let newSlideNumber;
    if (direction==="l") {
      newSlideNumber= slideNumber === 0 ? 5 : slideNumber-1
    }else{
      newSlideNumber= slideNumber === 5 ? 0 : slideNumber+1

    }
    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
          <img src={svgs.dateSVG} alt="" className="close" onClick={()=>setOpen(false)} />
          <img src={svgs.dateSVG} alt="" className="arrow" onClick={()=>handleMove("l")} />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].jpg} alt="" className="sliderImg" />
          </div>
          <img src={svgs.dateSVG} alt="" className="arrow" onClick={()=>handleMove("r")} />
          </div>}  
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or book Now!</button>
          <h1 className="hotelTitel">Grand Hotel</h1>
          <div className="hotelAddress">
            <img src={svgs.resultSVG} alt="/" className="imgHotel" />
            <span>Elto St 125 New York</span>
          </div>
          <span className="hotelDistance">Excellent location - 500m from center</span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport texi
          </span>
          <div className="hotelImages">
            {photos.map((photo,i) => (
              <div className="hotelImgWrapper" key={i}>
                <img onClick={()=>handleOpen(i)} src={photo.jpg} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetaiTaxts">
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iste maxime, libero
                officia aliquam aspernatur maiores suscipit soluta consequuntur! Officiis nesciunt
                necessitatibus incidunt suscipit aliquid enim quam fuga voluptates cumque! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Autem iste maxime, libero officia
                aliquam aspernatur maiores suscipit soluta consequuntur! Officiis nesciunt
                necessitatibus incidunt suscipit aliquid enim quam fuga voluptates cumque! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Autem iste maxime, libero officia
                aliquam aspernatur maiores suscipit soluta consequuntur! Officiis nesciunt
                necessitatibus incidunt suscipit aliquid enim quam fuga voluptates cumque!
              </p>
            </div>
            <div className="hotelDetaiPrice">
              <h1>perfect for a 9-night stay!</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, libero 9.8!.
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book New!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
