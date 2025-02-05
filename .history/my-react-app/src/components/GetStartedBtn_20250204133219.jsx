import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GetStartedBtn = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const login = () => {
    const handleSuccess = async (response) => {
      try {
        const res = await axios.post("http://localhost:12500/auth/googleAuth", {
          token: response.credential,
        });
        console.log("Server Response:", res.data);
        // localStorage.setItem("accessToken", res.data.token);
      } catch (error) {
        console.error("Error verifying token:", error);
      }
    };
  };
  return (
    
  );
};

export default GetStartedBtn;
