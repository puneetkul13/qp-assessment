const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    username: {
        type: String,
        unique: true,
        ref: 'User'
    },
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
        unique: true
    }
});

module.exports = mongoose.model("Order", orderSchema);