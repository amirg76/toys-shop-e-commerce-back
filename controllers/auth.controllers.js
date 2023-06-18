import {
  createNewUser,
  loginChk,
  passwordEncrypt,
  passwordDecrypt,
  generateToken,
} from "../services/auth.services.js";

export const register = async (req, res) => {
  try {
    const { username, email, mobile, password, name, lastName } = req.body;

    const hashedPassword = await passwordEncrypt(password);
    const user = await createNewUser({
      username,
      email,
      password: hashedPassword,
      name,
      lastName,
      mobile,
    });

    const _id = user._id;
    const token = await generateToken(user);

    res
      .status(201)
      .json({ user: { _id, name, lastName, email, mobile }, token });
  } catch (error) {
    res.send(error.message);
  }
};

export const login = async (req, res) => {
  try {
    const user = await loginChk(req.body.username);

    if (!user) {
      res.status(401).json("Wrong details");
      return;
    }

    const hashedPassword = await passwordDecrypt(user.password);

    if (hashedPassword != req.body.password) {
      res.status(401).json("Wrong details");
      return;
    }
    const { _id, isAdmin, name, lastName, email, mobile } = user;

    const token = await generateToken(user);
    res
      .status(200)
      .json({ user: { _id, isAdmin, name, lastName, email, mobile }, token });
  } catch (error) {
    res.send(error.message);
  }
};
