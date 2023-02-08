import { useState } from "react";
import styles from "../static/css/signup.module.css";
import axios from "axios";

const SignUp = () => {
  const [disp, setDisp] = useState("none");
  const defaultErrState = {
    name: false,
    email: false,
    pass: false,
    confMail: false,
    confPass: false,
  };

  const defaultState = {
    name: "",
    email: "",
    confMail: "",
    pass: "",
    confPass: "",
  };

  const [person, setPerson] = useState(defaultState);
  const [err, setErr] = useState(defaultErrState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const validateName = (val) => {
    if (val.length <= 1) {
      setErr((prev) => {
        return { ...prev, name: true };
      });
      return false;
    }
    const variable = err;
    variable.name = false;
    setErr({ ...variable });

    return true;
  };

  const validateEmail = (email) => {
    if (
      String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      const variable = err;
      variable.email = false;
      setErr({ ...variable });
      return true;
    }
    setErr({ ...err, email: true });
    return false;
  };

  const validateConfEmail = (email) => {
    if (validateEmail(email) && email === person.email) {
      const variable = err;
      variable.confMail = false;
      setErr({ ...variable });
      return true;
    }
    setErr({ ...err, confMail: true });
    return false;
  };

  const validatePassword = (pass) => {
    if (
      String(pass).match(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
      )
    ) {
      const variable = err;
      variable.pass = false;
      setErr({ ...variable });
      return true;
    }
    setErr({ ...err, pass: true });
    return false;
  };

  const validateConfPassword = (pass) => {
    if (person.pass === pass) {
      const variable = err;
      variable.confPass = false;
      setErr({ ...variable });
      return true;
    }
    setErr({ ...err, confPass: true });
    return false;
  };

  const handleSubmit = async () => {
    setErr({ ...defaultErrState });
    console.log(person);
    if (
      validateName(person.name) &&
      validateEmail(person.email) &&
      validateConfEmail(person.confMail) &&
      validatePassword(person.pass) &&
      validateConfPassword(person.confPass)
    ) {
      try {
        const response = await axios.post("/register", person);
        const status = response.status;
        if (status === 200) {
          setDisp("inline");
        }
      } catch (err) {
        console.log(err);
      }

      setPerson(defaultState);
      return;
    }
  };
  return (
    <div>
      <div className={styles.outer}>
        <div className={styles.signup}>
          <span className={styles.alertBox} style={{ display: disp }}>
            Registered Successfully.
          </span>
          <div className={styles.title}> Sign Up</div>{" "}
          <div className={styles.wrapper}>
            <div className={styles.inputField}>
              <input
                id="name"
                name="name"
                placeholder="Full Name"
                type="text"
                required
                value={person.name}
                onChange={handleChange}
                className={err.name ? styles.error : "none"}
              />{" "}
              <input
                id="email"
                name="email"
                placeholder="Email"
                type="text"
                required
                value={person.email}
                onChange={handleChange}
                className={err.email ? styles.error : "none"}
              />
              <input
                id="confMail"
                name="confMail"
                placeholder="Confirm Email"
                type="text"
                required
                value={person.confMail}
                onChange={handleChange}
                className={err.confMail ? styles.error : "none"}
              />
              <input
                id="pass"
                name="pass"
                placeholder="Password"
                type="password"
                required
                value={person.pass}
                onChange={handleChange}
                className={err.pass ? styles.error : "none"}
              />
              <input
                id="confPass"
                name="confPass"
                placeholder="Confirm Password"
                type="password"
                required
                value={person.confPass}
                onChange={handleChange}
                className={err.confPass ? styles.error : "none"}
              />
              <button
                onClick={handleSubmit}
                className={styles.submit}
                type="submit"
              >
                {" "}
                REGISTER{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
