import React, { useContext } from 'react';
import logo from "../image/logo.png";
import darkLogo from "../image/darkLogo.png"
import facebook from "../image/facebook.svg";
import instagram from "../image/instagram.svg";
import linkedin from "../image/linkedin.svg";
import twitter from "../image/twitter.svg";
import ThemeContext from "../contexts/ThemeContext";

function Footer() {
  const context = useContext(ThemeContext);

  return (
<div className="footer__top">
  <div className="container">
    <div className="footer__logo row">
      <div className="col-md-4 col-sm-4 col-xs-4">
      <div className="navbar-brand" >
        {context.theme === "light" ? <img  src={darkLogo} alt="light" className="nav__logo"/> : <img  src={logo} alt="dark" className="nav__logo"/>}
      </div>
      </div>
      <div className="col-md-8 col-sm-4 col-xs-4"></div>
    </div>
    <div className="footer__info__row row">
      <div className="col-md-3 col-sm-4 col-xs-4">
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi non pariatur numquam animi nam at impedit odit nisi.</p>
        <div className="footer__social__icon">
          <div>
            <img className="social__icon" src={facebook} alt="facebook"/>
          </div>
          <div>
            <img className="social__icon" src={instagram} alt="instagram"/>
          </div>
         <div>
            <img className="social__icon" src={linkedin}alt="linkedin"/>
          </div>
          <div>
            <img className="social__icon" src={twitter} alt="twitter"/>
          </div>
        </div>
      </div>
      <div className="col-md-9 col-sm-12 col-xs-4"> 
        <div className="footer__info">
          <div className="comapany__column">
            <h5 className="heading">Company</h5>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Case Study</li>
              <li>Blog</li>
              <li>Contact</li>
          </ul>
          </div>
          <div className="influencer__part">
            <div className="influencer__div">
              <h5 className="heading">Influencer</h5>
              <ul>
                <li>Join as</li>
                <li>HypeSocial</li>    
              </ul>
            </div>
            <div className="advisor__div">
              <h5 className="heading">Adviser</h5>
              <ul>
                <li>Join as Advertiser</li>
                <li>Hyperlink</li>
             </ul>
            </div>
          </div>
          <div>            
          </div>
        </div>     
      </div>
  </div>
</div>
<div className="footer__bottom">
  <div className="container">
    <div className="sub__footer row">
      <div className="col-lg-6 col-xs-12 order-lg-1 col-md-6 order-md-1 order-2">
        <span className="copyright__text">© Hypescout 2022. All rights reserved</span>
      </div>
      <div className="col-lg-6 col-xs-12 order-lg-2 col-md-6 order-md-2 order-1">
        <ul className="terms__list">
          <li>Terms & Conditions</li>
          <li>Privacy</li>
          <li>Sitemap</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</div>
  )
};

export default Footer;