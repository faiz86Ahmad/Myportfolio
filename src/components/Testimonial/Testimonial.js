import React from 'react';
import "./testimonial.scss";

const Testimonial = () => {
    const data = [
        {
            id:1,
            name:"Alex",
            icon:"./assets/twitter.png",
            position:"CEO of ALBI",
            desc:"Lorem ipsum dolor sit amet consequtar adipiscing elite.Delite ullam nemo,in sdiquater.lorem hider divder opsem lilly adesquesting",
            img:"./assets/c-b.jpg",
            
            
        },
        {
            id:2,
            name:"Simon",
            icon:"./assets/linkedin.png",
            position:"CEO of DELKA",
            desc:"Lorem ipsum dolor sit amet consequtar adipiscing elite.Delite ullam nemo,in sdiquater.lorem hider divder opsem lilly adesquesting",
            img:"./assets/jackob.jpg",
            featured:true,
            
            
        },
        {
            id:3,
            name:"Jackob",
            icon:"./assets/youtube.png",
            position:"CEO of ALIBABA",
            desc:"Lorem ipsum dolor sit amet consequtar adipiscing elite.Delite ullam nemo,in sdiquater.lorem hider divder opsem lilly adesquesting",
            img:"./assets/simon.jpg",
            
            
        },
    ]
    return (
        <div className="testimonial" id="testimonial">
            <h1>Testimonial</h1>
            <div className="container">
                {
                    data.map((d)=>(

                   
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="arrow" />
                        <img src={d.img} alt="man-1" className="user" />
                        <img src={d.icon}  className="right"  />
                    </div>
                    <div className="center">
                        <p>{d.desc}
                        </p>
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.position}</h4>
                    </div>
                </div>
                 ))
}
            </div>
    
        </div>
    )
}

export default Testimonial
