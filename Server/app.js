const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const exchangeRoutes = require("./Routes/exchangeRoutes");
const mongoose = require("mongoose");
const cors = require("cors")
const bodyParser = require("body-parser")



dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// Routes

app.use("/exchange", exchangeRoutes);

// Mongoose Seteup
const PORT = process.env.PORT || 5001;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server Port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });
