const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderItemSchema = new Schema({
  groceryName: {
    type: String,
    unique: true,
    ref: 'Grocery'
  },
  quantity: Number,
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
    ref: 'Order'
  }
});

module.exports = mongoose.model("OrderItem", orderItemSchema);