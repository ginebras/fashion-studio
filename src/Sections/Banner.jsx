import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  position:relative;
  min-height:100vh;
  width:80vw;
  margin:0 auto;

  display:flex;
  justify-content:center;
  align-items:center;
`;

const Container = styled.div`
  min-height:100vh;

  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  align-items:center;
`;

const Title = styled.h1`
  font-size:${(props) => props.theme.fontxxl};
  font-family:'Kaushan Script';
  color:${(props) => props.theme.text};
  text-transform:uppercase;
  white-space:nowrap;
  line-height:1;

  @media (max-width:1024px){
    font-size:${(props) => props.theme.fontxl};
  }

  @media (max-width:600px){
    font-size:${(props) => props.theme.fontmd};
  }
  
  span{
    background-color:${(props) => props.theme.body};
    padding:1rem 2rem;
    display:block;
  }
  
`;

export default function Banner() {
  return (
    <Section data-scroll-section id="banner">
      <Container>
        <Title
          data-scroll
          data-scroll-speed="8"
          data-scroll-direction="horizontal"
          data-scroll-target="#banner"
        >
          <span>Fashion is the armour</span>
        </Title>
        <Title
          data-scroll
          data-scroll-speed="-6"
          data-scroll-direction="horizontal"
          data-scroll-target="#banner"
        >
          <span>to survive the reality of everyday life</span>
        </Title>
        <Title
          data-scroll
          data-scroll-speed="6"
          data-scroll-direction="horizontal"
          data-scroll-target="#banner"
        >
          <span>One is never over-dressed or</span>
        </Title>
        <Title
          data-scroll
          data-scroll-speed="-4"
          data-scroll-direction="horizontal"
          data-scroll-target="#banner"
        >
          <span>Under-dressed</span>
        </Title>
        <Title
          data-scroll
          data-scroll-speed="4"
          data-scroll-direction="horizontal"
          data-scroll-target="#banner"
        >
          <span>with a Little Black Dress</span>
        </Title>
      </Container>
    </Section>
  );
}
