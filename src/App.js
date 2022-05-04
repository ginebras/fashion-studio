import React, { useRef, useState } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import GlobalStyles from './Styles/GlobalStyles';
import { DarkTheme } from './Styles/Themes';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import Home from './Sections/Home';
import About from './Sections/About';
import Shop from './Sections/Shop';
import Banner from './Sections/Banner';
import Arrivals from './Sections/Arrivals';
import Footer from './Sections/Footer';
import Loader from './Components/Loader';

export default function App() {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(true);

  setTimeout(() => {
    setLoaded(false);
  }, 2000);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={DarkTheme}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options

            smartphone: {
              smooth: true,
            },

            tablet: {
              smooth: true,
            },
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>{loaded ? <Loader /> : null}</AnimatePresence>
          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <Home />
              <About />
              <Shop />
              <Banner />
              <Arrivals />
              <Footer />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}
