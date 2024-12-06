import OwlCarousel from 'react-owl-carousel';
import image from './Images/bangladesh.webp';
import image1 from './Images/afghanistan.webp';
import image2 from './Images/new-zealand.webp';
import image3 from './Images/south-africa.webp';
import image4 from './Images/west-indies.webp';
import image5 from './Images/england.webp';
import image6 from './Images/south-africa.webp';
import image7 from './Images/india-a.webp';
import image8 from './Images/australia-a.webp';
import image9 from './Images/pakistan.webp';
import image10 from './Images/sydney-thunder-women.webp';
import image11 from './Images/sydney-sixers-women.webp';
import { Link } from "react-router-dom";


const Cricbuzz=()=>{
    const options = {
        items:1,
        //  loop:true,
        //  autoplay:true,
         autoplayTimeout:1000,
         responsiveClass:true,
         nav:true,
          dots:false,
          margin:5,
         navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
          responsive:{
          0:{items:1},600:{items:2},1000:{items:3}}
      }
    return(
        <div className=''>
        <OwlCarousel className='owl-carousel owl-theme  mt-2'  carousel {...options}>
          <div className='item border bg-white rounded-2'>
                <a to='/Score' className=' text-decoration-none text-dark'>
                <div className='p-2'>
                <p>2nd ODI. Pakistan tour of Australia, 2024{' '}
                    <a href="#" className="badge badge-info bg-dark text-decoration-none">ODI</a>
                </p>
                <table className=''>
                    <tbody>
                        <tr className='my-2'>
                            <td>
                            <img src={image} width={'5px'} alt="India flag"/>
                            </td> 
                            <td>BAN</td>
                            <td className='ps-5'></td>
                        </tr>
                        <tr>
                            <td>
                            <img src={image1} width={'5px'} alt="south-africa flag"/>
                            </td> 
                            <td>RSA</td>
                            <td  className='ps-5'></td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-primary mt-3">India won by 11 runs</p>
                </div>
                </a>
                <span className='text-end d-block number1   fs-6 text-light p-2'> POINTS TABLE SCHEDULE</span>
            </div>

            <div className='item border  bg-white rounded-2'>
                <div className='p-2'>
                <p>2nd ODI. Pakistan tour of Australia, 2024{' '}
                    <a href="#" className="badge badge-info bg-info text-decoration-none">ODI
                    </a>
                </p>
                <table>
                    <tbody>
                        <tr className='my-2'>
                            <td>
                            <img src={image2} width={'5px'}alt="Australia flag"/>
                         </td> 
                            <td>AFG</td>
                            <td  className='ps-5 fw-bold'>234 (49.5)</td>
                        </tr>
                        <tr>
                            <td>
                            <img src={image3} width={'5px'} alt="Australia flag"/>
                            </td> 
                            <td>PAK</td>
                            <td  className='ps-5'>234 (49.5)</td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-danger mt-3">India won by 11 runs</p>
                </div>
                <span className='text-end number1 d-block text-light p-2 fs-6'>POINTS TABLE SCHEDULE</span>
            </div>

            <div className='item border  bg-white rounded-2'>
                <div className='p-2'>
                <p>2nd ODI. Pakistan tour of Australia, 2024{' '}
                    <a href="#" className="badge badge-info bg-dark text-decoration-none">ODI
                    </a>
                </p>
                <table>
                    <tbody>
                        <tr className='my-2'>
                            <td>
                            <img src={image4} width={'5px'} alt="Australia flag"/>
                           </td> 
                            <td>AFG</td>
                            <td  className='ps-5'> 234 (49.5)</td>
                        </tr>
                        <tr>
                            <td>
                            <img src={image5} width={'5px'} alt="Australia flag"/> </td> 
                            <td>PAK</td>
                            <td  className='ps-5 fw-bold'>234 (49.5)</td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-info mt-3">Pakistan need 154 runs</p>
                </div>
                <span className='text-end  number1 d-block text-light p-2 fs-6'>POINTS TABLE SCHEDULE</span>
            </div>

            <div className='item border  bg-white rounded-2'>
                <div className='p-2'>
                <p>2nd ODI. Pakistan tour of Australia, 2024{' '}
                    <a href="#" className="badge badge-info bg-dark text-decoration-none">ODI
                    </a>
                </p>
                <table>
                    <tbody>
                        <tr className='my-2'>
                            <td>
                            <img src={image6} width={'5px'}alt="Australia flag"/>
                           </td> 
                            <td>AFG</td>
                            <td  className='ps-5 fw-bold'>234 (49.5)</td>
                        </tr>
                        <tr>
                            <td>
                            <img src={image7} width={'5px'} alt="Australia flag"/>
                            </td> 
                            <td>PAK</td>
                            <td  className='ps-5'>234 (49.5)</td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-info mt-3">India won by 11 runs</p>
                </div>
                <span className='text-end number1 d-block text-light p-2 fs-6'>POINTS TABLE SCHEDULE</span>
            </div>
            <div className='item border  bg-white rounded-2'>
                <div className='p-2'>
                <p>2nd ODI. Pakistan tour of Australia, 2024{' '}
                    <a href="#" className="badge badge-info bg-info text-decoration-none">ODI
                    </a>
                </p>
                <table>
                    <tbody>
                        <tr className='my-2'>
                            <td>
                            <img src={image8} width={'5px'} alt="Australia flag"/>
                            </td> 
                            <td>AFG</td>
                            <td  className='ps-5'>234 (49.5)</td>
                        </tr>
                        <tr>
                            <td>
                            <img src={image9} width={'5px'} alt="Australia flag"/>
                             </td> 
                            <td>PAK</td>
                            <td  className='ps-5 fw-bold'>234 (49.5)</td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-danger mt-3">Pakistan need 154 runs</p>
                </div>
                <span className='text-end number1 d-block text-light p-2 fs-6'>POINTS TABLE SCHEDULE</span>
            </div>
            <div className='item border  bg-white rounded-2'>
                <div className='p-2'>
                <p>2nd ODI. Pakistan tour of Australia, 2024{' '}
                    <a href="#" className="badge badge-info bg-dark text-decoration-none">ODI
                    </a>
                </p>
                <table>
                    <tbody>
                        <tr className='my-2'>
                            <td>
                            <img src={image10} width={'5px'} alt="Australia flag"/> </td> 
                            <td>AFG</td>
                            <td  className='ps-5 fw-bold'>234 (49.5)</td>
                        </tr>
                        <tr>
                            <td>
                            <img src={image11}  width={'5px'} alt="Australia flag"/>

                            </td> 
                            <td>PAK</td>
                            <td  className='ps-5'>234 (49.5)</td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-info mt-3">India won by 11 runs</p>
                </div>
                <span className='text-end number1 d-block text-light p-2 fs-6'>POINTS TABLE SCHEDULE</span>
            </div>
           </OwlCarousel>
           <div className="">
        <nav className="navbar navbar-expand-lg mt-3 bg-white  shadow navbar-light px-4 ">
        <a className="nav-link  text-dark fs-4 fw-bold" href="#">Quick Access</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon bg-light rounded-2"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent2">
     <ul className="navbar-nav m-auto ">
      <li className="">
        <Link className="nav-link  text-dark fs-6 fw-bold bar1" to="/home">BGT 2024-25</Link>
      </li>
      <li className="">
        <a className="nav-link  text-dark fs-6 fw-bold bar1" href="#">Fantasy Handbook</a>
      </li>
      <li className="">
        <a className="nav-link text-dark fs-6 fw-bold bar1" href="#" >See Plans</a>
         </li>
      <li className="">
        <a className="nav-link text-dark fs-6 fw-bold bar1" href="#" >Team India</a>
        </li>
      <li className="">
        <a className="nav-link text-dark fs-6 fw-bold bar1 " href="#" >Cricbuzz Plus</a>
        </li>
        <li className="">
        <a className="nav-link text-dark fs-6 fw-bold bar1" href="#" >CB Plus</a>
        </li>
        <li className="">
        <a className="nav-link text-dark fs-6 fw-bold bar1" href="#" >Time Prime</a>
        </li>
        </ul>
        </div>
        </nav>
        </div>
        <div>
        <div className="row">
        <div className="col-lg-3 col-md-6 col-8 mx-auto p-3 shadow latest">
            <div className=''>
          <h5 className="text-success fw-bold mt-3">LATEST NEWS</h5>
                       <p className="fs-6 text-dark p-2 news ">ICC likely to propose<br/> hybrid model for CT25<br/> 11h ago</p>
                       <p className="fs-6 text-dark p-2 news ">Marnus, at his best, is the<br/> player we need: Andrew<br/> McDonald<br/> 14h ago</p>
                       <p className="fs-6 text-dark p-2 news ">Bangladesh eye crucial <br/>points in bid for direct<br/> World Cup qualification <br/> 16h ago</p>
                       <p className="fs-6 text-dark p-2 news ">Hemp urges Bangladesh<br/> batters to convert starts<br/> 18h ago</p>
                       <p className="fs-6 text-dark p-2 news ">Jacob Bethell to debut in <br/> Christchurch<br/> 1d ago</p>
                       <p className="fs-6 text-dark p-2 news ">Hemp urges Bangladesh<br/> batters to convert starts<br/> 18h ago</p>
                       <p className="fs-6 text-dark p-2 news ">Jacob Bethell to debut in <br/> Christchurch<br/> 1d ago</p>
                       <p className="fs-6 text-dark p-2 news ">Bangladesh eye crucial <br/>points in bid for direct<br/> World Cup qualification <br/> 16h ago</p>
                       <p className="fs-6 text-dark p-2 news ">Marnus, at his best, is the<br/> player we need: Andrew<br/> McDonald<br/> 14h ago</p>
                       <p className="fs-6 text-dark p-2 news ">Marnus, at his best, is the<br/> player we need: Andrew<br/> McDonald<br/> 14h ago</p>
                       <p className="fs-6 text-dark p-2 news ">Marnus, at his best, is the<br/> player we need: Andrew<br/> McDonald<br/> 14h ago</p>
                       <p className="fs-6 text-dark p-2 news ">Marnus, at his best, is the<br/> player we need: Andrew<br/> McDonald<br/> 14h ago</p>
                        
                       </div>
                       </div>
                       <div className="col-lg-6 col-md-6 mx-auto col-8  p-3 shadow ">
                        <div className=''>
                       <h6 className="text-secondary mt-3">ICC CHAMPIONS TROPHY 2025</h6>
                       <h6 className="text-secondary mt-3 news ">ICC likely to propose hybrid model for CT25</h6>
                      <p className="fs-2 text-dark fw-bold  p-2 news ">ICC likely to propose hybrid model for CT25</p>
                       <p className="fs-6 text-dark news ">The ICC board is set to meet online on November 29 to decide on</p>
                       <p className="fs-6 text-dark news ">The ICC board is set to meet online on November 29 to decide on the impasse surrounding the 2025 Champions Trophy</p>
                       <p className="fs-6 text-secondary p-2 news ">IPL AUCTION</p>
                       <div>
                     <img className="rounded-2 p-2" src="https://static.cricbuzz.com/a/img/v1/420x235/i1/c581686/why-franchises-opt-against-sha.jpg" width={"100%"}  alt="restricet"/>
                      </div>
                       <p className="fs-2 fw-bold text-dark p-2 news ">Why franchises opt against Shaw, Thakur even as Suryavanshi creates history</p>
                       <p className="fs-6 text-secondary news ">Meanwhile, many IPL regulars over the last decade including David</p>
                       <p className="fs-6 text-secondary news ">Warner, Kane Williamson and Mayank Agarwal went unsold</p>
                       <p className="fs-6 text-info fw-bold news ">'If we wanted Rishabh, it had to be at INR 27 crore'</p>
                       <p className="fs-6 text-info fw-bold news ">IPL Auction: Big pay-day for the Iyers and a fresh start for Pant</p>
                       <p className="fs-6 text-info fw-bold news "><span className='text-danger fw-bold'>Video /</span> Auction dynamics led us to bid 27 cr for Rishabh Pant: Zaheer Khan</p>
                       <p className="fs-6 text-secondary p-2 news ">SQUAD ANALYSIS</p>
                       <div>
                     <img className="rounded-2 p-2" src="https://static.cricbuzz.com/a/img/v1/420x235/i1/c581503/ipl-2025-auction-how-the-team.jpg" width={"100%"}  alt="restricet"/>
                      </div>
                      </div>
                       </div>
                     </div>
                   
                     </div>
                   </div>
          
    )
}
export default Cricbuzz