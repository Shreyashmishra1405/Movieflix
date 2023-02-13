import { useRef } from "react";
import "./login.scss";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const checkname = useRef("");
  const navigate = useNavigate();
  const loginRef = useRef();

  return (
    <>
      <div className="wrapper-main-login" ref={loginRef}>
        <div className="header">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
        </div>

        <div className="container">
          <form>
            <h1>Sign In</h1>
            <input type="text" required placeholder="Email or Phone number" />
            <input
              type="password"
              required
              placeholder="Password"
              autoComplete="on"
              ref={checkname}
            />
            <button type="button">Sign in</button>
            <span>
              New to Netflix? <b onClick={() => navigate("/")}>Sign up now.</b>
            </span>
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <a href="#ad">Learn more.</a>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
