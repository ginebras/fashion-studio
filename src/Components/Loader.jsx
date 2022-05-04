import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import svg from '../assets/star-white.svg';

const Container = styled(motion.div)`
  position:absolute;
  height:100vh;
  width:100vw;

  background-color:${(props) => props.theme.body};
  color:${(props) => props.theme.text};

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  z-index:20;

  img{
    width:15%;
  }
`;

const Text = styled(motion.span)`
  font-family:'Sirin Stencil';
  font-weight:300;
  font-size:${(props) => props.theme.fontlg};
`;

export default function Loader() {
  return (
    <Container
      initial={{ opacity: 1, height: '100vh' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{
        duration: 2,
        delay: 2,
      }}
    >
      <img src={svg} alt="svg" />
      <Text
        initial={{ opacity: 0, x: '-100' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: 'spring',
          duration: 2,
          delay: 1,
        }}
      >
        Nyxx Studio
      </Text>
    </Container>
  );
}
