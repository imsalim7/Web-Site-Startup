import React from 'react'

import "../styles/getstarted.css";
import real from "../assets/realitylogo.png";
import search from "../assets/bouteflika.png";
import mov from "../assets/vaccin.png";
import san from "../assets/faketweet.webp";
import mic from "../assets/mic.png";

function Getstarted() {
  return (
    <div class="search-section">
<img src={real} alt="" width="272px" height="92px" class="logo"/>
        <form action="">
            <div class="search-panel">
                
                <input type="search" name="" id="" placeholder="Search  or type a URL"/>
                <div><img src={mic} alt="microphone" srcset=""/></div>
            </div>
            <div class="search-buttons">
                <input type="button" value="Search"/>
                
            </div>
           
            
        </form>
        <div class="container">
        <div class="column">
        <a href="https://www.cnbc.com/id/100646197" class="column">
        <img src={san} alt="News 2"/>
            <div class="text">
                <h2>Anyone that follows the Associated Press...</h2>
                <p>Two Explosions in the White House and Barack Obama is injured</p>
            </div>
            </a>
        </div>
        <div class="column">
        <a href="https://www.bbc.com/news/world-africa-56269634" class="column">
            <img src={search} alt="News 2"/>
            <div class="text">
                <h2>The presidency of the Algerian Republic...</h2>
                <p>Algeria: More rumours about the death of President Bouteflika</p>
            </div>
           </a> 
        </div>
        <div class="column">
        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9533200/" class="column">
            <img src={mov} alt="News 3"/>
            <div class="text">
                <h2>Claims on social media that the Covid va...</h2>
                <p>Covid: Claims vaccinations harm fertility unfounded</p>
            </div>
            </a>
        </div>
    </div>
      
      
    </div>
  )
}

export default Getstarted