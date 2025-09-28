import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { register } from "../actions/auth.js";

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const { email, username, password, confirmPassword } = data;

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }

    if (username.trim() === "" || username.trim().length < 2) {
      return;
    }

    if (password.trim() === "" || password.trim().length < 6) {
      return;
    } else if (password !== confirmPassword) {
      return;
    }

    dispatch(register(email, username, password));
  };

  return (
    <div className="container">
      <h3>Register</h3>
      <hr />

      <div className="row container">
        <form onSubmit={handleRegister} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                type="email"
                id="icon_prefix1"
                className="materialize-textarea"
                onChange={handleChange}
                value={email}
                name="email"
              />
              <label htmlFor="icon_prefix1">Email</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">assignment_ind</i>
              <input
                type="text"
                id="icon_prefix2"
                className="materialize-textarea"
                onChange={handleChange}
                value={username}
                name="username"
              />
              <label htmlFor="icon_prefix2">Username</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                type="password"
                id="icon_prefix3"
                className="materialize-textarea"
                onChange={handleChange}
                value={password}
                name="password"
              />
              <label htmlFor="icon_prefix3">Password</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                type="password"
                id="icon_prefix4"
                className="materialize-textarea"
                onChange={handleChange}
                value={confirmPassword}
                name="confirmPassword"
              />
              <label htmlFor="icon_prefix4">Confirm Password</label>
            </div>
          </div>

          <button className="btn waves-effect waves-light" type="submit">
            Enviar
          </button>
          <hr />
          <Link to="/login">Already have an account? Login</Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
