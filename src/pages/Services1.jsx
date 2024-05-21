import React from 'react'


import agileTeams from "../assets/realitylogo.png";
import "../styles/Home.css";
const Services1 = () => {
  return (
    <div  class="main">
      
      <h2>Our Services</h2>
        <p>This is the comprehensive list of services we provide to meet your needs</p>
        <div class="box_container">
            <div class="box">
                <img src={agileTeams} alt="" class="img"/>
                <h2>Fast-Check</h2>
                <p>Lorem, ipsum dolor sitri odio, ipsam dignissimos quidem enim nesciunt praesentium et!</p>
                
            </div>
            <div class="box">
                <img src={agileTeams} alt="" class="img"/>
                <h2>Source Credibility Analyse</h2>
                <p>Lorem, irum modi excepturi odio, ipsam dignissimos quidem enim nesciunt praesentium et!</p>
                
            </div>
            <div class="box">
                <img src={agileTeams} alt="" class="img"/>
                <h2>Natural Language Processing</h2>
                <p>Lorem, iisci laborum modi excepturi odio, ipsam dignissimos quidem enim nesciunt praesentium et!</p>
                
            </div>
            <div class="box">
                <img src={agileTeams} alt="" class="img"/>
                <h2>Plagiarism Detection</h2>
                <p>Lorem, iri odio, ipsam dignissimos quidem enim nesciunt praesentium et!</p>
                
            </div>
            <div class="box">
                <img src={agileTeams} alt="" class="img"/>
                <h2>Multilingual User Interface</h2>
                <p>Lorem,dem enim nesciunt praesentium et!</p>
                
            </div>
            <div class="box">
                <img src={agileTeams} alt="" class="img"/>
                <h2>Multilingual Search Index</h2>
                <p>Lorem,i laborum modi excepturi odio, ipsam dignisium et!</p>
                
            </div>
        </div>
    </div>
  )
}

export default Services1