import React from "react";
import "../ScreenCSS/Timeline.css"
import ecell from "../Components/Assets/ecell-removebg-preview - Copy.png"
const Timeline=()=>{
    return(
        <>
        <div className="Timeline-exp">
            <div className="timecontainer left-container">
                <img src={ecell} ></img>
                <div className="timetext">
                    <h2>E-Cell Jadavpur University</h2>
                    <small>April 2023-present</small>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea soluta qui aliquam deleniti quaerat illum aspernatur ipsum repellat commodi rem!</p>
                    <span className="left-cont-arrow">

                    </span>


                </div>

            </div>
            <div className="timecontainer right-container">
                <img src={ecell} ></img>
                <div className="timetext">
                    <h2>E-Cell Jadavpur University</h2>
                    <small>April 2023-present</small>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates eum repellendus quaerat, eveniet expedita, sapiente laboriosam est incidunt ipsum aliquid qui illum saepe nisi modi eos consequuntur ex? Magni, in?</p>
                    <span className="right-cont-arrow"></span>


                </div>

            </div>
            <div className="timecontainer left-container">
                <img src={ecell} ></img>
                <div className="timetext">
                    <h2>E-Cell Jadavpur University</h2>
                    <small>April 2023-present</small>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates eum repellendus quaerat, eveniet expedita, sapiente laboriosam est incidunt ipsum aliquid qui illum saepe nisi modi eos consequuntur ex? Magni, in?</p>
                    <span className="left-cont-arrow"></span>


                </div>

            </div>

        </div>

        </>
    );
};
export default Timeline;