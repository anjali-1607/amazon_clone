import React from "react";

export default function Cards4() {
  return (
    <>
      <div className="section3_grand p-2">
        <div>
          You might also like
          <button type="button" className="btn btn-link">
            see your deals
          </button>
        </div>
        <div id="carouselExample2" class="carousel slide">
          <div class="carousel-inner text-center">
            <div class="carousel-item active">
              <div className="sect3_imgCont row">
                <div className="col">1</div>
                <div className="col">2</div>
                <div className="col">3</div>
                <div className="col">4</div>
                <div className="col">5</div>
                <div className="col">6</div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="sect3_imgCont row ">
                <div className="col">11</div>
                <div className="col">12</div>
                <div className="col">13</div>
                <div className="col">14</div>
                <div className="col">15</div>
                <div className="col">16</div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="sect3_imgCont row">
                <div className="col">21</div>
                <div className="col">22</div>
                <div className="col">23</div>
                <div className="col">24</div>
                <div className="col">25</div>
                <div className="col">26</div>
              </div>
            </div>
          </div>
          <button
            class="a_cc carousel-control-prev "
            type="button"
            data-bs-target="#carouselExample2"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="a_cc carousel-control-next"
            type="button"
            data-bs-target="#carouselExample2"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
