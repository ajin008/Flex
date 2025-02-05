import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { googleLogout } from "@react-oauth/google";
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

      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);

      setUser(res.data.user);
      setShowPopup(false);
    } catch (error) {
      console.error("Error verifying token:", error);
    }
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  const handleSignOut = () => {
    googleLogout();
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
                  src={user.picture}
                  alt="User Image"
                  className="w-6 h-6 rounded-full object-cover"
                  referrerPolicy="no-referrer"
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
            
          </>
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default GetStartedBtn;
