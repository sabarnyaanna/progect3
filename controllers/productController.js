import { Product } from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = new Product({
      ...req.body,
      id: req.body.id || Date.now(),
    });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const filter = isNaN(Number(id)) ? { _id: id } : { id: Number(id) };
    const updated = await Product.findOneAndUpdate(filter, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return res.status(404).json({ message: "Flower not found" });
    }
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const filter = isNaN(Number(id)) ? { _id: id } : { id: Number(id) };
    const deleted = await Product.findOneAndDelete(filter);
    if (!deleted) {
      return res.status(404).json({ message: "Flower not found" });
    }
    res.json({ message: "Flower deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};