import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import searchIcon from "../image/search.svg" 
import data from "../data.json";
import facebook from "../image/facebook.svg";
import instagram from "../image/instagram.svg";
import linkedin from "../image/linkedin.svg";
import twitter from "../image/twitter.svg";
import location from "../image/location.svg";
import filterIcon from "../image/filterIcon.svg";
import ReactPaginate from 'react-paginate';
 

function Dashboard() {
  const [userData, setUserData] = useState(data);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const usersPerPage= 6;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = userData
// eslint-disable-next-line
  .filter((val) => {
    if(searchTerm === ""){
      return val;
    }else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
      return val;
    }
  })
  .slice(pagesVisited, pagesVisited + usersPerPage)
  .map((d) => {
    return (
      <div className="col-lg-4 col-md-6 col-12 profile__column" key={d.id}>
        <div className="full__card">
          <div className="profile__card">
            <img className="user__picture" src={d.profileImage} alt="profile_picture"/>
            <p className="user__name">{d.name}</p>
            <div className="location__section">
              <img src={location} alt=''/>
              <p className="location mb-0">{d.location}</p>
            </div>   
            <div className="user__join">
              <img src="./IMAGE/clock.svg" alt=""/>
              <span>{d.joiningDate}</span>
            </div>
            <div className="contact__icon">
              <div>
                <img className="social__icon" src={facebook} alt="facebook"/>
              </div>
              <div>
                <img className="social__icon" src={instagram} alt="instagram"/>
              </div>
             <div>
                <img className="social__icon" src={linkedin} alt="linkedin"/>
              </div>
              <div>
                <img className="social__icon" src={twitter}alt="twitter"/>
              </div>
            </div>
            <div className="profile__detail__main">
              <div className="profile__detail">
                <p className="mb-0">{d.followers}</p>
                <p className="mb-0">Followers</p>
              </div>
              <div className="profile__detail">
                <p className="mb-0">{d.category}</p>
                <p className="mb-0">Category</p>
              </div>
              <div className="profile__detail">
                <p className="mb-0">{d.gender}</p>
                <p className="mb-0">Gender</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }); 

  const pageCount = Math.ceil(userData.length / usersPerPage);
  const changePage = ({selected}) => {
    setPageNumber(selected)
  };
  useEffect(() => {
    setUserData(data);
  }, []);

  return (
    <Layout>
{/* filter section starts*/}
<div className="search__section container">
    <div className="row">
      <div className="col-lg-2 col-md-3 col-12 my-md-auto">
        <div className="profile__position item__card">
          <p className="profile__count">Profile ({data.length})</p>
        </div>
      </div>
      <div className="input__column col-lg-8 col-md-6 col-12">
        <div className="search__field item__card">
          <img className="search__icon" src={searchIcon} alt="searchIcon"/>
          <input className="profile__input" type="text"  placeholder="Search Profile" onChange={event => {setSearchTerm(event.target.value)}}/>
        </div>
      </div>
      <div className="button__column col-lg-2 col-md-3 col-12">
      <div className="button__card">
          <div className="dropdown">
            <button  className="btn filter__button" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><img className='filter__icon' src={filterIcon} alt="filter__icon"/>
            Advanced Filter
            </button>
            <ul className="dropdown__filter dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
              <h5 className='filter__header'>Filter Options</h5>
              <li>
                <div className=" mb-3">
                  <label className="form-label">Influencer's industry</label>
                  <select className="filter__option form-select">
                    <option>Select Options</option>
                    <option value="1">Food</option>
                    <option value="2">Fashion</option>
                    <option value="3">Sports</option>
                  </select>
                </div>
              </li>
              <li>
                <div className=" mb-3">
                  <label className="form-label">Influencer's Country</label>
                  <select className="filter__option form-select">
                    <option>Select Options</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                </div>
              </li>
              <li>
                <div className=" mb-3">
                  <label className="form-label">Audience’s Country</label>
                  <select className="filter__option form-select">
                    <option>Select Options</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                </div>
              </li>
              <li>
                <div className=" mb-3">
                  <label className="form-label">Influencer’s Social Media Platform</label>
                  <select className="filter__option form-select">
                    <option>Select Options</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                    <option value="YouTube">YouTube</option>
                  </select>
                </div>
              </li>
              <li>
                <div className=" mb-3">
                  <label className="form-label">Influencer’s Social Media Platform</label>
                  <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3"/>
                </div>
              </li>
              <li>
                <div className=" mb-3">
                  <div className="form-label">Influencer’s Gender </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label className="form-check-label">Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label className="form-check-label">Female</label>
                  </div>
                </div>
              </li>   
            </ul>
          </div>
        </div>
      </div> 
    </div>
  </div>
{/* filter section ends */}

{/* profile section starts  */}
<div className="container">
  <div className="profile__row row gx-lg-4 gy-4">  
    {displayUsers}
    <ReactPaginate
    previousLabel={"< Previous"}
    nextLabel={"Next >"}
    pageCount={pageCount}
    onPageChange={changePage}
    containerClassName={"paginationBttns"}
    previousLinkClassName={"previousBttn"}
    nextLinkClassName={"nextBttn"}
    disabledClassName={"paginastionDisabled"}
    activeClassName={"paginationActive"}
    />
  </div>
</div>
{/* profile section ends  */}
    </Layout>
  )
}

export default Dashboard;