import {
  createNewCart,
  updatedCartInDB,
  deleteCartInDB,
  findCartInDB,
  findCartsInDB,
  // findCatProductsInDB,
  // findAllProductsInDB,
} from "../services/cart.services.js";

export const createCart = async (req, res) => {
  try {
    const newCart = await createNewCart(req.body.arg);

    res.status(201).json(newCart);
  } catch (error) {
    res.send(error.message);
  }
};

export const updateCart = async (req, res) => {
  try {
    const newCartUpdate = await updatedCartInDB(req.params.id, req.body.arg);

    console.log(newCartUpdate);

    // res.status(200).json(newCartUpdate);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const deleteCart = async (req, res) => {
  try {
    await deleteCartInDB(req.params.id);
    res.status(200).json("Cart has been deleted...");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getCart = async (req, res) => {
  try {
    console.log("getCart router");
    console.log(req.params.userId);
    const cart = await findCartInDB(req.params.userId);
    res.status(200).json(cart);
    // res.status(200).json({ cart: "CartTest" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getCartByUserId = async (req, res) => {
  try {
    const cart = await findCartInDB(req.params.userId);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
export const getAllCarts = async (req, res) => {
  try {
    const Carts = await findCartsInDB();
    res.status(200).json(Carts);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
