const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const grocerySchema = new Schema({
    groceryName: {
        type: String,
        unique: true
    },
    price: Number,
    quantity: Number
});

module.exports = mongoose.model("Grocery", grocerySchema);