const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const zoneRoutes = require("./routes/zoneRoutes");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const rateCardRoutes = require("./routes/rateCardRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/zones",zoneRoutes);
app.use("/api/ratecards",rateCardRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

const startServer = async () => {
  await connectDB();

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`);
  });
};

startServer();