import { useState } from "react";
import signupStyles from "../static/css/signup.module.css";
import loginStyles from "../static/css/login.module.css";
import axios from "axios";

const Login = ({ setLoggedIn }) => {
  const [person, setPerson] = useState({ email: "", pass: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(person);
    try {
      const response = await axios.post("/login", person);
      if (response.status) {
        setLoggedIn((prev) => {
          return { ...prev, email: person.email };
        });
      } else {
        setLoggedIn((prev) => {
          return { ...prev, value: false };
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setPerson((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className={signupStyles.outer}>
      <div className={signupStyles.signup}>
        <div className={signupStyles.title}> Login </div>{" "}
        <div className={signupStyles.wrapper}>
          <div className={loginStyles.inputField}>
            <input
              id="email"
              name="email"
              placeholder="Email"
              type="text"
              required
              value={person.email}
              onChange={handleChange}
            />
            <input
              id="pass"
              name="pass"
              placeholder="Password"
              type="password"
              required
              value={person.pass}
              onChange={handleChange}
            />
            <button
              onClick={handleSubmit}
              className={loginStyles.submit}
              type="submit"
            >
              {" "}
              Login{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
