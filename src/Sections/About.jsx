import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  position:relative;
  min-height:100vh;
  width:80vw;
  margin:0 auto;
  display:flex;
  z-index:5;

  @media (max-width:1024px){
    width:90vw;
  }

  @media (max-width:600px){
    width:100vw;
  }
`;

const Title = styled.h1`
  font-size:${(props) => props.theme.fontBig};
  font-weight:300;
  font-family:'Kaushan Script';
  position:absolute;

  top:1rem;
  left:5%;
  z-index:5;
`;

const Left = styled.div`
  width:50%;
  font-family:'Sirin Stencil';
  font-size:${(props) => props.theme.fontlg};
  font-weight:300;
  position:relative;
  margin-top:20%;
  z-index:5;

  @media (max-width:1024px){
    width:80%;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%) !important;

    font-weight:600;
    backdrop-filter:blur(2px);
    background-color:${(props) => `rgba(${props.theme.textRgba},0.4)`};

    padding:2rem;
    margin:0 auto;
    border-radius:20px;
  }

  @media (max-width:1024px){
    font-size:${(props) => props.theme.fontxl};
  }

  @media (max-width:600px){
    font-size:${(props) => props.theme.fontsm};
    width:70%;
  }
`;

const Right = styled.div`
  width:50%;
  position:relative;

  img{
    width:100%;
    height:auto;
    z-index:1;
  }

  .img1{
    width:20vw;
    right:28rem;
    top:25%;
    position:absolute;
  }

  .img2{
    width:20vw;
    position:absolute;
    top:20%;
    right:-100px;
  }

`;

const Para = styled.p`
z-index:10;

`;

export default function About() {
  return (
    <Section id="about" data-scroll-section>
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Us
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#about">
        <Para>
          We're fashion studio based in california. We create unique designs
          that will blow your mind. We also design unique jewellary pieces.
          Fashion is an ART that can not be grasped by everyone.
          <br />
          <br />
          We are very dedicated to making our products. We offer unique and
          creative products to a wide range of people. We have a variety of
          styles, but for most people, all of the options are in the box. We
          specialize in making things that make you happy.
          <br />
          <br />
          We strive to build on our vision. As a fashion label, we do our best
          to create amazing experiences for all people. We are always looking to
          make something that is easy for everyone.
        </Para>
      </Left>
      <Right>
        <img
          data-scroll
          src="https://images.unsplash.com/photo-1650784422759-48fa68555c0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
          alt="about us"
        />

        <img
          data-scroll
          data-scroll-speed="5"
          src="https://images.unsplash.com/photo-1649479792996-9c55793fa700?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY4fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="about us"
          className="img1"
        />

        <img
          data-scroll
          data-scroll-speed="-2"
          src="https://images.unsplash.com/photo-1649239609980-854cc2116f42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="about us"
          className="img2"
        />
      </Right>
    </Section>
  );
}
