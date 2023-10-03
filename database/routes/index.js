const { Router } = require("express");

const store = require("../src/dataBase");

const router = Router();

const { validateModel } = require("../src/middlewares/index");


router.post("/:model", validateModel,  async (req, res) => {
  const { model } = req.params;

  const modelData = req.body;
  console.log(modelData)
  const newRegister = await store[model].creater(modelData);
  res.status(200).json(newRegister);
});

router.put("/:model/:id", validateModel,  async (req, res) => {
  const { model, id } = req.params;

  const dataUpdated= req.body;

  const response = await store[model].updater(id, dataUpdated);
  res.status(200).json(response);
});

router.delete("/:model/:id", validateModel, async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].delete(id);
  res.status(200).json(response);
});
router.get("/:model", validateModel, async (req, res) => {
  const { model } = req.params;
  const response = await store[model].list();
  res.status(200).json(response);
});

router.get("/:model/:id", validateModel, async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].get(id);
  res.status(200).json(response);
});

module.exports = router;
