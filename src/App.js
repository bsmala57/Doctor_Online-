import './App.css';
import Department from './Componant/Department';
import About from './Componant/About';
import NavBar from './Componant/NavBar';
import Service from './Componant/Service';
import Footer from './Componant/Footer';
import Why from './Componant/Why';
import Doctors from './Componant/Doctors';
import Asnan from "./Componant/Asnan"
import Atfal from "./Componant/Atfal"
import Batna from "./Componant/Batna"
import Ezam from "./Componant/Ezam"
import Test from './Componant/Test';
import { Route, Routes } from 'react-router-dom';
import Health from './Componant/Health';
import General from './Componant/General';
import Country from './Componant/Country';
import Cairo from './Componant/Cairo';
import Minya from './Componant/Minya';
import Alex from './Componant/Alex';



 


function App() {
  return (
    <>
    <NavBar/>
  

    <div>
    <Service/>
    <div className='section__container'>
    <Routes>
    <Route path='/Test' element={<Test/>} />
    <Route path='/Health' element={<Health/>} />
    <Route path='/General' element={<General/>} />
    </Routes>
    </div>
    </div>


    <About/>
    <Why/>
    <Doctors/>
    <div>
    <Department/>
      <div className='section__container'>
      <Routes>
             <Route path='/asnan' element={<Asnan />} />
            <Route path='/atfal' element={<Atfal />} />
            <Route path='/batna' element={<Batna />} />
            <Route path='/ezam' element={<Ezam />} />
          </Routes>
      </div>  
    </div>
    <Country/>
    <div className='section__container'>
      <Routes>
             <Route path='/cairo' element={<Cairo />} />
            <Route path='/minya' element={<Minya />} />
            <Route path='/Alex' element={<Alex/>} />
            <Route path='/ezam' element={<Ezam />} />
          </Routes>
      </div>  
    <Footer/>
    </>
  );
}

export default App;
