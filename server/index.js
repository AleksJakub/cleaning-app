require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/cleaning-biz")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const customerRoutes = require("./routes/customers");
const authRoutes = require("./routes/auth");
app.use("/api/customers", customerRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API is up and running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
