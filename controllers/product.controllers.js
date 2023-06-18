import {
  createNewProduct,
  updatedProductInDB,
  deleteProductInDB,
  findProductInDB,
  findNewProductsInDB,
  findCatProductsInDB,
  findAllProductsInDB,
  createProducts,
  deleteProducts,
  findProducts,
} from "../services/product.services.js";

export const createProduct = async (req, res) => {
  try {
    const newProduct = await createNewProduct(req.body);

    res.status(201).json(newProduct);
  } catch (error) {
    res.send(error.message);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const newProductUpdate = await updatedProductInDB(req.params.id, req.body);
    res.status(200).json(newProductUpdate);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await deleteProductInDB(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await findProductInDB(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getAllProduct = async (req, res) => {
  try {
    const newQuery = req.query.new;
    const categoryQuery = req.query.category;
    let products;
    if (newQuery) products = await findNewProductsInDB();
    else if (categoryQuery) products = await findCatProductsInDB(categoryQuery);
    else products = await findAllProductsInDB();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const createAllProducts = async (req, res) => {
  try {
    const savedProducts = await createProducts();

    res.send(" Succesfully created ! New data: " + savedProducts);
  } catch (error) {
    res.send(error.message);
  }
};

export const deleteAllProducts = async (req, res) => {
  try {
    const savedProducts = await deleteProducts();
    res.send(savedProducts);
  } catch (error) {
    res.send(error.message);
  }
};

export const querySearchProducts = async (req, res) => {
  try {
    const findProductsResults = await findProducts(req.query.name);
    res.send(findProductsResults);
  } catch (error) {
    res.send(error.message);
  }
};
