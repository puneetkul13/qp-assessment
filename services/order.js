const groceryModel = require("../models/grocery");
const userModel = require('../models/user');
const orderModel = require('../models/order');
const orderItemModel = require('../models/orderItem');

exports.createOrder = async(username, groceryItems) => {
    try {
        const user = await userModel.findOne({ username });
        if (!user) {
          throw new Error("User not found");
        }
        const order = new orderModel({
          username: user.username
        });
        const savedOrder = await order.save();
        const orderItemsPromises = groceryItems.map(async (groceryItem) => {
          const grocery = await groceryModel.findOne({ groceryName: groceryItem.groceryName });
          if(groceryItem.quantity<grocery.quantity){
            if (!grocery) {
                throw new Error(`Grocery item '${groceryItem.groceryName}' not found`);
              }
      
              const orderItem = new orderItemModel({
                groceryName: grocery.groceryName,
                quantity: groceryItem.quantity,
                orderId: savedOrder._id
              });
              return orderItem.save();
          }
          else{
            throw new Error(`Grocery item '${groceryItem.groceryName}' quantity should be less than or equal to '${grocery.total}'`);
          }
        });
  
        await Promise.all(orderItemsPromises);
  
        console.log(`Order with ID ${savedOrder.orderId} has been successfully created with ${groceryItems.length} items.`);
        return savedOrder;
      } catch (error) {
        console.error(`Error creating order: ${error.message}`);
        return null;
      }
}