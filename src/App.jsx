// src/App.js
import React from 'react';
import Slider from 'react-slick';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const App = () => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  return (
    <div>
      <header>
        <h1>Vraj Patel</h1>
        <p>Software Developer, +16478693340</p>
      </header>

      <section id="social-links">
        <h2>Connect with Me</h2>
        <div className="social-buttons">
          <a href="https://instagram.com/vrajnp" target="_blank" rel="noopener noreferrer" className="instagram-btn">Instagram</a>
          <a href="https://wa.me/16478693340" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">WhatsApp</a>
        </div>
      </section>

      <section id="gallery">
        <h2>Gallery</h2>
        <Slider {...sliderSettings} className="slider">
          <div><img src="/images/pic1.JPG" alt="Gallery Image 1" /></div>
          <div><img src="/images/pic2.JPG" alt="Gallery Image 2" /></div>
          <div><img src="/images/pic3.JPG" alt="Gallery Image 3" /></div>
        </Slider>
      </section>

            <div id="personal-info">
        <h2>About Me</h2>
        <p>I'm a software developer based in Canada.</p>
        <ul>
          <li><span class="label">Age:</span> <span class="value">23</span></li>
          <li><span class="label">Education:</span> <span class="value">Computer Programming From Seneca College, Toronto</span></li>
          <li><span class="label">Occupation:</span> <span class="value">Software Developer at VebCommerce</span></li>
          <li><span class="label">Location:</span> <span class="value">Edmonton, Canada</span></li>
          <li><span class="label">Hobbies:</span> <span class="value">Love traveling and playing cricket</span></li>
          <li><span class="label">Caste:</span> <span class="value">Kadva Patel</span></li>
        </ul>
      </div>


      <section id="family-information">
  <h2>Family Information</h2>
  <p>We are a warm and close-knit family, with strong values of respect, love, and support for each other.</p>
  
  <div class="family-cards">
    <div class="family-card">
      <img src="path/to/father-photo.jpg" alt="Father" class="profile-photo" />
      <h3>Nileshbhai Bhaskarbhai Patel</h3>
      <p><strong>Location:</strong> Ahmedabad</p>
    </div>
    
    <div class="family-card">
      <img src="path/to/mother-photo.jpg" alt="Mother" class="profile-photo" />
      <h3>Rinaben Nileshbhai Patel</h3>
      <p><strong>Location:</strong> Ahmedabad</p>
    </div>
    
    <div class="family-card">
      <img src="path/to/brother-photo.jpg" alt="Brother" class="profile-photo" />
      <h3>Vruti Patel</h3>
      <p><strong>Location:</strong> London, Canada</p>
    </div>
  </div>
</section>


      

      <footer>
        <p>© 2024 Vraj Patel</p>
      </footer>
    </div>
  );
};

export default App;
