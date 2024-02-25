const express = require("express")
const {createGrocery, getAllGrocery} =  require("../controllers/groceryController");
const {login} =  require("../controllers/login");
const router = express.Router();

router.route("/protected/create").post(createGrocery)
router.route("/protected/getAllGroceries").get(getAllGrocery)
router.route("/login").post(login)
module.exports = router