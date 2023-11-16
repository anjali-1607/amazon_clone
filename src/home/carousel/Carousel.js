import React from "react";
import "./Carousel.css";
import Homecard from "../homecards/Homecard";

export default function Carousel() {
  return (
    <>
      <div className="a_main">
        <div className="a_main1">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img12/home-improvement/Store/JUPITER23/Gateway/rec_3000__a._CB575626988_.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://m.media-amazon.com/images/I/91dFtNr9M6L._SX3000_.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/jup23p3/recpchero/PC-1WA1_3000_2._CB575256014_.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev h-50"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev">
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next h-50"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next">
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <Homecard />
      </div>
    </>
  );
}
