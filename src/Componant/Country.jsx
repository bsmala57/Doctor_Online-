import React from 'react'
import { Link } from 'react-router-dom';
import style from './County.module.css' ; 
function Country() {
  return (
    <>
      <section className="section__container doctors__container" id='Country'>
      <div className="doctors__header">
        <div className="doctors__header__content">
          <h2 className="section__header"><span className={style.span}><i class="ri-building-fill"></i> Choose Country</span></h2>
        </div>
      </div>
      <div className={style.department__grid}>
        <div className="doctors__card">
          <div className="doctors__card__image">
            <img className='image' src="https://img.freepik.com/free-vector/watercolor-cairo-skyline-with-elegant-style_23-2147890320.jpg?w=826&t=st=1707895729~exp=1707896329~hmac=9cbad1bd4969f228c8e41476862f047fd6fe31f1416ce48682b593ee2000a9aa" alt="doctor" />
            <div className="doctors__socials">
              <Link to="/cairo"> <i className="ri-more-fill"></i> </Link>
            </div>
          </div>
          {/* <h4>Cairo</h4> */}
         </div>

         <div className="doctors__card">
          <div className="doctors__card__image">
            <img className='image' src="https://img.freepik.com/premium-vector/alexandria-arabic-language-signage-handwritten-arabic-caligraphy-modern-font-vector-art-design_922844-313.jpg?w=1380" alt="doctor" />
            <div className="doctors__socials">
              <Link to="/Alex"> <i className="ri-more-fill"></i> </Link>
            </div>
          </div>
          {/* <h4>Cairo</h4> */}
         </div>

         <div className="doctors__card">
          <div className="doctors__card__image">
            <img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Mo9PguM0WuCD7zzQjxlBMpvEWmkp7QAoD4CzVPKBdg&s" alt="doctor" />
            <div className="doctors__socials">
              <Link to="/atfal"> <i className="ri-more-fill"></i> </Link>
            </div>
          </div>
          {/* <h4>Cairo</h4> */}
         </div>


         <div className="doctors__card">
          <div className="doctors__card__image">
            <img className='image' src="https://cdn.alweb.com/thumbs/egyptencyclopedia/article/fit710x532/%D8%A3%D9%8A%D9%86-%D8%AA%D9%82%D8%B9-%D8%A3%D8%B3%D9%8A%D9%88%D8%B7-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1.jpg" alt="doctor" />
            <div className="doctors__socials">
              <Link to="/atfal"> <i className="ri-more-fill"></i> </Link>
            </div>
          </div>
          {/* <h4>Cairo</h4> */}
         </div>
         </div>
         




         <div className={style.department__grid}>
        <div className="doctors__card">
          <div className="doctors__card__image">
            <img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOuIY9KzefMAC3gQztNFHVV40S1L3AGu4BVO3mJgEAG__9n-CAcQVYj5bRihXESCxd5X0&usqp=CAU" alt="doctor" />
            <div className="doctors__socials">
              <Link to="/minya"> <i className="ri-more-fill"></i> </Link>
            </div>
          </div>
          {/* <h4>Cairo</h4> */}
         </div>

         <div className="doctors__card">
          <div className="doctors__card__image">
            <img className='image' src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Coat_of_arms_of_Suze_Governorate.JPG" alt="doctor" />
            <div className="doctors__socials">
              <Link to="/atfal"> <i className="ri-more-fill"></i> </Link>
            </div>
          </div>
          {/* <h4>Cairo</h4> */}
         </div>

         <div className="doctors__card">
          <div className="doctors__card__image">
            <img className='image' src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Coat_of_arms_of_Damietta_Governorate.png" alt="doctor" />
            <div className="doctors__socials">
              <Link to="/atfal"> <i className="ri-more-fill"></i> </Link>
            </div>
          </div>
          {/* <h4>Cairo</h4> */}
         </div>


         <div className="doctors__card">
          <div className="doctors__card__image">
            <img className='image' src="https://www.sis.gov.eg/Content/Upload/slider/720222916257604.jpg" alt="doctor" />
            <div className="doctors__socials">
              <Link to="/atfal"> <i className="ri-more-fill"></i> </Link>
            </div>
          </div>
          {/* <h4>Cairo</h4> */}
         </div>
         </div>


         
         </section>

    </>
   )
}

export default Country