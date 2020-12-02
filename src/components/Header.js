import React, { useEffect } from 'react';
import './Header.module.css';

const Header = () => {
    const [scrolled,setScrolled]=React.useState(false);

    const handleScroll = () => {
      const offset = window.scrollY;
      if(offset > 140 ) setScrolled(true);
      else setScrolled(false);
    }
  
    useEffect(() => {
      window.addEventListener('scroll',handleScroll)
    })
    let rowStyle = ["rowStyle"];
    if(scrolled){
      rowStyle.push("scrolled");
    }
    return (
      <div style = {{width: "100%", backgroundColor:"white"}}>
          <div className = "headContainer">
            <h1 className = "headStyle">LeetCode - Predictor</h1>
            <h3>Weekly Contest 211</h3>
          </div>
          <div className = {rowStyle.join(" ")}>
            <p className = "cellStyle"style = {{width: "10%"}}>Rank</p>
            <p className = "handleStyle">Handle</p>
            <p className = "cellStyle"style = {{width: "20%"}}>Rating</p>
            <p className = "cellStyle"style = {{width: "20%"}}>Delta</p>
            <p className = "cellStyle"style = {{width: "20%"}}>Predicted Rating</p>
          </div>
      </div> 
    );
}

export default Header;
