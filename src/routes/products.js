express = require("express");
router = express.Router();
productsController = require("../controllers/productsController");

router.get("/", productsController.productCart);

module.exports = router;