import React, { useState } from 'react'
import "./work.scss";

const Work = () => {
    const [currentSlide,setCurrentSlide] = useState(0)
    const data = [
        {
            id:1,
            icon:"./assets/mobile.png",
            title:"Node App",
            desc:"It is weather app.i have created this wonderful weather app by using node js",
            img:"./assets/mobileapp.jpg",
        },
        {
            id:2,
            icon:"./assets/globe.png",
            title:"React website ",
            desc:"It i react webites project.i have created this wonderful landing page by using react js",
            img:"./assets/e.jpg",
        },
        {
            id:3,
            icon:"./assets/writing.png",
            title:"Mern App",
            desc:"It is Contact Book.i have created this wonderful contact book  by using Mern Stack",
            img:"./assets/d.jpg",
        },
    ]
    const handleClick =(way)=>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1  : 2):
        setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0)

    };
    return (
        <div className="work" id="work">
            <div className="slider" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
                {
                    data.map((d)=>(

                   
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="leftImage">
                                    <img src={d.icon} alt="mobile" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} />
                        </div>
                    </div>
                </div>
                 ))
                }
            </div>
          <img src="assets/arrow.png" alt="" className="arrow left" onClick={()=>handleClick("left")} />
          <img src="assets/arrow.png" alt="" className="arrow right" onClick={()=>handleClick()}/>
        </div>
    )
}

export default Work;
