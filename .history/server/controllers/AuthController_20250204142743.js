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
    const payload = ticket.get
  } catch (error) {}
};
