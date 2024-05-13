import React from 'react'
import style from './About.module.css' ;
function About() {
  return (
    <>
    <section id='about'>
    <div className={style.about_container}>
        <div className={style.about__content}>
           <h2 className={style.section__header}>About Us</h2>
           <p className={style.p}>
           Welcome to our healthcare website,
            your one-stop destination for reliable and 
            comprehensive health care information.
             We are committed to promoting wellness and providing v
             aluable resources to empower you on your health journey.

          </p>
          <p className={style.p}>
          Explore our extensive collection of expertly written articles and guides covering a wide range of health topics.
           From understanding common medical conditions 
          to tips for maintaining a healthy lifestyle, our content is designed to educate, inspire,
           and support you in making informed choices for your health
          </p>
          
          <p className={style.p}>
          Discover practical health tips and lifestyle advice to optimize 
          your physical and mental well-being. We believe that small 
          changes can lead to significant improvements in your quality
           of life, and we're here to guide you on your path to a healthier
            and happier you.
          </p>
        </div>


        <div >
           <img src="https://raw.githubusercontent.com/wincodersujon/Hospital-website/c6c954ab074b68cf2b37490b556a2f6d33e23ea7/hospital/image/about-img.svg" alt='..' />
        </div>
    </div>  
    </section>   
    </>
  )
}

export default About