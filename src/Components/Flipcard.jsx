import React from "react";
import "../ScreenCSS/FlipCard.css"
// import sam from "./Assets/shamoyita.jpeg"

const FlipCard=()=>{

    return(
        <div className="containercard">
      <div className="cardprofile">
        <div className="front">
          <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Lamborghini/Revuelto/9770/1680237730530/front-left-side-47.jpg?tr=w-456" />
          <div className="details">
            <h2 id="cardheading">Rosa Richards</h2>
            <span>Developer</span>
          </div>
        </div>
        <div className="back">
          <a href="#" className="icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="icon">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  

    );
};
export default FlipCard;