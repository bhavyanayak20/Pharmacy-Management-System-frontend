import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



const HomeCarousel = () => {
  return (
      <Carousel>
        <Carousel.Item>
          <img
            width={900} height={500} 
            className="d-block w-100"
            src="aa1.jpg"
            //src="a1.png/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>WELCOME TO NETMEDS</h1>
            <h3>Your Friendly Neighbourhood Pharmacy.</h3>
            <p>Developed By Bhavya</p>


          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
          width={900} height={500} 
            className="d-block w-100"
            //src="holder.js/800x400?text=Second slide&bg=282c34"
            src="e.png"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h1> YOUR HEALTH MATTERS </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={900} height={500} 
            className="d-block w-100"
            //src="holder.js/800x400?text=Third slide&bg=20232a"
            src="f.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h2>Get Medicines at the Right Price</h2>
            <p>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

export default HomeCarousel;