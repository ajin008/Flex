import { OAuth2Client } from "google-auth-library";
import User from "../models/userModel";
import jwt from 'jsonwebtoken';  

const client = new OAuth2Client(process.env.)

export const googleAuthValidation = async (req, res) => {
  console.log("googleAuthValidation is triggering");
};
