import React from "react";
import "./featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      {/* <img src="https://assets.nflxext.com/ffe/siteui/vlv3/862cc171-8df5-418c-886f-2aaf767ae159/2e1414e3-cdae-473f-af07-31f9b74741f6/IN-en-20230130-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" /> */}
      {/* <video autoPlay muted src="/asset/dark.mp4"></video> */}
      <div className="info">
        <span className="title">DARK</span>
        <span className="description">
          When two children go missing in a small German town, its sinful past
          is exposed along with the double lives and fractured relationships
          that exist among four families as they search for the kids. The
          mystery-drama series introduces an intricate puzzle filled with twists
          that includes a web of curious characters, all of whom have a
          connection to the town's troubled history--whether they know it or
          not. The story includes supernatural elements that tie back to the
          same town in 1986.
        </span>
        <div className="buttons">
          <button className="play">
            <i className="fa-solid fa-play">
              <span>play</span>
            </i>
          </button>
          <button>
            <i className="fa-solid fa-circle-info">
              <span>Info</span>
            </i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
