require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product-route");
const errorMiddleware = require("./middleware/error-middleware");
const cors = require("cors");
const app = express();

const URI = process.env.MONG_URL;
const corsOptions = {
  origin: 'https://example.com',
  optionssSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello API");
});

app.use(errorMiddleware);

mongoose.set("strictQuery", false);
mongoose
  .connect(URI)
  .then(() => {
    console.log("connected to MongoDB");
    app.listenerCount(3000, () => {
      console.log("Node API app is running on port 3000");
    });
  })
  .catch((err) => {
    console.error(err);
  });
