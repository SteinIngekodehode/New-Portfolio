import React from 'react'
import styled from 'styled-components';

const Project = (props) => {
    const { img, disc, link } = props.item;
  return (
    <Container className='project'>
        <img src={img} alt="project" />
        <div className="disc">
           { /*<h1>Beskrivelse</h1>*/}
            <p>{disc}
            <a href={link}>Link</a>
            </p>
        </div>
    </Container>
  )
}

export default Project;

const Container = styled.div`
    height: 10rem;
    background-color:#03002f;
     
    margin: 0 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    /*cursor: pointer;*/
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 400ms ease-in-out;
    }
    .disc{
       
        position: absolute;
        right: 0;
        left: 0;
        bottom: -10rem;
        text-align: center;
        padding: 0.5rem;
        background: linear-gradient(rgba(0,0,0, 0.100), rgba(0,0,0, 0.80));
        transition: all 400ms ease-in-out;
        h1{
            font-size: 1rem;
            font-family: Arial;
            letter-spacing: 0.02rem;
            font-weight: 600;
            
        }
    
        p{
            width: 90%;
            font-size: 0.8rem;
            color: white;
            a{
                margin-left: 0.4rem;
                color: var(--lighter);
               
            }
        }
    }

    :hover > img{
        transform: scale(1.3);
    }

    :hover > .disc{
        bottom: 0;
    }

}
`