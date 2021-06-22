import React, { useEffect, useRef } from 'react';
import "./intro.scss";
import { init } from 'ityped'

const Intro = () => {
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current,
             { showCursor: false, 
               backDelay:1500,
               backSpeed:60,
               showCursor:true,
               strings: ['Designer', 'Developer','Mern stack Developer' ] })

    },[])
    return (
        <div className="intro" id="intro">
            <div className="left">
        <div className="imgContainer">
            <img src="assets/man.png" alt="developer"/>
        </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>hi there,I am</h2>
                    <h1>Faizan Ahmad</h1>
                    <h3>freelancer <span ref={textRef}></span></h3>
                   <a  href="assets/resume.pdf"><button className="btn">Download CV</button></a>
                </div>
                <a href="#portfolio" className="arrow-d">
             <img src="assets/down.png" alt="down"/>

                </a>
            </div>
        
        </div>
    )
}

export default Intro;
