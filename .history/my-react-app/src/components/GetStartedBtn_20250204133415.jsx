import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GetStartedBtn = () => {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const handleSuccess = async (response) => {
    try {
      const res = await axios.post("http://localhost:12500/auth/googleAuth", {
        token: response.credential,
      });
      console.log("Server Response:", res.data);
      // Optionally store the token in localStorage
      // localStorage.setItem("accessToken", res.data.token);
    } catch (error) {
      console.error("Error verifying token:", error);
    }
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="md:flex space-x-2">
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          style={{ display: "none" }}
        />
        <button
          onClick={() => document.querySelector(".google-login-button").click()} // Trigger Google Login on button click
          className="bg-purple-600 text-white text-sm px-4 py-1 rounded-full hover:bg-purple-700 transition-colors"
        >
          Get Started
        </button>
      </div>
    </GoogleOAuthProvider>
  );
};

export default GetStartedBtn;
