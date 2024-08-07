const express = require("express");
const cors = require("cors");
const env = require("dotenv");
const { DBconnection } = require("./database/db");
const userRoutes = require("./routes/userRoutes");
env.config()
const PORT=process.env.PORT
const app = express();
app.use(cors());
app.use(express.json());
DBconnection();

app.use("/api/user", userRoutes
);

app.listen(PORT, console.log(`Listening on port ${PORT}`));
