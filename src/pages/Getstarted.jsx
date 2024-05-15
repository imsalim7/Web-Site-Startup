import React from 'react'

import "../styles/getstarted.css";
import real from "../assets/realitylogo.png";
import search from "../assets/search.png";
import mic from "../assets/mic.png";

function Getstarted() {
  return (
    <div class="search-section">
<img src={real} alt="" width="272px" height="92px" class="logo"/>
        <form action="">
            <div class="search-panel">
                <div><img src={search} alt="magnifier image" srcset=""/></div>
                <input type="search" name="" id="" placeholder="Search Google or type a URL"/>
                <div><img src={mic} alt="microphone image" srcset=""/></div>
            </div>
            <div class="search-buttons">
                <input type="button" value="Google Search"/>
                
            </div>
           
            
        </form>
        <div class="search-buttons">
        <div class="box">
                <img src={mic} alt="" class="img"/>
                <h2>Fast-Check</h2>
                <p>Lorem, ipsum dolor sitri odio, ipsam dignissimos quidem enim nesciunt praesentium et!</p>
                
            </div>
            <div class="box">
                <img src={mic} alt="" class="img"/>
                <h2>Fast-Check</h2>
                <p>Lorem, ipsum dolor sitri odio, ipsam dignissimos quidem enim nesciunt praesentium et!</p>
                
            </div>
            <div class="box">
                <img src={mic} alt="" class="img"/>
                <h2>Fast-Check</h2>
                <p>Lorem, ipsum dolor sitri odio, ipsam dignissimos quidem enim nesciunt praesentium et!</p>
                
            </div>
            </div>
      
    </div>
  )
}

export default Getstarted