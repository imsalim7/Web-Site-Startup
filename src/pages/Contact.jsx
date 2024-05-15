import React from 'react'
import "../styles/Contact.css";

function Contact() {
  return (
    <div >
<div class="gooddd">
        
    </div>

    <div class="content1">
    
        <div class="contact1">
            <div class="other1">
                <div class="info1">
                    <div class="service1">
                        <h2>Our Services </h2>
                        <h4>Software Developement</h4>
                        <h4>Apps</h4>
                        <h4>Website</h4>
                        <h4>Game</h4>
                        <h4>Web Designing</h4>

                    </div>
                    <h2>More Methods </h2>
                    <h3>Email</h3>
                    <div class="svg-wrap">
                        <a href="mailto:Semtecxs@isp.com">    Fakesite@gmail.com</a>
                    </div>
                    
                    
                    
                        </div>
                </div>
            </div>
            <div class="form1">
                <h1>Get In Touch</h1>
                <form action="https://api.web3forms.com/submit" method="POST" class="contact-left">
                <input type="hidden" name="access_key" value="93c207cd-2295-41be-bbb0-0fc9fa24e651"/>
                    <div class="flex-rev1">
                        <input type="text" placeholder="mr Hemil" name="name" id="name" />
                        <label for="name">Full Name</label>
                    </div>
                    <div class="flex-rev1">
                        <input type="email" placeholder="Semtecxs@isp.com" name="email" id="email" />
                        <label for="email">Your Email</label>
                    </div>

                    <div class="flex-rev1">
                        <textarea placeholder="I have an idea for a project...." name="message" id="message"></textarea>
                        <label for="message">Email Message</label>
                    </div>
                    <button className='awwww'>Send Email</button>
                </form>
            </div>
        </div>
    </div>


    
  )
}

export default Contact