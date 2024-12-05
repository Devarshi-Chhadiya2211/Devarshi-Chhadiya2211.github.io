import React, { useEffect } from 'react'
import $ from 'jquery';

function Header() {
  useEffect(() => {
    // jQuery for toggling the menu on click
    $('#menu-icon').on('click', function () {
      $('.navbar').toggle('slow');
    });

    // Clean up event listener when the component unmounts
    return () => {
      $('#menu-icon').off('click');
    };
  }, []);

  return (
    <>
      
  <header class="header">
    <a href="#" class="logo">Portfolio</a>

    <i class='bx bx-menu' id="menu-icon"></i>



    <nav class="navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#techstack">Tech-Stack</a>
      <a href="#portfolio">Projects</a>
      <a href="#github">Github</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

    </>
  )
}

export default Header
