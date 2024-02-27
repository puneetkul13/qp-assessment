const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    username: {
        type: String,
    },
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        default: new mongoose.Types.ObjectId(),
        unique: true
    }
});

module.exports = mongoose.model("Order", orderSchema);