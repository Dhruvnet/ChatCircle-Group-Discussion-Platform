import React from "react";
import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const { email, password } = state;

    console.log("Submitted credentials:", email, password);

    if (email === "dhruvsheth700@gmail.com" && password === "dhruv123") {
      console.log("Login successful");
      login();
      navigate("/dashboard");
    } else {
      console.log("Invalid email or password");
      alert("Invalid email or password");
    }

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <div className="social-container">
          <a href="#" className="social">
            <FaFacebook />
          </a>
          <a href="#" className="social">
            <FaGoogle />
          </a>
          <a href="#" className="social">
            <FaLinkedinIn />
          </a>
        </div>
        <span>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a href="#">Forgot your password?</a>
        <button className="linear-gradient btn text-white dark:text-black py-3 w-3/6 rounded-lg shadow uppercase cursor-pointer border-2 hover:border-2">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;