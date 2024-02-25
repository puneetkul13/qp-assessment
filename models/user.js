const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    firstName: String,
    lastName: String,
    roles: Array,
    password: String,
});

module.exports = mongoose.model("User", userSchema);