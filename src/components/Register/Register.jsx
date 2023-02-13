import "./register.scss";
import { useRef, useState } from "react";
import Section from "./Section";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const data = {
  section1: {
    title: "Enjoy on your TV.",
    desc: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
    rev: false,
  },
  section2: {
    title: "Download your shows to watch offline.",
    desc: "Save your favourites easily and always have something to watch.",
    img: "https://occ.a.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420",
    rev: true,
  },
};

const Register = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const passRef = useRef();
  const EmailRef = useRef();
  const handlestart = () => {
    setEmail(EmailRef.current.value);
  };
  const handlefinish = () => {
    setPassword(passRef.current.value);
  };

  return (
    <>
      <div className="wrapper-main-register">
        <div className="header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt=""
          />
          <button
            className="signin"
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign In
          </button>
        </div>

        <div className="container">
          <h1>Unlimited movies, TV shows and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          {!Email ? (
            <div className="input-box">
              <input
                type="email"
                placeholder="Email Address"
                id=""
                ref={EmailRef}
              />
              <button type="search" onClick={handlestart}>
                Get Started
                <i className="fa-sharp fa-solid fa-chevron-right"></i>
              </button>
            </div>
          ) : (
            <form className="input-box">
              <input
                type="password"
                placeholder="password"
                autoComplete="of"
                id=""
                ref={passRef}
              />
              <button type="search" onClick={handlefinish}>
                Start <i className="fa-sharp fa-solid fa-chevron-right"></i>
              </button>
            </form>
          )}
        </div>
      </div>

      <Section data={data.section1} />
      <Section data={data.section2} />
      {/* <Section  data={data.section1}  />
      <Section  data={data.section2}  /> */}

      <Footer />
    </>
  );
};

export default Register;
