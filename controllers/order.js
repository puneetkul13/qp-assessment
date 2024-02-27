const order1 = require("../services/order")
const userService = require("../services/user")
exports.order =  async(req, res) => {
    try{
    let username = req.user.username
    let user = await userService.getUserByUsername(username)
    if(!user.roles.includes("User")){
        res.status(500).json({ error: "Action only allowed for the User" });
    }
    const {groceryItems} = req.body
    if(!groceryItems){
        res.status(500).json({ error: "groceryItems is mandatory" });
    }
    let order = await order1.createOrder(username, groceryItems)
    res.json({ data: order, status: 200 })}
    catch(err){
        res.status(500).json({ error: err.message });
    }
}