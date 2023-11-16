import React from "react";
import "./Homecard.css";
import Cards from "./section1/Cards";
import Cards2 from "./section2/Cards2";

export default function Homecard() {
  return (
    <>
      <div className="a_main11">
        <div className="a_main2 ">
          <Cards />
          <Cards2 />
        </div>
      </div>
    </>
  );
}
