import React from "react";
import "./Carousel.css";
import Homecard from "../homecards/Homecard";

export default function Carousel() {
  return (
    <>
      <div className="a_main">
        <div className="a_main1">
          <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img12/home-improvement/Store/JUPITER23/Gateway/rec_3000__a._CB575626988_.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://m.media-amazon.com/images/I/91dFtNr9M6L._SX3000_.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/jup23p3/recpchero/PC-1WA1_3000_2._CB575256014_.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev">
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next">
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <Homecard />
      </div>
    </>
  );
}
