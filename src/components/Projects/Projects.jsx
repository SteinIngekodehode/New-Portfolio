import React from 'react'
import styled from 'styled-components';
import SliderComp from './Slider';
import { Zoom } from 'react-awesome-reveal';

const Projects = () => {
  return (
    <Container id='project'>
        <Zoom>
            <h1><span className="kontakt">Prosjekter</span></h1>
            <p>Oversikt over oppgaver og prosjekter eg har jobbet med sidan oppstart av Kodehode.</p>
        </Zoom>
        <Slide>
            <SliderComp/>
        </Slide>
    </Container>
  )
}

export default Projects;

const Container = styled.div`

    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
    h1{
        /*font-size: 1.9rem;*/
        font-family: Montserrat;
      
  
    letter-spacing: -0.05rem;
    font-weight: 900;
    font-size: 36px;
    
 
  
    color: #03002f;
        
    }

    p{
        font-family: montserrat;
        color: white;
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    
`

const Slide = styled.div``