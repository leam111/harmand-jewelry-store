require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");
const adminRoutes = require("./routes/adminRoutes");
const cors = require('cors');
const uploadRoutes = require('./routes/uploadRoutes'); // NEW

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);
app.use('/api/upload', uploadRoutes); 
app.use("/api/admin", adminRoutes);








app.listen(5000, () => {
  console.log("server is running on port 5000");
});
