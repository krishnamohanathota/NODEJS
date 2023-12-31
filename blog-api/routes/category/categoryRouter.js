const express = require("express");
const {
  categoryCreateCtrl,
  categoryDetailsCtrl,
  categoriesCtrl,
  categoryDeleteCtrl,
  categoryUpdateCtrl,
} = require("../../controller/category/categoryController");

const categoryRouter = express.Router();

//POST/api/v1/category
categoryRouter.post("/", categoryCreateCtrl);

//GET/api/v1/category/:id
categoryRouter.get("/:id", categoryDetailsCtrl);

//GET/api/v1/category
categoryRouter.get("/", categoriesCtrl);

//DELETE/api/v1/category/:id
categoryRouter.delete("/:id", categoryDeleteCtrl);

//PUT/api/v1/category/:id
categoryRouter.put("/:id", categoryUpdateCtrl);

module.exports = categoryRouter;
