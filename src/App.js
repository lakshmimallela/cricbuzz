import './App.css';
import { useState,useEffect } from 'react';
import { GoArrowUp } from "react-icons/go";
import Navbar from './Components/Navbar';
import Nav from './Components/Nav';
import Home from './Components/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from './Components/Footer';
import Cricbuzz from './Components/Cardmatches';

const App=()=> {
  const[ShowScrollTopButton,SetShowScrollTopButton]=useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 200){
        SetShowScrollTopButton(true);
      }else{
      SetShowScrollTopButton(false);
      }
  
    });
  },[]);
  const ScrollTop=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
  return (
    <div>
       {ShowScrollTopButton &&
    (<button className='bottontop text-white ' onClick={ScrollTop}>< GoArrowUp /> Move to top </button>)
    }
    <div className='container'>
        <Router>
        <Navbar/>
      <Nav/>
     <Routes>
      <Route path ='/' element={< Cricbuzz/>}/>
      <Route path ='/home' element={<Home/>}/>
    </Routes>
     
    </Router>
     
     </div>
     
      <Footer/>
      </div>
  );
}

export default App;
