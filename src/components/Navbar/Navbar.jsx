import React  from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {

  const navigate=useNavigate();

  return (

    

    <div className= "navbar">
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
        </div>
        <div className="right">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-bell"></i>
          <div className="profile">
          
            <i className="fa-solid fa-arrow-down downarrow"></i>
            <div className="options">
              <span>settings</span>
              <span onClick={()=>navigate('/login')}>Logout</span>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
