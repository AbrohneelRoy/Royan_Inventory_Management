// LandingPage.js
import React from 'react';
import Navbar from './Navbar';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import './assests/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-body">
      <Navbar />
      <div className="landing-container">
        <div className="landing-header" id="home">
          <h1>Welcome to Royan Inventory Management</h1>
        </div>
        <div className="landing-main-content">
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <div className="land1">
            <h1>About Us</h1>
            <p>Welcome to Royan Inventory Management, where efficiency meets precision in managing your business's inventory needs. 
              Our dedicated team is passionate about providing innovative solutions to streamline and optimize your inventory processes.</p>
          </div>
          <div className="land2">
            <h1>Our Mission</h1>  
            <p>At Royan, our mission is to empower businesses of all sizes with robust inventory management tools. We understand
              the challenges of maintaining an organized and efficient inventory system, and we're here to simplify the process for you.</p>
          </div>   
          <div className="land3">
            <h2>What Sets Us Apart</h2>
            <ul>
              <li>1. Expertise: With years of experience in the industry, our team brings a wealth of knowledge in inventory management. 
                We stay ahead of industry trends and technological advancements to provide you with cutting-edge solutions.</li>
              <li>Tailored Solutions: We recognize that every business is unique. That's why we offer customizable solutions
                to cater to the specific needs and scale of your operations. Whether you're a small start-up or an established enterprise, 
                we have the right tools for you.</li>
              <li>User-Friendly Interface: Our user-friendly interfaces are designed to be intuitive and easy to navigate. Say goodbye 
                  to complicated systems that take hours to learn. With Royan, you'll be up and running in no time.</li>
              <li>Automation: Efficiency is at the heart of what we do. Leverage the power of automation to reduce manual tasks, 
                  minimize errors, and enhance the overall accuracy of your inventory data.</li>
            </ul>
          </div>  
          <div className="land4">
            <h1>Our Commitment</h1>
            <p>We are committed to helping businesses thrive by providing them with the tools they need to manage their inventory effectively. 
              Our dedicated support team is always ready to assist you, ensuring a seamless experience with our products.</p>
            <p>Explore the future of inventory management with Royan. 
              Join us on this journey towards a more efficient and organized business operation.</p>  
          </div>    
        </div>
      </div>
      <div className="landing-footer" id="footer">
        <div className="landing-contact-info">
          <p>Email: abc@gmail.com</p>
          <p>Phone: 9078675634</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
