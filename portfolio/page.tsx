"use client";

import React from 'react'
// import image from "../image/IMG_7430.jpeg"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import About from "../components/About"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
const Home = () => {
  useEffect (() => {
    AOS.init({
      easing: "ease-out-back",
      duration : 1200,
      delay : 100,
      mirror : true,
      anchorPlacement : "bottom-bottom",
      offset : 160,
    });
    AOS.refresh();
  },[])
  return (
    <main>
      <Hero />
    <Skills />
    <Contact />
    <About />
    </main>
    
  )
}

export default Home