import { Form } from "react-router-dom";
import Header from "./Header";
import { useState, useRef } from "react";
import { CheckValidData } from "../Utils/validate";
import { auth } from "../Utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";

const Login = () => {
  const [isSignedInForm, setIsSignedInForm] = useState(true); // Track form type
  const [errorMessage, setErrorMessage] = useState(null); // Store error messages
  const email = useRef(null); // Ref for Email
  const password = useRef(null); // Ref for Password
  const userName = useRef(null); // Ref for Name (only used in sign up)

  const dispatch = useDispatch();

  const toggleSignedInForm = () => {
    setIsSignedInForm(!isSignedInForm); // Toggle between Sign In and Sign Up
  };

  const validationChecker = () => {
    const message = CheckValidData(email.current?.value, password.current?.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignedInForm) {
      // Sign-up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userName.current.value, // Add display name
          })
            .then(() => {
              dispatch(addUser({ uid: user.uid, email: user.email, displayName: userName.current.value }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(`${error.code} - ${error.message}`);
        });
    } else {
      // Sign-in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        })
        .catch((error) => {
          setErrorMessage(`${error.code} - ${error.message}`);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from reloading
    validationChecker(); // Validate and handle form submission
  };

  return (
    <div className="relative h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
      {/* Header */}
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IE-en-20240930-TRIFECTA-perspective_e6fe5ae5-7ff2-4170-a5c1-812e93bb6979_large.jpg"
          alt="background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div> {/* Dark overlay */}
      </div>

      {/* Login/SignUp Form */}
      <Form
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 md:w-6/12 lg:w-4/12 p-12 bg-black bg-opacity-50 shadow-2xl rounded-lg z-10 space-y-8"
        onSubmit={handleSubmit}
      >
        <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-center">
          {isSignedInForm ? "Sign In" : "Sign Up"}
        </h1>

        {/* Full Name field (only in Sign Up) */}
        {!isSignedInForm && (
          <input
            ref={userName}
            type="text"
            placeholder="Full Name"
            className="p-4 w-full bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        )}

        {/* Email Address */}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 w-full bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {/* Password */}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 w-full bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {/* Display error message */}
        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}

        {/* Submit Button */}
        <button className="p-4 w-full bg-red-600 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300">
          {isSignedInForm ? "Sign In" : "Sign Up"}
        </button>

        {/* Toggle between Sign In and Sign Up */}
        <p
          className="font-medium text-center text-gray-400 hover:text-white cursor-pointer transition duration-300"
          onClick={toggleSignedInForm}
        >
          {isSignedInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </Form>
    </div>
  );
};

export default Login;
