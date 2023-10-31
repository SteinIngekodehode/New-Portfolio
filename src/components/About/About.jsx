
import React from "react";
import styled from "styled-components";



const AboutMe = () => {
  
    return (

<Container id="about">

<Texts>
    <h1>Om meg<span className="red"></span></h1>
    <p> Eg har bakgrunn i frå daglegvare, dei siste 9 åra som leiar/ butikksjef.
        Har alltid vore opptatt av å ha det ryddig og reint i mitt virke,
        det er noko eg prøver å overføre til eit framtidig arbeide som frontend-utviklar òg.
        Det eg synes er mest interessant for tida er React, og har eit sterkt ønske om å utvikle meg til å bli ein god kodar!
        Ellers er eg sjølverklært sportsidiot, med fotball som hovudsport og Liverpool som favorittklubb.
        

    </p>


</Texts>


</Container>



   )
 };

 export default AboutMe;

const Container = styled.div`

  display: flex;
  
    align-items: center;
  
  gap: 2rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const Texts = styled.div`

flex: 1;
h4 {
    font-family: Montserrat;
    color:#FF9912;
    font-size: 16px;
    letter-spacing: .2em;
    padding: 2rem 0;
   
    
  }
  h1 {
    font-family:Montserrat;
    line-height: 32px;
    letter-spacing: -0.05rem;
    font-weight: 900;
    font-size: 36px;
    padding-top: 1rem;
    text-align: center;
    padding-bottom: 2rem;
    color: #03002f;
  }
  h3 {
    color:#FF9912;
    font-weight: 500;
    font-size: 1.2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    text-transform: capitalize;
  }
  p {
    margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
    
    font-family: 'Montserrat';
    /*line-height: 36px;*/
    letter-spacing:0.01em;
    line-height: 25px;
    color: black;
    max-width: 80%;
    font-weight: 400;
    
  }


  .span {
    font-family: Montserrat;
    font-weight: 400;
  }
`;