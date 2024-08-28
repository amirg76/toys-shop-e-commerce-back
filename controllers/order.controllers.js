import {
  createNewOrder,
  updatedOrderInDB,
  deleteOrderInDB,
  findOrdersForUserInDB,
  findAllOrdersInDB,
  getOrdersIncomeInDB,
  // findAllProductsInDB,
} from "../services/order.services.js";

export const createOrder = async (req, res) => {
  try {
    const newOrder = await createNewOrder(req.body.arg);

    res.status(201).json(newOrder);
  } catch (error) {
    res.send(error.message);
  }
};

export const updateOrder = async (req, res) => {
  try {
    const newOrderUpdate = await updatedOrderInDB(req.params.id, req.body);
    // res.status(200).json(newOrderUpdate);
    res.status(200).json("Order has been deleted...");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const deleteOrder = async (req, res) => {
  try {
    await deleteOrderInDB(req.params.id);
    res.status(200).json("Order has been deleted...");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getOrdersForUser = async (req, res) => {
  try {
    const Orders = await findOrdersForUserInDB(req.params.id);
    res.status(200).json(Orders);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const Orders = await findAllOrdersInDB();
    res.status(200).json(Orders);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
export const getAllOrdersIncome = async (req, res) => {
  try {
    const income = await getOrdersIncomeInDB();
    res.status(200).json(income);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
