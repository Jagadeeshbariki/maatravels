import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarasoleImage from './CarasoleImage';
import CarouselData from './Carousel_config.json';

const Carasole = () => {
  return (
    <Carousel>
    {/* <Carousel.Item interval={1000}>
      <CarasoleImage text="First slide" imgUrl="https://www.mywestford.com/wp-content/uploads/2016/04/tour-1.jpg" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <CarasoleImage text="Second slide" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRl72yZa0-F1zuTWJNzwQjvojNS2F_e6pp7A&s"/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <CarasoleImage text="Third slide" imgUrl="https://www.financialexpress.com/wp-content/uploads/2022/02/Kerala-Tourism-01.jpg"/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item> */}

    {
        CarouselData.map((CarouselItem)=>{
            return <Carousel.Item interval={CarouselItem.Intervel} key={CarouselItem.CarText}>
                <CarasoleImage text={CarouselItem.CarText} imgUrl={CarouselItem.ImgUrl} />
                <Carousel.Caption>
                    <h3>{CarouselItem.CarLable}</h3>
                    <p>{CarouselItem.ImgDescription}</p>
                </Carousel.Caption>
            </Carousel.Item>
        })
    }
  </Carousel>
  )
}

export default Carasole
