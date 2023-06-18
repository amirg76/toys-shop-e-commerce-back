import { Cart } from "../models/cart.model.js";

export const createNewCart = async (body) => {
  const newCart = new Cart(body);
  return await newCart.save();
};

export const updatedCartInDB = async (paramsId, body) => {
  const updateCart = Cart.findByIdAndUpdate(
    paramsId,
    {
      $set: body,
    },
    { new: true }
  );

  return await updateCart;
};

export const deleteCartInDB = async (paramsId) => {
  const deleteCart = Cart.findByIdAndDelete(paramsId);
  return await deleteCart;
};

export const findCartInDB = async (paramsId) => {
  const cart = Cart.findOne({ userId: paramsId });
  return await cart;
};

export const findCartsInDB = async () => {
  const Carts = Cart.find();
  return await Carts;
};
