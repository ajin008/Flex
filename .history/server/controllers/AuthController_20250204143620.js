import { OAuth2Client } from "google-auth-library";
import User from "../models/userModel";
import jwt from "jsonwebtoken";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleAuthValidation = async (req, res) => {
  console.log("googleAuthValidation is triggering");
  const { taken } = req.body;

  if (!token) {
    return res.status(400).json({ message: "token is missing" });
  }
  try {
    //verifying token with google id
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    // get the userdata from the token
    const payload = ticket.getPayload();
    const { email, name, image } = payload;

    // checking already existing user
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        email,
        name,
        image,
      });
      await User.save();
    }

    // generating jwt token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    res.status(200).json({
        message:'User authenticated successfully'
        user:{
            
        }
    })
  } catch (error) {}
};
