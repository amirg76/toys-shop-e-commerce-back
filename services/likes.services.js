import { Like } from "../models/likes.model.js";

export const createNewLike = async (body) => {
  const newLike = new Like(body);
  return await newLike.save();
};

export const deleteLikesInDB = async (paramsId) => {
  const deleteLike = Like.findByIdAndDelete(paramsId);
  return await deleteLike;
};

export const findLikesForUserInDB = async (paramsId) => {
  const likes = Like.find({ userId: paramsId });
  return await likes;
};
