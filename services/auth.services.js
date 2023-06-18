import { User } from "../models/user.model.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

// export const createNewUser = async (
//   username,
//   email,
//   password,
//   name,
//   lastName
// ) => {
//   const newUser = new User({ username, email, password, name, lastName });

//   return await newUser.save();
// };
export const createNewUser = async (newuser) => {
  const newUser = new User(newuser);

  return await newUser.save();
};

export const loginChk = async (username) => {
  const user = await User.findOne({ username });
  return user;
};

export const passwordEncrypt = async (password) => {
  const hashedPassword = CryptoJS.AES.encrypt(
    password,
    process.env.PASS_SEC
  ).toString();
  return hashedPassword;
};

export const passwordDecrypt = async (password) => {
  const hashedPassword = CryptoJS.AES.decrypt(
    password,
    process.env.PASS_SEC
  ).toString(CryptoJS.enc.Utf8);
  return hashedPassword;
};

export const generateToken = async (user) => {
  const accessToken = jwt.sign(
    {
      id: user._id,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SEC
    // { expiresIn: "900s" }
  );
  return accessToken;
};
