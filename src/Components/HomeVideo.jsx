import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BideoContainer = styled.div`
  position:relative;
  width:100%;
  height:100vh;

  .video{
    width:100%;
    height:100vh;
    object-fit:cover;

    @media (max-width: 1024px){
      object-position:center 10%;
    }
  }
  @media (max-width: 600px){
    object-position:center 50%;
  }
`;

const DarkOverlay = styled.div`
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  z-index:1;

  background-color:${(props) => `rgba(${props.theme.bodyRgba},0.9)`};
`;

const Title = styled(motion.div)`
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  z-index:5;

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color:${(props) => props.theme.text};

  div{
    display:flex;
  }

  h1{
    font-family:'Kaushan Script';
    font-size:${(props) => props.theme.fontBig};
    text-shadow:1px 1px 1px ${(props) => props.theme.body};

    @media (max-width:600px){
      font-size:${(props) => props.theme.fontxxxl};
    }
  }

  h2{
    font-family:'Sirin Stencil';
    font-size:${(props) => props.theme.fontlg};
    text-shadow:1px 1px 1px ${(props) => props.theme.body};
    text-transform:capitalize;
    font-weight:300;
  }
`;

const Container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      delayChildren: 5,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

export default function HomeVideo() {
  return (
    <BideoContainer>
      <DarkOverlay />

      <Title variants={Container} initial="hidden" animate="show">
        <div>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.13"
          >
            N
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.09"
          >
            y
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.06"
          >
            x
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.03"
          >
            x
          </motion.h1>
        </div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 5,
          }}
          data-scroll
          data-scroll-delay="0.03"
          data-scroll-speed="4"
        >
          Inspire. Create. Belive
        </motion.h2>
      </Title>

      <video
        src="https://player.vimeo.com/external/484398592.sd.mp4?s=d38cd75c95fbc4e6828c349fb977a015cb2853c9&profile_id=139&oauth2_token_id=57447761"
        type="video/mp4"
        className="video"
        loop
        autoPlay
        muted
      />
    </BideoContainer>
  );
}
