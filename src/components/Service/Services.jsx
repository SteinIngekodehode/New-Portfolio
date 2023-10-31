import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";


const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
       
        <h4>
           <span className="tjenester">Ferdigheter</span>
        </h4>
        <h1>Hva jeg har lært så langt</h1>
       
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"CSS"}
            disc={` `}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"HTML"}
            disc={``}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Javascript"}
            disc={``}
          />
          
        </Slide>

        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"React"}
            disc={` `}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Vite"}
            disc={``}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Github"}
            disc={``}
          />
          
        </Slide>
      
      
      </Cards>
    
    </Container>
  );
};

export default Services;

const Container = styled.div`
  background-color:
  width: 80%;
  max-width: 1020px;
  margin: 0 auto;
  padding: 3rem 0;
  padding-bottom:4rem;
  @media (max-width: 840px) {
    width: 90%;
  }

  .tjenester {
    color: #FF9912;
  }

  h1 {
    font-family:Montserrat;
    line-height: 36px;
    letter-spacing: 0;
    font-weight: 900;
    font-size: 42px;
    padding-top: 1rem;
    color: #03002f;
  }
`;
const Cards = styled.div`
  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
