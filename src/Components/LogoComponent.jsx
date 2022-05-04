import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position:absolute;
  top:1rem;
  left:1rem;
  font-family:'Sirin Stencil';

  width:150px;
  z-index:5;
  color:${(props) => props.theme.text};

  svg{
    width:3rem;
    overflow:visible;
    height:auto;  
  }
  
  a{
    display:flex;
    text-decoration:none;
    align-items:flex-end;
  }
`;

const Text = styled(motion.span)`
  font-size:${(props) => props.theme.fontlg};
  color:${(props) => props.theme.text};
`;

const PathsVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 2,
      type: 'easeInOut',
    },
  },
};

const TextsVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,

    transition: {
      delay: 5,
      duration: 2,
      type: 'easeInOut',
    },
  },
};

export default function LogoComponent() {
  return (
    <Container>
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          height="48px"
          viewBox="0 0 24 24"
          width="48px"
          fill="#FFFFFF"
        >
          <g></g>
          <g>
            <motion.path
              variants={PathsVariants}
              initial="hidden"
              animate="visible"
              d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
            />
          </g>
        </svg>
        <Text variants={TextsVariants} initial="hidden" animate="visible">
          Nyxx Studio
        </Text>
      </Link>
    </Container>
  );
}
