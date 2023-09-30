import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import {AiOutlineUser} from "react-icons/ai";
// import 'bootstrap/dist/css/bootstrap.min.css';

import {GiGraduateCap} from "react-icons/gi"
import "../ScreenCSS/Navbar.css"
import sidelogo from "./Assets/control.png"
import person from "./Assets/user_8647311.png"
import education from "./Assets/icons8-graduate-50.png"
import exp from "./Assets/icons8-woman-at-computer-50.png"
import skl from "./Assets/icons8-skills-32.png"
import project from "./Assets/icons8-group-of-projects-64.png"
import mail from "./Assets/icons8-mail-24.png"
const Navbar=()=>{
    const [open,setOpen]=useState(true);
    const Menus=[
        {title:"About",source:{AiOutlineUser},to:"#"},
        // {title:"Education",src:{education},to:"#"},
        // {title:"Experience",src:{exp},to:"#"},
        // {title:"Skills",src:{skl},to:"#"},
        // {title:"Projects",src:{project},to:"#"},
        // {title:"Contact",src:{mail},to:"#"},
    ]

    return(
    <div className="flex sticky" id="sidenavig">
        <div className={`${open?"w-48":"w-20"} fixed h-screen duration-300`}id="sidenav">
            <img src={sidelogo} className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-none ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}>
            </img>
            <ul>
                {/* {Menus.map((Menu,index)=>(
                    <li key={index}>
                        <a href={Menu.to} className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
                        <img src=<Menu.source/> alt=".."/>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                        {Menu.title}
                        </span>
                        </a>
                        
                    </li>
                )
                
                )
                   

                } */}
                <li>
                    <a href="#" className="flex rounded-md p-2 mt-24 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
                        <img src={person} className="w-6 h-6 m-2 rounded-lg bg-indigo-200"></img>
                        <span className={`${!open && "hidden"} origin-left duration-200 relative`}>
                            Profile
                        </span>
                    </a>
                </li>
                <li>
                <a href="#" className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
                <img src={education} className="w-6 h-6 m-2 rounded-lg bg-indigo-200"></img>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Education
                        </span>
                    </a>

                </li>
                <li>
                <a href="#" className="flex rounded-md p-2 mt-12 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
                <img src={exp} className="w-6 h-6 m-2 rounded-lg bg-indigo-200"></img>
                        <span className={`${!open && "hidden"} origin-left duration-200 `}>
                            Experience
                        </span>
                    </a>

                </li>
                <li>
                <a href="#" className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
                <img src={skl} className="w-6 h-6 m-2 rounded-lg bg-indigo-200"></img>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Skills
                        </span>
                    </a>
                </li>
                <li>
                <a href="#" className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
                <img src={project} className="w-6 h-6 m-2 rounded-lg bg-indigo-200"></img>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Projects
                        </span>
                    </a>
                </li>
                <li>
                <a href="#" className="flex rounded-md p-2 mt-12 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
                <img src={mail} className="w-6 h-6 m-2 rounded-lg bg-indigo-200"></img>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Contact Me
                        </span>
                    </a>
                </li>
                
            </ul>

        </div>
      
        
    </div>
    );

};
export default Navbar;   