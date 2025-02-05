import { OAuth2Client } from "google-auth-library";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleAuthValidation = async (req, res) => {
  console.log("googleAuthValidation is triggering");
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: "Token is missing" });
  }

  try {
    // Verifying token with Google ID
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    // Get the user data from the token
    const payload = ticket.getPayload();
    const { email, name, image } = payload;

    // Checking if the user already exists
    let user = await User.findOne({ email });

    if (!user) {
      // If user doesn't exist, create a new user
      user = new User({
        email,
        name,
        image,
      });
      await user.save(); // Fix: Use user.save() instead of User.save()
    }

    // Generating JWT token for the user
    const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    res.status(200).json({
      message: "User authenticated successfully",
      user: {
        email: user.email,
        name: user.name,
        picture: user.image, // Fix: Use user.image instead of user.picture
      },
      token: jwtToken, 
    });
  } catch (error) {
    console.error("Error during Google authentication:", error);
    res.status(500).json({ message: "Server error during authentication" });
  }
};
