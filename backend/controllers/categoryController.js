import Category from "../models/categoryModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  const existingCategory = await Category.findOne({ name });

  if (existingCategory) {
    return res.status(409).json({ error: "Category already exists" });
  }

  const category = new Category({ name });
  await category.save();
  res.status(201).json(category);
});

const updateCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const { categoryId } = req.params;

  const category = await Category.findById(categoryId);

  if (!category) {
    return res.status(404).json({ error: "Category not found" });
  }

  category.name = name;
  const updatedCategory = await category.save();
  res.status(200).json(updatedCategory);
});

const removeCategory = asyncHandler(async (req, res) => {
  const { categoryId } = req.params;

  const removedCategory = await Category.findByIdAndDelete(categoryId);

  if (!removedCategory) {
    return res.status(404).json({ error: "Category not found" });
  }

  res.status(200).json(removedCategory);
});

const listCategory = asyncHandler(async (req, res) => {
  const categories = await Category.find({});
  res.status(200).json(categories);
});

const readCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const category = await Category.findById(id);

  if (!category) {
    return res.status(404).json({ error: "Category not found" });
  }

  res.status(200).json(category);
});

export {
  createCategory,
  updateCategory,
  removeCategory,
  listCategory,
  readCategory,
};
