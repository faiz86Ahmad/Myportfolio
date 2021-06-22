import React from 'react';
import "./topbar.scss";
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';

const Topbar = ({menuOpen,setMenuOpen}) => {
    return (
        <div className={"topbar " + (menuOpen && "active") }>
            <div className="wrapper">
            <div className="left">
           <a href="#intro" className="logo">FaizTechnical</a>
           <div className="itemContainer">
               <PersonIcon className="icon" />
               <span>+91-7088494023/+91-9368983634</span>
           </div>
           <div className="itemContainer">
               <MailIcon className="icon" />
               <span>faizan89ahmad@gmail.com</span>
           </div>
            </div>
            
            <div className="right">
          <div className="humburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
          </div>
            </div>
            </div>
        </div>
    )
}

export default Topbar
