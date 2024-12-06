import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";
import FireValid from "./Firebasevalid";
const Navbar=()=>{
    return(
      <div className="">
      <nav class="navbar navbar-expand-lg navbar-light px-4 ">
        <Link className="navbar-brand" to="/">Cricbuzz</Link>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-light rounded-2"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto ">
      <li className="nav-item text-light">
        <a className="nav-link  text-light bar" href="#">Live Scores</a>
      </li>
      <li className="nav-item">
        <a className="nav-link  text-light  bar" href="#">Schedule</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light  bar" href="#" > Archives </a>
         </li>
      <li className="nav-item">
        <a className="nav-link  dropdown-toggle  text-light  bar" href="#">News
        <div className="names mt-3">
          <div className="row border bg-light ">
            <div className="col-12 text-dark  pt-3">
              <p>All Stories</p>
              <p>Premium Editores</p>
              <p>Letest News</p>
              <p>Topics</p>
              <p>SportLight</p>
              <p>opinions</p>
              <p>specials</p>
              <p>Interviews</p>
              <p>Live Blogs</p>
              <p>Live Blogs</p>
              <p>Harsha Bhogle</p>
            </div>
            </div>
          </div>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link  dropdown-toggle  text-light  bar" href="#">Series
        <div className="names mt-3">
          <div className="row border bg-light ">
            <div className="col-12 text-dark  pt-2">
              <p>New Zealand tour of india,2024</p>
              <p>India tour of South Africa,2024</p>
              <p>Afghanistan v Bangladesh in UAE,2024</p>
              <p>India tour of Australia,2024-25</p>
              <p>England tour of West Indies,2024</p>
              <p>Womens Big Bash League 2024</p>
              <p>Pakistan tour of Australia,2024</p>
              <p>Ranji Trophy Elite 2024-25</p>
              <p>New Zealand tour of Sri Lanka,2024</p>
              <p className="Series">All Series</p>
            </div>
            </div>
          </div>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link  dropdown-toggle  text-light  bar" href="#">Teams
        <div className="names mt-3">
          <div className="row border bg-light ">
            <div className="col-lg-6 md-6 col-12 text-dark ">
              <h6 className="fw-bold mt-4">TEST TEAMS</h6>
              <p>India</p>
              <p>Pakistan</p>
              <p>Landon</p>
              <p>Australia</p>
              <p>Neuziland</p>
              <p>American</p>
              <p>South Africa</p>
              <p>Africa</p>
              <p>England</p>
              <p>West Indies</p>
              <p>Ireland</p>
            </div>
            <div className="col-lg-6 md-6 col-12 text-dark">
              <h6 className="fw-bold mt-4">ASSOCIATE</h6>
              <p>Malaysia</p>
              <p>Nepal</p>
              <p>Germany</p>
              <p>Namibia</p>
              <p>Denmark</p>
              <p>Singapore</p>
              <p>Kuwait</p>
              <p>Vanuatu</p>
              <p>Jersey</p>
              <p>Oman</p>
              <p>Fiji</p>
              </div>
            </div>
          </div>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link  dropdown-toggle  text-light  bar" href="#">Videos</a>
        <div className="names mt-2">
          <div className="row border bg-light ">
            <div className="col-12 text-dark  pt-2">
              <p>All Videos</p>
              <p>Categories</p>
              <p>Playlists</p>
             </div>
            </div>
          </div>
      </li>
      <li className="nav-item">
        <a className="nav-link  dropdown-toggle  text-light  bar" href="#">Rankings</a>
        <div className="names mt-2">
          <div className="row border bg-light ">
            <div className="col-12 text-dark  pt-2">
              <p>ICC Rankings-Men</p>
              <p>ICC Rankings-Women</p>
               </div>
            </div>
          </div>
      </li>
      <li className="nav-item">
        <a className="nav-link  dropdown-toggle  text-light  bar" href="#">More</a>
        <div className="names mt-2">
          <div className="row border bg-light ">
            <div className="col-12 text-dark  pt-2">
              <p>World Test Championship</p>
              <p>World Cup Super League</p>
              <p>Photos</p>
              <p>Mobile Apps</p>
              <p>Careers</p>
              <p>Contact Us</p>
               </div>
            </div>
          </div>  
         </li>
      <li className="nav-item">
        <button className=" btn  btn-light text-light rounded-5 text-dark bar" href="#">Crickbuzz Plus
      
        </button>
      </li>
      <li className="nav-item">
        <div className="icon">
        <a className="nav-link  text-light" href="#"><FaMagnifyingGlass/></a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link  text-light" href="#"> <FireValid/></a>
        </li>
    </ul>
   </div>
</nav>
</div>
  )
}
export default Navbar
