const User = require("../../model/User/User");

const categoryCreateCtrl = async (req, res) => {
  try {
    res.json({ status: "success", data: "Category created" });
  } catch (error) {
    res.json(error.message);
  }
};

const categoryDetailsCtrl = async (req, res) => {
  try {
    res.json({ status: "success", data: "Category Details" });
  } catch (error) {
    res.json(error.message);
  }
};

const categoriesCtrl = async (req, res) => {
  try {
    res.json({ status: "success", data: "All Categories" });
  } catch (error) {
    res.json(error.message);
  }
};

const categoryDeleteCtrl = async (req, res) => {
  try {
    res.json({ status: "success", data: "Delete Category" });
  } catch (error) {
    res.json(error.message);
  }
};

const categoryUpdateCtrl = async (req, res) => {
  try {
    res.json({ status: "success", data: "Category Update" });
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = {
  categoryCreateCtrl,
  categoryDetailsCtrl,
  categoriesCtrl,
  categoryDeleteCtrl,
  categoryUpdateCtrl,
};
