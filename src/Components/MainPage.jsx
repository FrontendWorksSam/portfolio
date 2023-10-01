import React from "react";
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FlipCard from "./Flipcard.jsx";
import {BsArrowRightCircle} from "react-icons/bs";
import "../ScreenCSS/MainPage.css"
import { useState,useEffect } from "react";
import Container from 'react-bootstrap/Container';
import ju from "../Components/Assets/ju.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Timeline from "./Timeline.jsx";
// import '../ScreenCSS/MainPage.css'
const MainPage=({FlipCard,Timeline})=>{
    const [loopNum,setLoopNum]=useState(0);
    const [isDeleting,setIsDeleting]=useState(false);
    const toRotate=["Web Developer","Competitive Programmer","Machine Learning enthusiast"];
    const [text,setText]=useState("");
    const [delta,setDelta]=useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period=2000;
    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])
    const tick=()=>{
        let i=loopNum%toRotate.length;
        let fullText=toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);
    
    if(isDeleting){
        setDelta(prevDelta=>prevDelta/2);

    }
    if(!isDeleting && updatedText===fullText){
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
    }else if(isDeleting && updatedText===""){
        setIsDeleting(false);
        setLoopNum(loopNum+1);
        setIndex(1);
        setDelta(500);

    } else {
        setIndex(prevIndex => prevIndex + 1);
    }
}
    return(
        <div className="flex flex-col" id="mainbg">
            <section className="banner" id="Profile">
                <Container>
                    <div className="items-center flex-wrap flex-row">
                        <div xs={12} md={6} xl={7}>
                            <TrackVisibility>
                            {({ isVisible }) =>
                              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{`Hi , I am Shamoyita`}</h1>
                                <span className="wrap"><h2>{text}</h2></span>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad neque labore est quas alias optio? Reiciendis nemo hic deserunt facilis fuga quia corrupti corporis, cupiditate cum a repellendus autem.</p>
                                <button onClick={()=>console.log('connect')}>Let's Connect!<BsArrowRightCircle size={25}/></button>


                              </div>

                            }
                            </TrackVisibility>
                            

                        </div>
                        <div xs={12} md={6} xl={5} className="ml-auto mr-auto mt-2 top-0" >
                            <div id="profcard"className="ml-auto mr-auto" >
                            
                            <FlipCard/>
                            

                        

                            </div>
                        


                        </div>
                            
                        
                        
                    </div>
                </Container>
                

            </section>
            <section className="edu " id="Education">
                <div className="card mb-3" id="educard">
                    <div className="row g-0">
                        <div className="col-md-4 m-auto">
                            <img src={ju} className="img-fluid rounded-start" alt="..."></img>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text " id="footertext"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="exp" id="Experience">
                <Timeline/>
                

            </section>
            <section className="projects"id="myprojects">

            </section>
        </div>

    );

}
export default MainPage;