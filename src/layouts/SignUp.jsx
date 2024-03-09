import React from "react";
import { FaFacebook , FaGoogle , FaLinkedin  } from "react-icons/fa";

function SignUpForm() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const { name, email, password } = state;
    alert(
      `Sign Up done with name: ${name} email: ${email}`
    );

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <div className="social-container">
          <a href="#" className="social">
            <FaFacebook />
          </a>
          <a href="#" className="social">
            <FaGoogle />
          </a>
          <a href="#" className="social">
            <FaLinkedin />
          </a>
        </div>
        <span>or use your email for registration</span>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button className="linear-gradient btn text-white dark:text-black py-3 w-3/6 rounded-lg shadow uppercase cursor-pointer border-2 hover:border-2">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
