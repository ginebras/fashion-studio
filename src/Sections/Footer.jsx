import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import Svg from '../assets/star-white.svg';

const Section = styled.section`
  min-height:100vh;
  width:100vw;
  margin:5rem auto;

  background-color:${(props) => props.theme.body};
  color:${(props) => props.theme.text};

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  position:relative;

  @media (max-width:1024px){
    min-height:50vh;
  }

  @media (max-width:600px){
    min-height:110vh;
  }
`;

const LogoContainer = styled(motion.div)`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  img{
    width:10vw;
    height:auto;
  }

  h3{
    font-size:${(props) => props.theme.fontxxl};
    font-family:'Kaushan Script';
  }
`;

const FooterComponent = styled(motion.div)`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:100vw;
`;

const ListLinks = styled.ul`
  width:70%;
  list-style:none;

  display:flex;
  align-items:center;
  justify-content:space-between;

  border-top:1px solid ${(props) => props.theme.text};
  border-bottom:1px solid ${(props) => props.theme.text};
  padding:2rem;

  @media (max-width:600px){
    flex-direction:column;
    gap:10px;
  }
`;

const ListItem = styled(motion.li)`
  color:${(props) => props.theme.text};
  font-family:'Sirin Stencil';
  font-weight:500;
  font-size:${(props) => props.theme.fontlg};
  text-transform:uppercase;
  cursor:pointer;
  transition:all 0.3s ease;
`;

const BottomContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  position:relative;
  width:75%;

  span{
    font-family:'Sirin Stencil';
    font-size:${(props) => props.theme.fontlg};
    font-weight:300;
    position:absolute;

    @media (max-width:600px){
      padding-top:15px;
    }

    a{
      padding:0 0.4rem;
      color:${(props) => props.theme.text};
    }
  }

  @media (max-width:600px){
    flex-direction:column;
  }

  &>*:first-child{
    left:0;
    top:3rem;
    
    @media (max-width:600px){
      position:static;
    }
  }

  &>*:last-child{
    right:0;
    top:3rem;

    @media (max-width:600px){
      position:static;
    }
  }
`;

export default function Footer() {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(`#${id}`);
    console.log(elem);

    scroll.scrollTo(elem, {
      offset: '-100',
      duration: '2000',
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Section data-scroll-section>
      <LogoContainer
        initial={{ y: '150px' }}
        whileInView={{ y: '-100px' }}
        transition={{
          duration: 1.5,
        }}
      >
        <img src={Svg} alt="svg" />
        <h3>Nyxx studios</h3>
      </LogoContainer>

      <FooterComponent
        initial={{ y: '-440px' }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ListLinks>
          <ListItem
            onClick={() => handleScroll('home')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Home
          </ListItem>
          <ListItem
            onClick={() => handleScroll('about')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            about
          </ListItem>
          <ListItem
            onClick={() => handleScroll('shop')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            shop
          </ListItem>
          <ListItem
            onClick={() => handleScroll('arrival')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            new arrival
          </ListItem>
          <ListItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            look books
          </ListItem>
          <ListItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            reviews
          </ListItem>
        </ListLinks>
        <BottomContainer>
          <span>© 2022. Alejo Franco/@ginebras</span>
          <span>
            This was
            <a href="https://www.youtube.com/channel/UCeYt6blRBKuNrEg_-282fSA">
              CodeBucks's
            </a>
            idea ♥
          </span>
        </BottomContainer>
      </FooterComponent>
    </Section>
  );
}
