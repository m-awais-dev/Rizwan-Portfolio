import './App.css';
import React, {useState, useEffect} from 'react';
import '@mantine/core/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MantineProvider , createTheme} from '@mantine/core';
import Navbar from './components/Navbar';
import Email from './components/Email';
import Social from './components/Social';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills'
import Experience from './components/Experience';
import Contact from './components/Contact'
import { Loader } from './components/Loader';
import Footer from './components/Footer';
function App() {
  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  }, []);

  const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 5000)
    }, [])

  const theme = createTheme({
    breakpoints: {
      'xs': '320px',
      'sm': '476px',
      'md': '640px',
      'bs': '768px',
      'lg': '900px',
      'xl': '1024',
      '2xl': '1280',
    },
  });
  return (
    <MantineProvider theme={theme}>
    <div className="App">
    { 
      loading !== true ? <>
    
    <Navbar />
    <Email />
    <Social />
    <Hero />
    <Projects />
    <Skills />
    <Experience />
    <Contact />
    <Footer />
    </>
    :
    <Loader />
  } 
    </div>
    </MantineProvider>
  );
}

export default App;
