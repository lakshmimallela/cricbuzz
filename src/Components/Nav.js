import { Link } from "react-router-dom";
import React, { useState } from 'react';


const Nav =()=>{
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isToggled, setIsToggled] = useState(true);
  const toggleoll =()=>{
    setIsToggled(false);
    setIsCollapsed(!isCollapsed)
  }


  const toggle = () => {
    setIsToggled(!isToggled);
  };
    return(
        <div className="">
        <nav className="navbar navbar-expand-lg bg-dark navbar-light px-4 ">
        <a className="nav-link  text-light" href="#">MATCHES</a>
        <button className="navbar-toggler" type="button" onClick={toggleoll} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-light rounded-2"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent1">
     <ul className="navbar-nav m-auto ">
      <li className=" text-light">
        <Link className="nav-link  text-light bar" to="/home">AUS vs PAK-Live</Link>
      </li>
      <li className="">
        <a className="nav-link  text-light bar" href="#">INDA vs AUSA-Live</a>
      </li>
      <li className="">
        <a className="nav-link text-light bar" href="#" >MLSW vs SYSW-SYS...</a>
         </li>
      <li className="">
        <a className="nav-link text-light bar" href="#" >RSA vs IND-Preview</a>
        </li>
      <li className="">
        <a className="nav-link text-light bar" href="#" >PRSW vs MLRW-PRS...</a>
        </li>
        <li className="">
       <button className="nav-link text-light dropdown-toggle " href="#" onClick={toggle}>{isToggled ? ' Close' : ' All'} </button>
        </li>
      </ul>
      </div>
      </nav>
      <div> {isToggled && (<div className='container'>
        <div className='row bg-dark'>  
          <div className='col-lg-8 col-8 mx-auto'>
          <div>
            <button type="button" class="bg-dark rounded-5 m-3 text-white">Preview</button>
            <button type="button" class="bg-dark rounded-5 m-3 text-white">IND Inns</button>
            <button type="button" class="bg-dark rounded-5 m-3 text-white">RSA Inns</button>
            </div>
            <p className='fw-bold text-success fs-6 p-3'>INTERNATIONAL</p>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-8 mx-auto'>
              <p className='text-white fs-6 '>South Africa v India, 2024</p>
              <p className='text-white fs-6 '>India vs South Africa</p>
              <p className='text-white fs-6 '>2nd T20I</p>
              <p className='text-white fs-6 '>Afghanistan v Bangladesh in UAE, 2024</p>
              <p className='text-white fs-6 '>Bangladesh vs Afghanistan</p>
              <p className='text-white fs-6 '>2nd ODI</p>
              <p className='text-white fs-6 '>Bangladesh vs Afghanistan  LIVE
              </p>
              <p className='text-white fs-6 '>3rd ODI</p>
              <p className='text-white fs-6 '>West Indies v England, 2024</p>
              <p className='text-white fs-6 '>West Indies vs England</p>
              <p className='text-white fs-6 '>1st T20I</p>
              <p className='text-white fs-6 '>West Indies vs England</p>
              <p className='text-white fs-6 '>2nd T20I</p>
              <p className='text-white fs-6 '>Australia v Pakistan</p>
              <p className='text-white fs-6 '>Australia vs Pakistan</p>
              <p className='text-white fs-6 '>3rd ODI</p>
            </div>
            <div className='col-lg-4 col-8 mx-auto'>
              <p className='text-white fs-6 '>South Africa v India, 2024</p>
              <p className='text-white fs-6 '>India vs South Africa</p>
              <p className='text-white fs-6 '>2nd T20I</p>
              <p className='text-white fs-6 '>Afghanistan v Bangladesh in UAE, 2024</p>
              <p className='text-white fs-6 '>Bangladesh vs Afghanistan</p>
              <p className='text-white fs-6 '>2nd ODI</p>
              <p className='text-white fs-6 '>Bangladesh vs Afghanistan  LIVE
              </p>
              <p className='text-white fs-6 '>3rd ODI</p>
              <p className='text-white fs-6 '>West Indies v England, 2024</p>
              <p className='text-white fs-6 '>West Indies vs England</p>
              <p className='text-white fs-6 '>1st T20I</p>
              <p className='text-white fs-6 '>West Indies vs England</p>
              <p className='text-white fs-6 '>2nd T20I</p>
              <p className='text-white fs-6 '>Australia v Pakistan</p>
              <p className='text-white fs-6 '>Australia vs Pakistan</p>
              <p className='text-white fs-6 '>3rd ODI</p>
            </div>
            <div className='col-lg-4 col-8 mx-auto'>
              <p className='text-white fs-6 '>South Africa v India, 2024</p>
              <p className='text-white fs-6 '>India vs South Africa</p>
              <p className='text-white fs-6 '>2nd T20I</p>
              <p className='text-white fs-6 '>Afghanistan v Bangladesh in UAE, 2024</p>
              <p className='text-white fs-6 '>Bangladesh vs Afghanistan</p>
              <p className='text-white fs-6 '>2nd ODI</p>
              <p className='text-white fs-6 '>Bangladesh vs Afghanistan  LIVE
              </p>
              <p className='text-white fs-6 '>3rd ODI</p>
              <p className='text-white fs-6 '>West Indies v England, 2024</p>
              <p className='text-white fs-6 '>West Indies vs England</p>
              <p className='text-white fs-6 '>1st T20I</p>
              <p className='text-white fs-6 '>West Indies vs England</p>
              <p className='text-white fs-6 '>2nd T20I</p>
              <p className='text-white fs-6 '>Australia v Pakistan</p>
              <p className='text-white fs-6 '>Australia vs Pakistan</p>
              <p className='text-white fs-6 '>3rd ODI</p>
            </div>
          </div>
        </div>
          </div>)} 
      </div>
      </div>
      )

    }
    export default Nav