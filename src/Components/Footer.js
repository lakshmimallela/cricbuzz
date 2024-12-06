import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-dark mt-4">
      <div className="container">
        <div className="row py-4">
          {/* Logo Section */}
          <div className="col-lg-3 col-md-6 col-sm-8 col-8 mx-auto text-center">
            <img className="mt-4"src="https://static.cricbuzz.com/images/cb_logo.svg" width="40%" alt="Cricbuzz Logo" />
          </div>
           {/* Mobile Site & Apps Section */}
          <div className="col-lg-3 col-md-6 col-sm-8 col-8 mx-auto">
            <h4 className="text-start text-white mb-3 mt-4 fs-5 p-2">
              MOBILE SITE & APPS
            </h4>
            <ul className="list-unstyled">
              <li className="text-white text-start p-2">
                <i className="fa-solid fa-globe"></i>&nbsp; M.Cricbuzz.com
              </li>
              <li className="text-white text-start p-2">
                <i className="fa-brands fa-android"></i>&nbsp; Android
              </li>
              <li className="text-white text-start p-2">
                <i className="fa-brands fa-apple"></i>&nbsp; iOS
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="col-lg-3 col-md-6 col-sm-8 col-8 mx-auto">
            <h4 className="text-start text-white mb-3 mt-4 fs-5 p-2">
              FOLLOW US ON
            </h4>
            <ul className="list-unstyled">
              <li className="text-white text-start p-2">
                <i className="fa-brands fa-facebook"></i>&nbsp; Facebook
              </li>
              <li className="text-white text-start p-2">
                <i className="fa-brands fa-twitter"></i>&nbsp; Twitter
              </li>
              <li className="text-white text-start p-2">
                <i className="fa-brands fa-youtube"></i>&nbsp; YouTube
              </li>
              <li className="text-white text-start p-2">
                <i className="fa-brands fa-pinterest"></i>&nbsp; Pinterest
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="col-lg-3 col-md-6 col-sm-8 col-8 mx-auto">
            <h4 className="text-start text-white mb-3 mt-4 fs-5 p-2">COMPANY</h4>
            <ul className="list-unstyled">
              <li className="text-white text-start p-2">Careers</li>
              <li className="text-white text-start p-2">Advertise</li>
              <li className="text-white text-start p-2">Privacy Policy</li>
              <li className="text-white text-start p-2">Terms of Use</li>
              <li className="text-white text-start p-2">Cricbuzz TV Ads</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Ending */}
      <div className="ending border-top">
        <h6 className="fw-bold text-center text-light py-3 mb-0">
          © 2024 Cricbuzz.com, Times Internet Limited. All rights reserved | The Times of India | Navbharat Times
        </h6>
      </div>
    </div>
  );
};

export default Footer;
