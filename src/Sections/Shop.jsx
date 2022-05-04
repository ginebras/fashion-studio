import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/scrollbar';
import './shop.css';

import { shopData } from '../shopData';

const Section = styled.section`
  position:relative;
  width:100vw;
  min-height:100vh;
  height:auto;
  margin:0 auto;
  overflow:hidden;
  z-index:1;

  display:flex;
  justify-content:flex-start;
  align-items:flex-start;

  @media (max-width:1024px){
    flex-direction:column;
  }
`;

const Title = styled.h1`
  font-family:'Kaushan Script';
  font-weight:300;
  font-size:${(props) => props.theme.fontxxxl};
  color:${(props) => props.theme.text};
  text-shadow:1px 1px 1px ${(props) => props.theme.body};

  position:absolute;
  top:1rem;
  left:5%;
  z-index:11;

  @media (max-width:600px){
    position:relative;
    color:${(props) => props.theme.body};
  }
`;

const Left = styled.div`
  width:35%;
  font-family:'Sirin Stencil';
  background-color:${(props) => props.theme.body};
  color:${(props) => props.theme.text};
  z-index:10;

  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;

  @media (max-width:600px){
    width:100%;
  }

  @media (max-width:1024px){
    width:100%;
    min-height:50vh;
  }
`;

const Paragraph = styled.p`
  font-size:${(props) => props.theme.fontlg};
  font-weight:300;
  width:80%;
  margin:0 auto;
`;

const Right = styled.div`
  min-height:100vh;
  width:100%;
  background-color:rgb(190, 190, 190);
  position:absolute;
  left:20%;

  display:flex;
  justify-content:flex-start;
  align-items:center;

  h1{
    width:5rem;
    margin:0 2rem;
  }

  @media (max-width:600px){
    position:relative;
    left:0;
  }

  @media (max-width:1024px){
    position:relative;
    left:0;
  }
  
`;

const CardContainer = styled.div`
  padding:1rem;

  img{
    width:30vw;
    height:70vh;
    object-fit:cover;

    @media (max-width:600px){
      width:85vw;
    }

    @media (max-width:1024px){
      width:100vw;
    }
  }

  h1{
    font-size:${(props) => props.theme.fontlg};
    font-family:'Sirin Stencil';
    font-weight:300;
    color:${(props) => props.theme.body};
    width:10vw;

    @media (max-width:1024px){
      font-size:${(props) => props.theme.fontxl};
    }

    @media (max-width:600px){
      font-size:${(props) => props.theme.fontmd};
    }
  }
`;

export default function Shop() {
  const [space, setSpace] = useState(0);

  useEffect(() => {
    if (document.body.offsetWidth < 1024) {
      setSpace(200);
    } else {
      setSpace(-200);
    }
  }, [document.body.offsetWidth]);

  return (
    <Section data-scroll-section id="shop">
      <Title data-scroll data-scroll-speed="-1">
        New Collection:
      </Title>
      <Left>
        <Paragraph>
          The brand new collection is currently being developed in USA. We
          create our products using best quality material, including the use of
          some of the pure fabrics to make our products. All products are made
          using the best materials, from the finest cotton to the finest
          fabrics.
          <br />
          <br />
          We have lots of different clothing options like shoes, jackets and
          dresses. Not only clothes but we also provide unique Jewellery as
          well. It is great for us to carry our new clothes all around the
          country and look different.
        </Paragraph>
      </Left>
      <Right>
        <Swiper
          modules={[Scrollbar]}
          spaceBetween={space}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
        >
          {shopData.map((data, index) => (
            <SwiperSlide key={index}>
              <CardContainer>
                <img src={data.img} />
                <h1>{data.name}</h1>
              </CardContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </Right>
    </Section>
  );
}
