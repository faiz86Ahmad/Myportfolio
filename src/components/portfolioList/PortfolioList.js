import React from 'react'
import "./Portfolio.scss";

const PortfolioList = ({title,active,id,setSelected}) => {
    return (
        <li className={active ? "portfoliolist active" :"portfoliolist" } 
        onClick={()=>setSelected(id)}
        >
            {title}
        </li>
    )
}

export default PortfolioList;
