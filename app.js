const express = require("express");
const app = express();
const authenticateJWT = require("./middlewares/index");
// console.log(url)
app.use('/api/groceries/protected', authenticateJWT);
//middleware
app.use(express.json());

app.listen(3001, async () => {
  console.log("Server is running on port 3001");
});

const mongoose = require("mongoose");
//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CRUD",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);
const groceryRoutes = require("./routes/groceryRoutes");
app.use("/api/groceries", groceryRoutes);

module.exports = app;
