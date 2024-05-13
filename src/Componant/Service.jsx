import React from 'react' ;
import style from './Service.module.css';
import { Link } from 'react-router-dom';

function Service() {
return (
  <>
<section className={style.section_container} id='service'>
<div className={style.service__header}>
<div className={style.service__header__content}>
<h2 className={style.section__header}>
  Our spicial services
</h2>
<p className={style.p}>
Beyond simply providing medical care,
 our commitment lies in delivering unparalleled 
 service tailored to your unique needs.
</p>
<div>

</div>

<div className={style.service__grid}>
   <div className={style.service__card}>
       <Link to='/Test'><span className={style.span}><i className="ri-microscope-line"></i></span> </Link>     
       <h4 className={style.h4}>Laboratory Test</h4> 
       <p>
       Accurate Diagnostics, Swift Results:
        Experience top-notch Laboratory Testing at our facility.

       </p>
   </div>

   <div className={style.service__card}>
       <Link to='/Health'><span className={style.span}><i className="ri-mental-health-line"></i></span> </Link>     
       <h4 className={style.h4}>Health Check</h4> 
       <p>
       Our thorough assessments and expert
        evaluations help you stay proactive about your health.
       </p>
   </div>

   <div className={style.service__card}>
       <Link to='/General'><span className={style.span}><i className="ri-hospital-line"></i></span> </Link>     
       <h4 className={style.h4}>General Dentistry</h4> 
       <p>
       Experience comprehensive oral care with Dentistry.
        Trust us to keep your smile healthy and bright.
       </p>
   </div>
</div>
</div>
</div>


</section>

















 


    

    </>
    )
}

export default Service