import React from "react";
import "./Card3.css";

export default function Cards3() {
  return (
    <>
      <div className="section1_grand">
        <div className="section3_div1">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="section3_imgcont">
                  <img src={require("./images/img1.jpg")} />
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…HJpUqgkruSjEdcjmoTuWNmPTpiu0qVjEG4f7a5SpUEn//2Q=="
                  className="d-block w-50 h-50"
                  alt="img2"
                />
              </div>
              <div className="carousel-item">
                <img src=".." className="d-block w-100" alt="img3" />
              </div>
            </div>
            <button
              className="carousel-control-prev h-100"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev">
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
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
      </div>
    </>
  );
}
