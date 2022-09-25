import React from "react";
import "./landing.css";
import "../../App.css";
import Bulits from "./Bulits";
import ContainerText from "./ContainerText";
import { useState } from "react";
function Landing() {
    const [active , setActive] = useState(false);
    const handelChange = ()=>{
        setActive(!active);
    }
  return (
    <div className="landing">
      <div className="container">
        <div className="logo">
          <img src="../../..//images/logo.png" />
        </div>
        <ul className ={active ? "links" : "hide"}   >
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="list" >
        <svg onClick={handelChange} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
        </div>
        <div className="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
      </div>

      <div className="overlay"></div>
      <div className="text">
        <ContainerText />
      </div>
      <div className="bulit-item" >
        <Bulits />
      </div>
    </div>
  );
}

export default Landing;
