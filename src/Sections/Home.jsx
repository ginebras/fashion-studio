import React from 'react';
import styled from 'styled-components';

import HomeVideo from '../Components/HomeVideo';
import LogoComponent from '../Components/LogoComponent';
import NavbarComponent from '../Components/NavbarComponent';

const Sections = styled.section`
  position:relative;
  min-height:100vh;
  overflow:hidden;
`;

export default function Home() {
  return (
    <Sections data-scroll-section id="home">
      <HomeVideo />
      <LogoComponent />
      <NavbarComponent />
    </Sections>
  );
}
