import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";

export default function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const registerstate = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerstate;

  const dispatch = useDispatch();
  function register() {
    const emailregex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (name.length < 1) {
      alert("Empty user name");
    } else if (!emailregex.test(String(email).toLowerCase())) {
      alert("Enter A Valid Mail");
    } else if (password !== cpassword) {
      alert("Passwords Not Matched");
    } else if (password.length < 4) {
      alert("Use a minimum password length of 4 characters or greater");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 m-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          <h2 className="text-center mb-1" style={{ fontSize: "35px" }}>
            Register
          </h2>

          {loading && <Loading />}
          {success && <Success success="User Registered Successfully" />}
          {error && <Error error="Email Already Exist" />}
          <div>
            <input
              autoFocus
              type="text"
              required
              placeholder="Enter Your Name"
              className="form-control"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              type="text"
              required
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              type="password"
              required
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <input
              type="text"
              required
              placeholder="Confirm Password"
              className="form-control"
              value={cpassword}
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
            />
            <button onClick={register} className="btn m-3">
              REGISTER
            </button>
            <br></br>
            <a href="/login">Click Here To Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
