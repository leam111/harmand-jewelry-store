const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const protect = require("../middleware/authMiddleware");
const translateToFrench = require("../utils/translate");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ error: "Invalid product ID format" });
    }
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.post("/", protect, async (req, res) => {
  try {
    const { name, price, description, category, imageUrl } = req.body;

    const nameFr = await translateToFrench(name);
    const descriptionFr = await translateToFrench(description);

    const newProduct = new Product({ name, nameFr, price, description, descriptionFr, category, imageUrl });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ error: messages.join(", ") });
    }
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.put("/:id", protect, async (req, res) => {
  try {
    const { name, price, description, category, imageUrl } = req.body;

    const nameFr = await translateToFrench(name);
    const descriptionFr = await translateToFrench(description);

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, nameFr, price, description, descriptionFr, category, imageUrl },
      { returnDocument: 'after', runValidators: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(updatedProduct);
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ error: messages.join(", ") });
    }
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.delete("/:id", protect, async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    if (error.name === "CastError") {
      return res.status(400).json({ error: "Invalid product ID format" });
    }
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;