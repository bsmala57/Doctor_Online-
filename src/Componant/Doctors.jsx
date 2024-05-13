import React from 'react'
import doctor1 from '../img/doctor-1.jpg';
import doctor2 from '../img/doctor-2.jpg';
import doctor3 from '../img/doctor-3.jpg';

export default function Doctors() {
    return (
        <>
    <section className="section__container doctors__container" id='doctors'>
      <div className="doctors__header">
        <div className="doctors__header__content">
          <h2 className="section__header">Our Special Doctors</h2>

        </div>
       
      </div>
      <div className="doctors__grid">
        <div className="doctors__card">
          <div className="doctors__card__image">
            <img  src={doctor1} className='image' alt="doctor" />
            <div className="doctors__socials">
              <span><i className="ri-instagram-line"></i></span>
              <span><i className="ri-facebook-fill"></i></span>
              <span><i className="ri-heart-fill"></i></span>
              <span><i className="ri-twitter-fill"></i></span>
            </div>
          </div>
          <h4>Dr. Eman Ahmed</h4>
          <p>Cardiologist</p>
        </div>
        <div className="doctors__card">
          <div className="doctors__card__image">
            <img  src={doctor2} className='image' alt="doctor" />
            <div className="doctors__socials">
              <span><i className="ri-instagram-line"></i></span>
              <span><i className="ri-facebook-fill"></i></span>
              <span><i className="ri-heart-fill"></i></span>
              <span><i className="ri-twitter-fill"></i></span>
            </div>
          </div>
          <h4>Dr. Mostafa Ali</h4>
          <p>Neurosurgeon</p>
        </div>
        <div className="doctors__card">
          <div className="doctors__card__image">
            <img  src={doctor3} className='image' alt="doctor" />
            <div className="doctors__socials">
              <span><i className="ri-instagram-line"></i></span>
              <span><i className="ri-facebook-fill"></i></span>
              <span><i className="ri-heart-fill"></i></span>
              <span><i className="ri-twitter-fill"></i></span>
            </div>
          </div>
          <h4>Dr. Ahmed Mohamed</h4>
          <p>Dermatologist</p>
        </div>
      </div>
    </section>
         </>
    )
}
