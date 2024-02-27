const groceryService = require("../services/grocery")
const userService = require("../services/user")
exports.createGrocery = async (req, res) => {
    let username = req.user.username
    let user = await userService.getUserByUsername(username)
    if(!user.roles.includes("Admin")){
        res.status(500).json({ error: "Action only allowed for the admin" });
    }
    const { groceryName, quantity, price } = req.body
    if (!groceryName) {
        res.status(500).json({ error: "Name is mandatory" });
    }
    if (!quantity) {
        res.status(500).json({ error: "Quantity is mandatory" });
    }
    if (!price) {
        res.status(500).json({ error: "price is mandatory" });
    }
    const grocery = await groceryService.createGrocery({ groceryName, quantity, price })
    res.json({ data: grocery, status: 200 })
}

exports.getAllGrocery = async (req, res) => {
    try {
        let username = req.user.username
        let user = await userService.getUserByUsername(username)
        if(!user.roles.includes("Admin")){
            const groceries = await groceryService.getAvailableGroceryItems()
            res.json({ data: groceries, status: 200 })
        }
        const groceries = await groceryService.getAllGroceryItems()
        res.json({ data: groceries, status: 200 })
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.removeGroceryItem = async(req, res) => {
    try{
    let username = req.user.username
    let user = await userService.getUserByUsername(username)
    if(!user.roles.includes("Admin")){
        res.status(500).json({ error: "Action only allowed for the admin" });
    }
    const {groceryName} = req.body
    if(!groceryName){
        res.status(500).json({ error: "Name is mandatory" });
    }
    let grocery = await groceryService.removeGroceryItem(groceryName)
    
    res.json({ data: grocery, status: 200 })}
    catch(err){
        res.status(500).json({ error: err.message });
    }
}

exports.updateGroceryItems = async(req, res) => {
    try{
    let username = req.user.username
    let user = await userService.getUserByUsername(username)
    if(!user.roles.includes("Admin")){
        res.status(500).json({ error: "Action only allowed for the admin" });
    }
    const {groceryName, price, newGroceryName} = req.body
    if(!groceryName){
        res.status(500).json({ error: "Name is mandatory" });
    }
    let grocery
    if(price && newGroceryName){
        grocery = await groceryService.updateGroceryDetails(groceryName, {price, newGroceryName})}
    if(!price && newGroceryName){
        grocery = await groceryService.updateGroceryDetails(groceryName, {newGroceryName})
    }
    if(price && !newGroceryName){
        grocery = await groceryService.updateGroceryDetails(groceryName, {price})
    }
    if(!price && !newGroceryName){
        grocery = await groceryService.updateGroceryDetails(groceryName, {})
    }
    res.json({ data: grocery, status: 200 })}
    catch(err){
        res.status(500).json({ error: err.message });
    }
}

exports.manageInventoryLevels = async(req, res) => {
    try{
        let username = req.user.username
        let user = await userService.getUserByUsername(username)
        if(!user.roles.includes("Admin")){
            res.status(500).json({ error: "Action only allowed for the admin" });
        }
        let {groceryName, quantityChange} = req.body
        if(!groceryName){
            res.status(500).json({ error: "grocery name is mandatory" });
        }
        if(!quantityChange){
            res.status(500).json({ error: "quantity change is mandatory" });
        }
        let grocery= await groceryService.manageInventory(groceryName, quantityChange)
        res.json({ data: grocery, status: 200 })}
    
    catch(err){
        res.status(500).json({ error: err.message });
    }}
