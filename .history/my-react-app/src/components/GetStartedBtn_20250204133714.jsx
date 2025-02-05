import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { X } from "lucide-react";

const GetStartedBtn = () => {
  const [showPopup, setShowPopup] = useState(false);
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const handleSuccess = async (response) => {
    try {
      const res = await axios.post("http://localhost:12500/auth/googleAuth", {
        token: response.credential,
      });
      console.log("Server Response:", res.data);
      setShowPopup(false); // Close popup after successful login
    } catch (error) {
      console.error("Error verifying token:", error);
    }
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="relative">
        {/* Get Started Button */}
        <button
          onClick={() => setShowPopup(true)}
          className="bg-purple-600 text-white text-sm px-4 py-1 rounded-full hover:bg-purple-700 transition-colors"
        >
          Get Started
        </button>

        {/* Popup Card */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-96 relative">
              {/* Close Button */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>

              {/* Popup Content */}
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">Welcome!</h2>
                <p className="text-gray-600">
                  Sign in to access all features and personalized content.
                </p>

                {/* Google Login Button */}
                <div className="flex justify-center pt-4">
                  <GoogleLogin
                    onSuccess={handleSuccess}
                    onError={handleError}
                    useOneTap
                    theme="filled_blue"
                    text="signin_with"
                    shape="rectangular"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default GetStartedBtn;
