import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const NavbarContainer = styled(motion.div)`
  position:absolute;
  width:100vw;
  z-index:9;
  transition:all 0.3s ease;
  top:${(props) => (props.click ? '0' : `-${props.theme.navHeight}`)};

  display:flex;
  align-items:center;
  justify-content:center;

  font-family:'Sirin Stencil';

  
`;

const MenuItems = styled(motion.ul)`
  position:absolute;
  top:0;
  height:${(props) => props.theme.navHeight};
  background-color:${(props) => props.theme.body};
  color:${(props) => props.theme.text};

  list-style:none;
  display:flex;
  align-items:center;
  justify-content:space-around;

  width:100%;
  padding:0 10rem;
`;

const MenuBtn = styled(motion.li)`
  background-color:${(props) => `rgba(${props.theme.textRgba},0.7)`};
  width:15rem;
  height:2.5rem;
  color:${(props) => props.theme.body};

  position:absolute;
  top:100%;
  left:42%;
  transform:translateX(-50%);

  -webkit-clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  
  display:flex;
  align-items:center;
  justify-content:center;

  font-size:${(props) => props.theme.fontmd};
  font-weight:600;
  text-transform:uppercase;
  cursor:pointer;

  @media (max-width:600px){
    left:33%;
  }
`;

const MenuItem = styled(motion.li)`
  text-transform:uppercase;
  color:${(props) => props.theme.text};
`;

export default function NavbarComponent() {
  const [click, setClick] = useState(false);
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(`#${id}`);
    setClick(!click);
    scroll.scrollTo(elem, {
      offset: '-100',
      duration: '2000',
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <NavbarContainer
      click={click}
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      transition={{ duration: 2, delay: 5 }}
    >
      <MenuItems
        drag="y"
        dragContraints={{
          top: 0,
          bottom: 70,
        }}
        dragSnapToOrigin
        dragElastic={0.5}
      >
        <MenuBtn
          onClick={() => setClick(!click)}
          initial={{
            y: '-100%',
          }}
          animate={{
            y: 0,
          }}
          transition={{
            duration: 2,
          }}
        >
          Menu
        </MenuBtn>
        <MenuItem
          onClick={() => handleScroll('home')}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Home
        </MenuItem>
        <MenuItem
          onClick={() => handleScroll('about')}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          About
        </MenuItem>
        <MenuItem
          onClick={() => handleScroll('shop')}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          shop
        </MenuItem>
        <MenuItem
          onClick={() => handleScroll('arrival')}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          new arrival
        </MenuItem>
      </MenuItems>
    </NavbarContainer>
  );
}
