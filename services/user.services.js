import { User } from "../models/user.model.js";

export const updatedUserInDB = async (paramsId, body) => {
  const updateUser = User.findByIdAndUpdate(
    paramsId,
    {
      $set: body,
    },
    { new: true }
  );

  return await updateUser;
};

export const updatedUserAccountInDB = async (paramsId, body) => {
  const updateUser = User.findByIdAndUpdate(
    paramsId,
    {
      $set: body,
    },
    { new: true }
  );

  return await updateUser;
};
export const deleteUserInDB = async (paramsId) => {
  const deleteUser = User.findByIdAndDelete(paramsId);
  return await deleteUser;
};

export const findUserInDB = async (paramsId) => {
  const user = await User.findById(paramsId);
  const { password, ...others } = user._doc;
  return await others;
};

export const findUsersInDB = async () => {
  const users = User.find();
  return await users;
};

export const getUsersStatsInDB = async () => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear) - 1);
  const stats = User.aggregate([
    { $match: { createdAt: { $gte: lastYear } } },
    {
      $project: {
        month: { $month: "$createdAt" },
      },
    },
    {
      $group: {
        _id: "$month",
        total: { $sum: 1 },
      },
    },
  ]);
  return await stats;
};
