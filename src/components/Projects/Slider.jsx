import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';




let data = [

{
  img : "https://i.postimg.cc/Dz0bXz42/frontend-mentor-calc.png",
  disc : "Frontend Mentor oppgave",
  link : "https://github.com/SteinIngekodehode/frontendmentor-calculator"
},

 {
      img : "https://cdn.pixabay.com/photo/2017/08/30/23/41/football-2698969_1280.jpg",
      disc : "Nettside med data frå Premier League",
      link : "https://github.com/SteinIngekodehode/PremierLeague-App"
},
    {
        img : "https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_1280.jpg",
        disc : "Oppgave frå Diggit.io, mobilapplikasjon av katalog med kaffitypar",
        link : "https://github.com/SteinIngekodehode/coffeeApp"
    },
      
];

let settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #ffbf00;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    font-size: 20px;
    left: -1rem;
  }

  .next{
    font-size: 20px;
  }
`