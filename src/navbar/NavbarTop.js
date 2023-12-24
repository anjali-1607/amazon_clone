import React from "react";
import "./Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function NavbarTop() {
  return (
    <>
      <div className="a_header_top ">
        <button className="top_nav_btn1">
          <img src={require("./amazon_logo.png")} className="amazon_nav_logo" />
        </button>
        <button className="top_nav_btn2">
          <div className="nav_btn2_1">Deliver to</div>
          <div className="nav_btn2_2">
            {" "}
            <i className="bi bi-geo-alt  location_icon_nav"></i>India
          </div>
        </button>
        <div className="nav_search_all"></div>
        <button className="top_nav_btn3"></button>
        <button className="top_nav_btn4"></button>
        <button className="top_nav_btn5">
          <div className="btn5_returns">Returns</div>
          <div className="btn5_orders">& Orders</div>
        </button>
        <button className="top_nav_btn6"></button>
      </div>
    </>
  );
}
