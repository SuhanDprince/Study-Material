import React from 'react';
import './Carousel.css';

const Carousel = () => {
  return (
    <div className="carousel">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg2dcu33P8uKMSj7dA0JYPSyyABowXQ2HlUg&s"
       
        alt="Environment 1"
        className="carousel-img"
      />
      <img
       src="https://image-static.collegedunia.com/public/college_data/images/appImage/14723_RGMCET_NEW.jpg?h=260&w=360&mode=crop"
        alt="Environment 2"
        className="carousel-img"
      />
      <img
        src="https://www.targetadmission.com/img/colleges/newc/8215-207101.jpg"
        alt="Environment 3"
        className="carousel-img"
      />
    </div>
  );
};

export default Carousel;
