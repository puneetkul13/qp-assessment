const groceryModel = require("../models/grocery");

exports.createGrocery = async (grocery) => {
    return await groceryModel.create(grocery);
};

exports.getAllGroceryItems = async() => {
    return await groceryModel.find();
}

exports.removeGroceryItem = async(groceryName) => {
    try {
        const groceryItem = await groceryModel.findOne({ groceryName });
        if (!groceryItem) {
          throw new Error("Grocery item not found");
        }
        await groceryItem.remove();
        console.log(`Grocery item '${groceryName}' has been removed successfully`);
        return true;
      } catch (error) {
        console.error(`Error removing grocery item: ${error.message}`);
        return false;
      }
}

exports.updateGroceryDetails = async(groceryName, updatedDetails) => {
    try {
      // Find the grocery item by its name
      const groceryItem = await groceryModel.findOne({ groceryName });

      if (!groceryItem) {
        throw new Error("Grocery item not found");
      }

      // Update details
      groceryItem.set(updatedDetails);
      await groceryItem.save();

      console.log(`Details of grocery item '${groceryName}' have been updated successfully`);
      return true;
    } catch (error) {
      console.error(`Error updating grocery details: ${error.message}`);
      return false;
    }
  }

  exports.manageInventory = async(quantityChange) => {
    try {
      const groceryItem = await groceryModel.findOne({ groceryName });
      if (!groceryItem) {
        throw new Error("Grocery item not found");
      }
      groceryItem.quantity += quantityChange;
      await groceryItem.save();
      console.log(`Inventory of grocery item '${groceryName}' has been updated successfully`);
      return true;
    } catch (error) {
      console.error(`Error managing inventory: ${error.message}`);
      return false;
    }
  }

  exports.getAvailableGroceryItems = async() => {
    return await groceryModel.find({quantity:{$gt: 0}});
}