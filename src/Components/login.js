import { Form } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

const Login = () => {

    const[isSignedInForm,setIsSignedInForm] = useState(true);

    const toogleSignedInForm = ()=>
    {
        setIsSignedInForm(!isSignedInForm);
    }

  return (
    <div className="relative h-screen bg-black text-white">
      {/* Header */}
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IE-en-20240930-TRIFECTA-perspective_e6fe5ae5-7ff2-4170-a5c1-812e93bb6979_large.jpg"
          alt="background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay */}
      </div>

      {/* Login Form */}
      <Form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-3/12 p-8 bg-black bg-opacity-80 shadow-lg rounded-md z-10">
        <h1 className="font-bold text-3xl py-4 text-white">
          {isSignedInForm ? "Sign In" : "Sign Up"}</h1>
          {
            !isSignedInForm &&
           (<input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />) 
        }
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button className="p-4 my-6 bg-red-600 w-full rounded-lg hover:bg-red-700 transition duration-300">
        {isSignedInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="font-bold" onClick={toogleSignedInForm}>
        {isSignedInForm ? 
        "New to Netflix? Sign Up Now" 
        : "Already registered? Sign In Now"}
            </p>
      </Form>
    </div>
  );
};

export default Login;
