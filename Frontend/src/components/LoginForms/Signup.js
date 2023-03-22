import React, { useState, useEffect } from "react";
import "./signinForms.css";
import { Link } from "react-router-dom";

export default function Signup() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passwordRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!values.name) {
      errors.name = "First name is required";
    } else if (values.name.length < 3) {
      errors.name = "The name must be more than 3 characters";
    } else if (values.name.length > 30) {
      errors.name = "The name must not exceed 30 characters";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 7) {
      errors.password = "Password must be more than 8 characters";
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "Password must contain a special character";
    }
    return errors;
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("object");
    }
  }, [formErrors, isSubmit, formValues]);
  return (
    <div className="container login">
      <div
        className="sigup-hero"
        style={{ backgroundImage: "url(/icons/cloundsbg.jpg)" }}
      ></div>
      <div className="signup-container">
        <h1 className="heading">Sign up</h1>
        <form action="/" className="login-form" onSubmit={handleSubmit}>
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="success">Registration Successful</div>
          ) : (
            <div></div>
          )}
          <div className="form-item">
            <label htmlFor="name">Name*</label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              id="name"
              value={formValues.name}
              placeholder="Name"
            />
          </div>
          <p>{formErrors.name}</p>
          <div className="form-item">
            <label htmlFor="email">Email*</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              placeholder="Email"
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="form-item">
            <label htmlFor="password">Password*</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              id="password"
              value={formValues.password}
              placeholder="Password"
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="primary-btn full form-btn">Sign Up</button>
          <div className="form-divider">
            <div className="dividing-line"></div>
            <div className="divider-txt">or Sign up with Google</div>
            <div className="dividing-line"></div>
          </div>
          <button className="primary-btn full form-btn google-btn">
            <img
              src="/icons/google.svg"
              alt="Google Logo"
              className="google-logo"
            />
            Sign up with Google
          </button>
        </form>
        <div className="dontHaveAccount">
          Already have an account? <Link to="/">Log in</Link>
        </div>
      </div>
    </div>
  );
}