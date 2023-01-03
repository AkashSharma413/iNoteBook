import React, { useState } from "react";
import {useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({name:"", email: "", password: "" });
  let navigate = useNavigate ();
  const {name, email, password} = credentials;

  const submitHandler = async (e) => {
    e.preventDefault();
    // Signup API call
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, email, password}),
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authToken);
      navigate("/");
      props.showAlert("Congratulations!, you are signed up successfully.", "success");
    } else{
      props.showAlert(json.error, "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
    <div className="row">
        <div className="col-12">
          <form onSubmit={submitHandler}>
          <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={credentials.name}
                onChange={onChange}
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={onChange}
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={onChange}
                className="form-control"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Signup
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup