import React, { useState } from "react";
import SignInForm from "../layouts/SignIn";
import SignUpForm from "../layouts/SignUp";
import "./styles.css";

export default function Login() {
  const [type, setType] = useState("signIn");

  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
    }
  };

  const containerClass = "container " + (type === "signUp" ? "right-panel-active" : "");

  return (
    <div className="h-full w-full bg-black dark:bg-[#f6f5f7] flex justify-center items-center flex-col h-screen">
      <div className="text-center">
        <h2 className="dark:text-black text-white font-bold text-3xl mb-3 text-center">Login / Registration Form </h2>
        <div className={containerClass} id="container">
          <SignUpForm />
          <SignInForm />
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="font-bold text-black">Welcome Back!</h1>
                <p className="text-base text-black font-light leading-5 tracking-wider my-5">To keep connected with us, please login with your personal info</p>
                <button class="rounded-full border border-solid border-1 border-black bg-ff4b2b text-black text-xs font-bold py-3 px-10 tracking-wide uppercase transition-transform duration-80 ease-in focus:outline-none active:scale-95"
                id="signIn" onClick={() => handleOnClick("signIn")} >Sign IN </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="font-bold text-black">Hello, Friend!</h1>
                <p className="text-base text-black font-light leading-5 tracking-wider my-5">Enter your personal details and start your journey with us</p>
                <button class="rounded-full border border-solid border-1 border-black bg-ff4b2b text-black text-xs font-bold py-3 px-10 tracking-wide uppercase transition-transform duration-80 ease-in focus:outline-none active:scale-95"
                 id="signUp" onClick={() => handleOnClick("signUp")}>Sign UP </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
