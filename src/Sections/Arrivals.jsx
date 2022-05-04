import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { shopData } from '../shopData';

const Section = styled.section`
  min-height:100vh;
  width:100vw;
  margin:0 auto;
  position:relative;

  display:flex;
  justify-content:center;
  align-items:center;

  @media (max-width:600px){
    min-height:0;
    flex-direction:column;
  }

  @media (max-width:1024px){
    justify-content:space-between;
  }
`;

const Title = styled.h1`
  font-size:${(props) => props.theme.fontxxxl};
  font-family:'Kaushan Script';
  font-weight:100;
  text-shadow:1px 1px 1px ${(props) => props.theme.body};
  color:${(props) => props.theme.body};
  position:absolute;
  left:5%;
  top:1rem;
  z-index:2;

  @media (max-width:600px){
    position:relative;
  }
`;

const TextContainer = styled.div`
  position:absolute;
  right:10px;
  width:20%;
  font-family:'Sirin Stencil';
  font-weight:300;
  height:50vh;
  top:2rem;

  @media (max-width:1024px){
    position:relative;
    font-size:${(props) => props.theme.fontxl};
    width:40vw;
    height:auto;
  }

  @media (max-width:600px){
    position:relative;
    top:0;
    height:auto;
    width:80vw;

    font-size:${(props) => props.theme.fontxl};
    padding-top:15px;
  }
  
`;
const ImagesContainer = styled.div`
  position:absolute;
  top:0%;
  left:50%;
  transform:translate(-50%,0);
  width:25vw;
  height:90vh;
  border:1px solid ${(props) => props.theme.body};
  z-index:1;
  overflow:auto;
  padding:0 3rem;

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;

  @media (max-width:1024px){
    position:relative;
    left:0;
    transform:translate(0,0);
    width:40vw;
  }

  @media (max-width:600px){
    position:relative;
    left:0;
    transform:translate(0,0);
    width:60vw;
  }
`;

const CardContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin:2rem 0;

  img{
    width:100%;
    height:auto;
  }

  p{
    font-size:${(props) => props.theme.fontmd};
    font-family:'Sirin Stencil';
    color:${(props) => props.theme.body};
    font-weight:700;
    padding-top:10px;
  }

`;

const Item = ({ data }) => {
  return (
    <CardContainer>
      <img src={data.img} alt="img" />
      <p>{data.name}</p>
    </CardContainer>
  );
};

const TextDesc = ({ pc }) => {
  return (
    <>
      {pc ? (
        <TextContainer
          data-scroll
          data-scroll-sticky
          data-scroll-target="#arrival"
        >
          There is new collection available for cool clothes in all sizes. This
          collection is a great way to find a new look for you. It offers a
          variety of cool apparel styles to fit your taste, while you can also
          find some cool clothes that you can wear everyday.
          <br />
          <br />
          The first line of clothing you will see on this collection is for men.
          The collection also includes three new styles for women.
          <br />
          <br />
          Give it a try and experience a new look.
        </TextContainer>
      ) : (
        <TextContainer data-scroll data-scroll-target="#arrival">
          There is new collection available for cool clothes in all sizes. This
          collection is a great way to find a new look for you. It offers a
          variety of cool apparel styles to fit your taste, while you can also
          find some cool clothes that you can wear everyday.
          <br />
          <br />
          The first line of clothing you will see on this collection is for men.
          The collection also includes three new styles for women.
          <br />
          <br />
          Give it a try and experience a new look.
        </TextContainer>
      )}
    </>
  );
};

export default function Arrivals() {
  const [onpc, setOnpc] = useState(true);

  useEffect(() => {
    if (document.body.offsetWidth < 1024) {
      setOnpc(false);
    } else {
      setOnpc(true);
    }
  }, []);

  return (
    <Section data-scroll-section id="arrival">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        New Arrivals
      </Title>

      <ImagesContainer drag="x">
        <Item data={shopData[9]} />
        <Item data={shopData[0]} />
        <Item data={shopData[1]} />
        <Item data={shopData[3]} />
      </ImagesContainer>

      <TextDesc pc={onpc} />
    </Section>
  );
}
