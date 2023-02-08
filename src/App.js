import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Pricing from "./components/pricing";
import SignUp from "./components/signup";
import Login from "./components/login";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState({
    email: "",
    value: false,
  });
  return (
    <div style={{ background: "#181818" }}>
      <Navbar isLoggedIn={loggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login setLoggedIn={setLoggedIn} />} />
      </Routes>
    </div>
  );
}

export default App;
