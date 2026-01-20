import React, { useState } from "react";
import { Link } from "react-router-dom";
import heroSvg from "../assets/Hero.svg";
import { toast } from "react-toastify";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const SignIn = () => {
  const [passwordType, setPasswordType] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      // console.log("all input field is required");
      toast.error("all input field is required");
      return;
    }

    toast.success("Form Submit Successfully");
  };

  return (
    <div className="signin-container w-full py-5 relative overflow-hidden md:h-lvh">
      <div className="w-full mx-auto mt-20 flex flex-col-reverse justify-between items-center gap-5 md:flex-row md:w-190">
        {/* Form Section Start */}
        <form className="relative" onSubmit={handleFormSubmit}>
          <h1 className="text-3xl mb-5">Sign In</h1>
          <p className="mb-2">You are a step away from something great!</p>

          <input
            className="border rounded my-2 w-full px-2 py-1.5 placeholder:text-black"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            className="border rounded my-2 w-full px-2 py-1.5 pr-6 placeholder:text-black"
            type={passwordType ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label
            className="absolute right-2 top-40 cursor-pointer"
            htmlFor="password-type-check"
          >
            {passwordType ? <IoEyeOff /> : <IoEye />}
          </label>
          <input
            className="hidden "
            type="checkbox"
            name="password-type"
            id="password-type-check"
            onClick={(e) => setPasswordType(e.target.checked)}
          />
          <br />
          <div className="my-2">
            <input
              className="accent-black"
              type="checkbox"
              name="term-of-services"
              id="term-of-services"
            />
            <label className="pl-3" htmlFor="term-of-services">
              I agree to terms of services.
            </label>
          </div>
          <div className="flex justify-start items-center gap-5 mt-3">
            <button className="cursor-pointer border bg-black text-white py-1.5 px-5 text-2xl rounded">
              Sign In
            </button>
            <Link
              to={"/signup"}
              className="border py-1.5 px-5 text-2xl rounded "
            >
              Sign Up
            </Link>
          </div>
        </form>
        {/* Form Section End */}

        {/* Hero-Image Section */}
        <div className="hero-image">
          <img src={heroSvg} alt="login hero image" width={"350px"} />
        </div>
      </div>
      <div className="circle-design bg-black w-30 h-30 -bottom-13 -right-16 md:w-60 md:h-60 md:-bottom-20 md:-right-25 rounded-full absolute "></div>
    </div>
  );
};

export default SignIn;
