import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { addToken } from "../actions/tokenAction";

async function fetchToken(userIn) {
  let response = await fetch("http://localhost:8000/login");
  console.log(response.status); // 200

  if (response.status === 200) {
    let users = await response.json();

    function check(user) {
      if (
        user.username === userIn.username &&
        user.password === userIn.password
      ) {
        console.log(user);
        return user;
      }
    }

    const userRight = users.filter(check);
    console.log(userRight);

    if (userRight.length !== 0) {
      return userRight;
    } else {
      alert("wrong username or password");
      return null;
    }
  }
}

export default function Login({ setToken }) {
  const tokenState = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await fetchToken({ username, password });
    //console.log(token)
    setToken(token);
    dispatch(addToken(token));
  };

  return (
    <div class="row">
      <div class="col-lg-10 col-xl-9 mx-auto login">
        <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
          <div class="card-img-left d-none d-md-flex">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ width: "100%", height: "100%" }}
            >
              <div>
                <img src="../22.png" style={{ width: "100%" }} alt="..." />
                <div class="text-center fs-2 dropshadow text-white">
                  what's your it's your !!!
                </div>
              </div>
            </div>
          </div>
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center fw-light fs-2 dropshadow font-weight-bold">
              HI !!, THERE
            </h5>
            <p class="text-center dropshadow">
              you can login your account here !!!
            </p>

            <form onSubmit={handleSubmit}>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInputUsername"
                  placeholder="myusername"
                  required
                  autofocus
                  onChange={(e) => setUserName(e.target.value)}
                />
                <label for="floatingInputUsername">Username</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingInputEmail"
                  placeholder="name@example.com"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label for="floatingInputEmail">Password</label>
              </div>

              <div class="d-grid mb-2">
                <button
                  class="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                  type="submit"
                >
                  LOGIN
                </button>
              </div>

              <a class="d-block text-center mt-2 small" href=".">
                Don't have an account? Sign Up
              </a>

              <hr className="my-4" />

              <div class="d-grid mb-2">
                <button
                  class="btn btn-lg btn-google btn-login fw-bold text-uppercase"
                  type="submit"
                >
                  <i class="fab fa-google me-2"></i> Login with Google
                </button>
              </div>

              <div class="d-grid">
                <button
                  class="btn btn-lg btn-facebook btn-login fw-bold text-uppercase"
                  type="submit"
                >
                  <i class="fab fa-facebook-f me-2"></i> Login with Facebook
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
