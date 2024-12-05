import React from 'react'
// import devli from '../assets/photo/devli.jpg'
import devli from '../assets/photo/PASSPORTPHOTO.jpg'
import Resume from "../assets/Devarshi-Chhadiya Resume.pdf"

function About() {

  const downloadResume = async () => {
    window.open(Resume, '_blank');
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'Devarshi Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
         <section class="about" id="about">
    <div class="about-img">
      <img src={devli} alt=""/>
    </div>

    <div class="about-content">
      <h2 class="heading2">About <span> Me</span></h2>
      {/* <h3>Full Stack Web Developer</h3> */}
      <p>Aspiring Full Stack Web Developer with a strong foundation 
        in both front-end and back-end technologies. Currently pursuing 
        a comprehensive full stack web development course, 
        I am proficient in HTML, CSS, and web design, with a focus
        on creating dynamic and responsive web applications. 
        I have received accolades in Olympiad competitions, 
        demonstrating my problem-solving skills and dedication. 
        With excellent communication abilities and a passion for professional growth, 
        I am eager to contribute my skills as a developer in a professional setting.</p>

        <button className='btn' onClick={downloadResume}>Download CV</button>
      {/* <a onClick={downloadResume} class="btn">Download CV</a> */}
    </div>
  </section>

    </>
  )
}

export default About
