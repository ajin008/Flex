import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { X } from "lucide-react";

const GetStartedBtn = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const handleSuccess = async (response) => {
    try {
      const res = await axios.post("http://localhost:12500/auth/googleAuth", {
        token: response.credential,
      });
      console.log("Server Response:", res.data);
      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);
      setShowPopup(false);
    } catch (error) {
      console.error("Error verifying token:", error);
    }
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  const handleSignOut = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setShowDropdown(false);
  };

  // Check for existing user session on component mount
  React.useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="relative">
        {user ? (
          // User Profile Button
          <div className="flex items-center space-x-2">
            <div className="relative">
              <button
                className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-1 rounded-full hover:bg-purple-700 transition-colors"
                onClick={() => setShowDropdown(!showDropdown)}
                onBlur={() => {
                  // Delay hiding the dropdown to allow for button click
                  setTimeout(() => setShowDropdown(false), 200);
                }}
              >
                <img
                  src={`${user.picture}`}
                  alt="User Image"
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="text-sm">{user.name}</span>
              </button>
              {/* Dropdown menu */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-btn3 rounded-lg shadow-lg py-1 z-50">
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-sm text-primary hover:bg-purple-600 hover:text-white"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          // Get Started Button
          <button
            onClick={() => setShowPopup(true)}
            className="bg-purple-600 text-white text-sm px-4 py-1 rounded-full hover:bg-purple-700 transition-colors"
          >
            Get Started
          </button>
        )}

        {/* Popup with Blur Effect */}
        {showPopup && (
          <>
            <div className="fixed inset-0 backdrop-blur-sm bg-[#1f1f1f]/20 flex items-center justify-center z-50">
              <div className="bg-btn3 rounded-lg p-6 w-96 relative shadow-xl">
                <button
                  onClick={() => setShowPopup(false)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="text-center space-y-4">
                  <h2 className="text-2xl font-bold text-primary">Welcome!</h2>
                  <p className="text-primary">
                    Sign in to access all features and personalized content.
                  </p>

                  <div className="flex justify-center pt-4">
                    <GoogleLogin
                      onSuccess={handleSuccess}
                      onError={handleError}
                      useOneTap
                      theme="filled_white"
                      text="signin_with"
                      shape="rectangular"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default GetStartedBtn;
