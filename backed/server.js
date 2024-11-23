const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./Routes/userRoutes"); // Correct import for routes

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/user", userRouter);

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://user1:user1@suthra.t0ip3.mongodb.net/mydatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
