import React ,{useEffect, useState} from 'react'
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import {
    FeaturedPortfolio,
    ReactPortfolio,
    NodePortfolio,
    MernPortfolio,
    DesignPortfolio,

} from "../../Data";

const Portfolio = () => {
    const [selected,setSelected] = useState("featured");
    const [data,setData] = useState([]);
    const list = [
        {
            id:"featured",
            title:"Featured",

        },
        {
            id:"React",
            title:"React Project",

        },
        {
            id:"Node",
            title:"Node Project",

        },
       
        {
            id:"Mern",
            title:"Mern Project",

        },
        {
            id:"design",
            title:"Design Project",

        },

    ]
    useEffect(()=>{

        switch(selected){
            case "featured":
                setData(FeaturedPortfolio);
                break;
                case "React":
                    setData(ReactPortfolio);
                    break;
                    case "Node":
                        setData(NodePortfolio);
                        break;
                        case "Mern":
                            setData(MernPortfolio);
                            break;
                            case "design":
                                setData(DesignPortfolio);
                                break;
                                default:
                                    setData(FeaturedPortfolio);
        }
       
    },[selected])
    return (
        <div className="portfolio" id="portfolio">
            
            <h1>Portfolio</h1>
            <ul>
              {
                  list.map((item)=>(
                   <PortfolioList title={item.title}
                    active={selected === item.id}
                    id={item.id}
                    setSelected={setSelected}
                    
                    />
                  ))
              } 
            </ul>
            <div className="container">
                {
                    data.map((d)=>(
                        
                     <a href={d.linkProject} > <div className="card">
                         <img src={d.image} alt="amazoneclone" />
                          <h3>{d.title}</h3>
                        </div>  </a>
                        
                    ))
                }
               
                
        </div>   
               
                
               
          </div>
    )
}

export default Portfolio
