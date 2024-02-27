const express = require("express")
const {createGrocery, getAllGrocery, removeGroceryItem, updateGroceryItems, manageInventoryLevels} =  require("../controllers/groceryController");
const {login} =  require("../controllers/login");
const {order} =  require("../controllers/order");
const router = express.Router();

router.route("/protected/create").post(createGrocery)
router.route("/protected/getAllGroceries").get(getAllGrocery)
router.route("/protected/removeGrocery").delete(removeGroceryItem)
router.route("/protected/updateGrocery").post(updateGroceryItems)
router.route("/protected/manageInventory").post(manageInventoryLevels)
router.route("/login").post(login)
router.route("/protected/order").post(order)
module.exports = router