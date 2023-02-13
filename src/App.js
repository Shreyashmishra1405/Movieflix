import "./App.scss";
import Register from "./components/Register/Register";
import Home from "./home/Home";
import Login from "./Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/Register" element={<Register  />} />
          <Route exact path="/login" element={<Login   />} />
          <Route exact path="/" element={<Home  />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
