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
          <div><img src="/images/PIC4N.jpeg" alt="Gallery Image 5" /></div>
          <div><img src="/images/PIC5N.jpeg" alt="Gallery Image 6" /></div>


        </Slider>
      </section>

            <div id="personal-info">
        <h2>About Me</h2>
        <p>Jay Shree Krishna, I’m Vraj Patel, a software developer based in Canada, working with Vebcommerce. 
          I enjoy exploring technology, love the challenges of my work, and value family and strong relationships. I’m looking forward to building a future with someone who shares a similar outlook on life and growth.</p>
        <ul>
          <li><span class="label">Age:</span> <span class="value">23</span></li>
          <li><span class="label">Education:</span> <span class="value">Computer Programming From Seneca College, Toronto</span></li>
          <li><span class="label">Occupation:</span> <span class="value">Software Developer at VebCommerce</span></li>
          <li><span class="label">Location:</span> <span class="value">Edmonton, Canada</span></li>
          <li><span class="label">Home Town:</span> <span class="value">Mobha</span></li>
          <li><span class="label">Hobbies:</span> <span class="value">Love traveling and playing Cricket</span></li>
          <li><span class="label">Caste:</span> <span class="value">42 Gam Charotar Kadva Patidar</span></li>
        </ul>
      </div>


  <section id="family-information">
  <h2>Family Information</h2>
  
  <div class="family-cards">
    <div class="family-card">
      <img src="/images/Papa.JPG" alt="Father" class="profile-photo" />
      <h3>Nileshbhai Bhaskarbhai Patel</h3>
      <p><strong>Ahmedabad</strong></p>
    </div>
    
    <div class="family-card">
      <img src="/images/Mom.JPG" alt="Mother" class="profile-photo" />
      <h3>Rinaben Nileshbhai Patel</h3>
      <p><strong>Ahmedabad</strong></p>
    </div>
    
    <div class="family-card">
      <img src="/images/Vruti.JPG" alt="Brother" class="profile-photo" />
      <h3>Vruti Patel</h3>
      <p><strong>London, Canada</strong></p>
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
