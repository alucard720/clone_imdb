const express = require("express");
const { getItems,getItem,CreateItems,UpdateItems,DeleteItems } = require("../controllers/storageController");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const { validatorgetItem } = require("../validators/storageVal");


router.get("/", getItems );
router.get("/:id", validatorgetItem,getItem );
router.post("/", uploadMiddleware.single("myfile"),CreateItems)
router.delete("/:id",validatorgetItem, DeleteItems);

module.exports = router;   
  