import express from "express";
import ProductModel from "./model.js";

const productsRouter = express.Router();

productsRouter.post("/", async (req, res) => {
  // create a new product.
  try {
    const newProduct = new ProductModel(req.body);
    await newProduct.save();
    res.status(201).send(newProduct);
  } catch (error) {
    res.status(400).send(error);
  }
});

productsRouter.get("/", async (req, res) => {
  try {
    const product = await ProductModel.find();
    res.status(200).send(product);
  } catch (error) {
    res.status(404).send(error);
  }
});

productsRouter.get("/:id", async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    res.status(200).send(product);
  } catch (error) {
    res.status(404).send(error);
  }
});

productsRouter.put("/:id", async (req, res) => {
  try {
    const product = await ProductModel.findByIdAndUpdate(req.params.id);
    res.status(200).send(product);
  } catch (error) {
    res.status(404).send(error);
  }
});

productsRouter.delete("/:id", async (req, res) => {
  try {
    const product = await ProductModel.findByIdAndDelete(req.params.id);
    res.status(200).send(`${req.params.id} has gone for good!`);
  } catch (error) {
    res.status(404).send(error);
  }
});

export default productsRouter;
