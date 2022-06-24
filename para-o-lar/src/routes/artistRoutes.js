const express = require("express");
const { route } = require("../app");
const router = express.Router();

const controller = require("../controller/artistController");

router.get("/all", controller.getAll);
router.get("/:id", controller.findById);

router.post("/create", controller.createArtist);

router.put("/update/:id", controller.updateArtist);

router.delete("/delete/:id", controller.deleteArtist);

module.exports = router;