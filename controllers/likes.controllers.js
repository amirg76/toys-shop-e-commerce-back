import {
  createNewLike,
  deleteLikesInDB,
  findLikesForUserInDB,
} from "../services/likes.services.js";

export const createLike = async (req, res) => {
  try {
    const newLike = await createNewLike(req.body.arg);

    res.status(201).json(newLike);
  } catch (error) {
    res.send(error.message);
  }
};

export const deleteLike = async (req, res) => {
  try {
    await deleteLikesInDB(req.body.arg);

    res.status(200).json(req.body.arg);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getLikesForUser = async (req, res) => {
  try {
    const Likes = await findLikesForUserInDB(req.params.id);
    res.status(200).json(Likes);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
