import { NavLink } from "react-router-dom";
import logo from "../image/logo.png";
import notification from "../image/notification.png";
import darkMood from "../image/darkMood.png";
import user from "../image/user.png";
import lightMood from "../image/lightMoodIcon.svg";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const Nav = () => {
  const context = useContext(ThemeContext);
  const toggleThemeHandler = () => {
    context.toggle();
  }

  return (
    <nav className="navbar navbar-expand-lg nav__main">
    <div className="container">
      <div className="navbar-brand" >
        <img  src={logo} alt="logo" className={context.theme === "dark" ? "nav__logo" : "nav__logo__light" }/>
      </div> 
      <div className="d-flex justify-content-center align-items-center gap-3">
        <ul className="nav__icon__list">
        <li>
            <img src={notification} alt="notification-icon"/>
          </li>
          <li>
          <div onClick={toggleThemeHandler}>
        {context.theme === "light" ? <img  src={lightMood} alt="light" /> : <img  src={darkMood} alt="dark"/>}
      </div>
          </li>
          <li>
            <span className="nav__user">Hi, Rakib</span>
            <img src={user} alt="user-icon"/>
          </li>
        </ul>
        <button className="navbar-dark navbar-toggler toggler__button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item nav__item">
          <NavLink
            to="/"
            className="nav-link nav__link"
            activeclassname="active"
          >
            Dashboard
          </NavLink>
          </li>
          <li className="nav-item nav__item">
          <NavLink
            to="/campaign"
            className="nav-link nav__link"
            activeclassname="active"
          >
            Campaign
          </NavLink>
          </li>
          <li className="nav-item nav__item">
          <NavLink
            to="/hypesocial"
            className="nav-link nav__link"
            activeclassname="active"
          >
            Hypesocial
          </NavLink>
          </li>
          <li className="nav-item nav__item">
          <NavLink
            to="/insights"
            className="nav-link nav__link"
            activeclassname="active"
          >
            Insights
          </NavLink>
          </li>
        </ul>
        <ul className="nav__icon__list__mobile">
          <li>
            <img src={notification} alt="notification-icon"/>
          </li>
          <li>
          <div onClick={toggleThemeHandler}>
        {context.theme === "light" ? <img src={lightMood} alt="light"/> : <img src={darkMood} alt="dark"/>}
      </div>
          </li>
          <li>
            <span className="nav__user">Hi, Rakib</span>
            <img src={user} alt="user-icon"/>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Nav;
