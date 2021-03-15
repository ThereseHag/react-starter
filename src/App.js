import React from "react";
import Links from "./Links";
import "./index.css";

export const App = () => {
  return (
    <>
    <footer className="main-container">
    
        <div className="small-ellipse"></div>

        <div className="another-ellipse"></div>
        
        <div className="ellipse1"></div>
        <div className="ellipse2"></div>
        <div className="rectangle"></div>
       
        <ul className="footer-links">
          <Links item="About" />
          <Links item="Careers" />
          <Links item="Pricing" />
          <Links item="Feedback" />
          <Links item="Roadmap" />
        </ul> 
      
        </footer>
    
    </>
  );
};
