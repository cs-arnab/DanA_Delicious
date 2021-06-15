import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser } from "../actions/userActions";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginstate = useSelector((state) => state.loginUserReducer);
  const { error, loading } = loginstate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  });

  function login() {
    console.log("login button");
    const user = { email, password };
    dispatch(loginUser(user));
  }
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 m-5 text-left shadow p-3 mb-5 bg-white rounded">
          <h2 className="text-center mb-1" style={{ fontSize: "35px" }}>
            Login
          </h2>

          {/* {loading && <Loading />} */}
          {loading && (<Loading/>)} 

          {error && <Error error="Invalid Credentials" />}

          <div>
            <input
              autoFocus
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

            <button onClick={login} className="btn m-3">
              LOGIN
            </button>
            <br></br>
            <a href="/register">Click Here To Register</a>
          </div>
        </div>
      </div>
    </div>
  );
}
