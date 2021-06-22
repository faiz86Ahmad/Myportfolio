import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonial/Testimonial";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu";
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="App">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="section">
     <Intro />
     <Portfolio />
     <Work />
     <Testimonial />
     <Contact />
     
     </div>
     
    </div>
  );
}

export default App;
