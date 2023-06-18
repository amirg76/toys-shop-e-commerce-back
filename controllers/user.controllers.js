import {
  updatedUserInDB,
  updatedUserAccountInDB,
  deleteUserInDB,
  findUserInDB,
  findUsersInDB,
  getUsersStatsInDB,
} from "../services/user.services.js";
import { passwordEncrypt } from "../services/auth.services.js";

export const updateUser = async (req, res) => {
  if (req.body.password) {
    req.body.password = await passwordEncrypt(req.body.password);
  }
  try {
    const newUserUpdate = await updatedUserInDB(req.params.id, req.body);

    res.status(200).json(newUserUpdate);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
export const deleteUser = async (req, res) => {
  try {
    await deleteUserInDB(req.params.id);
    res.status(200).json(null);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
export const getUser = async (req, res) => {
  try {
    const user = await findUserInDB(req.params.id);
    const { _id, isAdmin, name, lastName, email, mobile } = user;
    res.status(200).json({ _id, isAdmin, name, lastName, email, mobile });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await findUsersInDB();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getStats = async (req, res) => {
  try {
    const stats = await getUsersStatsInDB();
    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const updateUserAccount = async (req, res) => {
  if (req.body.password) {
    req.body.password = await passwordEncrypt(req.body.password);
  }
  if (req.body.arg.password) {
    req.body.arg.password = await passwordEncrypt(req.body.arg.password);
  }

  try {
    const UserUpdateAccount = await updatedUserAccountInDB(
      req.params.id,
      req.body.arg
    );

    res.status(200).json(UserUpdateAccount);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
