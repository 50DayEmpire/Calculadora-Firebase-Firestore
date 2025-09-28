import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { googleLogin, emailAndPasswordLogin } from "../actions/auth";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };

  const handleEmailAndPasswordLogin = (e) => {
    e.preventDefault();
    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }
    if (password.trim() === "" || password.trim().length < 6) {
      return;
    }
    dispatch(emailAndPasswordLogin(email, password));
  };

  return (
    <div className="container">
      <h3>Login</h3>
      <hr />

      <div className="row container">
        <form className="col s12" onSubmit={handleEmailAndPasswordLogin}>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                type="email"
                id="icon_prefix2"
                className="materialize-textarea"
                onChange={handleChange}
                name="email"
                value={email}
              />
              <label htmlFor="icon_prefix2">Email</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                type="password"
                id="icon_prefix3"
                className="materialize-textarea"
                onChange={handleChange}
                name="password"
                value={password}
              />
              <label htmlFor="icon_prefix3">Password</label>
            </div>
          </div>

          <button className="btn waves-effect waves-light" type="submit">
            Enviar
          </button>
          <hr />
          <GoogleButton type="dark" onClick={handleGoogleLogin} />
          <Link to="/register">Register in the platform</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
