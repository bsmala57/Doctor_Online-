import React from 'react'
import '@fontsource/josefin-sans'; 
import style from "./Nav.module.css";
 // import '../img/Full.jpeg';
function NavBar() {
 
   
return (

    <>
    <div id='body' className={style.body}>
 <header className={style.header} >
       <nav className={style.nav_container}>
        <div className={style.nav_logo}>  Doctor  <span className={style.span}>Online </span></div>
        <ul className={style.nav_links}>
         <li className={style.link}><a href='#' className={style.a}>Home</a></li>
         <li className={style.link}><a href='#about' className={style.a}>About us</a></li>
         <li className={style.link}><a href='#service' className={style.a}>Services</a></li>
         <li className={style.link}><a href='#why' className={style.a}>pages</a></li>
         <li className={style.link}><a href='#doctors' className={style.a}>Blog</a></li>
         <li className={style.link}><a href='#department' className={style.a}>Department</a></li>
         <li className={style.link}><a href='#Country' className={style.a}>Country</a></li>
         </ul>
       
        </nav> 

        <div className={style.header__container}>
        <div className={style.header_content}>
           <h1 className={style.x}><b>
             Providing an Exceptioponal Patient Experience
            </b>
             </h1>
           <p className={style.p}>
           Welcome, where exceptional patient experiences are our priority.
            With compassionate care, state-of-the-art facilities, and a patient-centered approach,
             we're dedicated to your well-being. Trust us with your health and experience the difference.
           </p>
           <button className={style.btn}>welcome</button>
        </div>
        <div className={style.header__form}>
          <form className={style.form}>
            <h4 className={style.h4}>Book Now </h4>
            <input type='text' placeholder='First Name' className={style.input}/>
            <input type='text' placeholder='Last Name'className={style.input}/>
            <input type='text' placeholder='Address'className={style.input}/>
            <input type='text' placeholder='Phone Number'className={style.input}/>
            <button className={style.btn_form}>Book Appointment</button>
          </form>

        </div>

        </div>
</header>
</div>
















    </>
)
}

export default NavBar




