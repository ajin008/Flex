import React from "react";
import { GoogleAuthProvider, GoogleLogin } from "@react-oauth/google";

const GetStartedBtn = () => {
  return (
    <div className=" md:flex space-x-2">
      <button className="bg-purple-600 text-white text-sm px-4 py-1 rounded-full hover:bg-purple-700 transition-colors">
        GetStarted
      </button>
    </div>
  );
};

export default GetStartedBtn;
