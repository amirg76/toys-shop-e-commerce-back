import { Order } from "../models/order.model.js";

export const createNewOrder = async (body) => {
  const newOrder = new Order(body);
  return await newOrder.save();
};

export const updatedOrderInDB = async (paramsId, body) => {
  const updateOrder = Order.findByIdAndUpdate(
    paramsId,
    {
      $set: body,
    },
    { new: true }
  );

  return await updateOrder;
};

export const deleteOrderInDB = async (paramsId) => {
  const deleteOrder = Order.findByIdAndDelete(paramsId);
  return await deleteOrder;
};

export const findOrdersForUserInDB = async (paramsId) => {
  const orders = Order.find({ userId: paramsId });
  return await orders;
};

export const findAllOrdersInDB = async () => {
  const orders = Order.find();
  return await orders;
};

export const getOrdersIncomeInDB = async () => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth) - 1);
  const previousMonth = new Date(date.setMonth(lastMonth.getMonth) - 1);
  const income = Order.aggregate([
    { $match: { createdAt: { $gte: previousMonth } } },
    {
      $project: {
        month: { $month: "$createdAt" },
        sales: "$amount",
      },
    },
    {
      $group: {
        _id: "$month",
        total: { $sum: "$sales" },
      },
    },
  ]);
  return await income;
};
