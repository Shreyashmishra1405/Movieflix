import "./footer.scss";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="content">
          <p>Questions? Call 000-800-919-1694</p>

          <div className="links">
            <span>FAQ</span>
            <span>Help Centre</span>
            <span>Terms of use</span>
            <span>Privacy</span>
            <span>Cookie preference</span>
            <span>Corporate Information</span>
          </div>
          <div className="drop">
            <select>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
