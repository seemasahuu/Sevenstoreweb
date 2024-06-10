import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [inputData, setinputData] = useState("");
  const [error, seterror] = useState("");

  const navigate = useNavigate();

  const inputdatachange = (e) => {
    setinputData(e.target.value);
  };

  const handlesignup = () => {
    if (verify()) {
      navigate("/Producthome");
    }
  };

  const verify = () => {
    let localErr = {};
    let valid = true;

    if (inputData.length === 0) {
      localErr.name = "enter your name";
      valid = false;
    } else if (inputData.length < 5) {
      localErr.name = "name must be have 5 chreacters";
      valid = false;
    }

    seterror(localErr);
    return valid;
  };

  const handleLogin = () => {
    navigate("/Login");
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center ">
        <div
          className="bg-black rounded-md w-[45vh] lg:h-[90vh] lg:w-[55vh]"
          
        >
          <div
            className="bg-white my-16"
            style={{
              borderTopLeftRadius: "140px",
              borderBottomRightRadius: "140px",
              height: "71vh",
            }}
          >
            <h1 className="font-bold text-2xl py-16 pb-0">Register</h1>
            <p>Please Create Your Account</p>
            <div>
              <input
                className="bg-white h-12 w-80 text-md rounded-2xl my-8 mb-0 px-3 outline"
                type="text"
                placeholder="Name"
                name="name"
                value={inputData.name}
                onChange={inputdatachange}
              />
            </div>
            {error.name && <p>{error.name}</p>}
            <input
              className="bg-white h-12 w-80 text-md rounded-2xl my-6 px-3 outline"
              type="text"
              placeholder="Email"
              name="email"
              value={inputData.email}
              onChange={inputdatachange}
            />
            <input
              className="bg-white h-12 w-80 text-md rounded-2xl px-3 outline"
              type="text"
              placeholder="Password"
              name="password"
              value={inputData.password}
              onChange={inputdatachange}
            />
            <button
              className="bg-black text-white h-12 w-44 text-lg rounded-2xl my-10 mb-0 hover:bg-sky-300"
              onClick={handlesignup}
            >
              Sign Up
            </button>
            <div className="flex flex-row px-28 py-1 pr-0">
              <p className="text-xs">Already have an account?</p>
              <button className="text-sky-300 text-sm" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;