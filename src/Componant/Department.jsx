import React from 'react'
import style from './Department.module.css' ;
import { Link } from 'react-router-dom';
 export default function Department() {
   return (
<>
<section className="section__container doctors__container" id='department'>
      <div className="doctors__header">
        <div className="doctors__header__content">
          <h2 className="section__header"><span className={style.span}><i class="ri-nurse-fill"></i> Choose Department </span></h2>
        </div>
      </div>
      <div className={style.department__grid}>
        <div className="doctors__card">
          <div className="doctors__card__image">
            <img className='image' src="https://img.freepik.com/premium-photo/doctor-listens-small-child-with-stethoscope_176873-5214.jpg?w=1380" alt="doctor" />
            <div className="doctors__socials">
              <Link to="/atfal"> <i className="ri-more-fill"></i> </Link>
            </div>
          </div>
          <h4>Pediatrician</h4>
         </div>
        <div className="doctors__card">
          <div className="doctors__card__image">
            <img className='image' src="https://img.freepik.com/premium-photo/female-dentist-teeth-examination_170532-1664.jpg?w=1380" alt="doctor" />
            <div className="doctors__socials">
              <Link to='/asnan'><i className="ri-more-fill"></i></Link>
            </div>
          </div>
          <h4>dentistry</h4>
         </div>
        <div className="doctors__card">
          <div className="doctors__card__image">
            <img className='image' src="https://img.freepik.com/free-photo/doctor-examine-x-ray-film-white-background_1150-6251.jpg?w=1380&t=st=1702813074~exp=1702813674~hmac=ed0c477606c7b1073a77854df68152faef38bd52390be8132104f9225687e0e7" alt="doctor" />
            <div className="doctors__socials">
              <Link to='/ezam'><i className="ri-more-fill"></i></Link>
            </div>
          </div>
          <h4>Orthopedics</h4>
         </div>
        <div className="doctors__card">
          <div className="doctors__card__image">
            <img className='image' src="https://img.freepik.com/free-photo/collage-medical-issue-with-blood-stool_23-2150942847.jpg?w=996&t=st=1702812940~exp=1702813540~hmac=4cd8929d8c15e60aaef994374f16119e8019bbf1f9710a7bbee02972d7c7dd97" alt="doctor" />
            <div className="doctors__socials">
              <Link to='/batna'><i className="ri-more-fill"></i></Link>
            </div>
          </div>
          <h4>Internal medicine</h4>
         </div>
      </div>
    </section>             
 
</>
  )
}
