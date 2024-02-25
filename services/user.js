const userModel = require('../models/user');
exports.getUser = async(username, password) => {
    try{
        const user = await userModel.findOne({username, password})
        return user;
    }
    catch(error){
        console.error(`Error finding user: ${error.message}`);
        return null;
    }
}


exports.getUserByUsername = async(username) => {
    try{
        const user = await userModel.findOne({username})
        return user;
    }
    catch(error){
        console.error(`Error finding user: ${error.message}`);
        return null;
    }
}