import React from 'react'
import style from './Why.module.css' ; 
// import img from '../img/home-img.svg';
function Why() {
  return (
    <>
    <section className={style.why__container} id='why'>
       <div className={style.why__image}>
           <img src="https://raw.githubusercontent.com/wincodersujon/Hospital-website/c6c954ab074b68cf2b37490b556a2f6d33e23ea7/hospital/image/home-img.svg" alt="" />
       </div>
       <div className={style.why__content}>
        <h2 className={style.section__header}>Why Choose Us </h2>
        <p className={style.p}>
        With a steadfast commitment to your well-being,
         our team of highly trained healthcare professionals ensures 
         that you receive
         nothing short of exceptional patient experiences.

        </p>
        <div className={style.why__grid}>
            <span className={style.span}><i className="ri-hand-heart-line"></i></span>
            <div>
                <h4 className={style.h4}>Intensive Care</h4>
                <p className={style.para}>
                Our Intensive Care Unit is equipped with advanced
                 technology and staffed by team of professionals
                </p>
            </div>

            <span className={style.span}><i className="ri-truck-line"></i></span>
            <div>
                <h4 className={style.h4}>Free Ambulance Car</h4>
                <p className={style.para}>
                A compassionate initiative to prioritize your 
                health and well-being without any financial burden.
                </p>
            </div>


            <span className={style.span}><i className="ri-hospital-line"></i></span>
            <div>
                <h4 className={style.h4}>Medical and Surgical</h4>
                <p className={style.para}>
                Our Medical and Surgical services offer
                 advanced healthcare solutions to address medical needs.
                </p>
            </div>


            
            <span className={style.span}><i class="ri-discount-percent-fill"></i></span>
            <div>
                <h4 className={style.h4}>discount</h4>
                <p className={style.para}>
                When booking with any doctor, a 5% discount is given on the examination price
                </p>

                <p className={style.para}>
                When booking with any doctor more than three times, a %50 discount will be made on the examination price                </p>
            </div>

            
        </div>
       </div>
    </section>
    </>
  )
}

export default Why