const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const cors = require("cors");
const authRoute = require("./routes/auth");
require("dotenv").config();
require("./passport");

const app = express();

app.use(cookieSession({
  name: "session",
  keys: ["lama"],
  maxAge: 24 * 60 * 60 * 1000, // Correct maxAge to 24 hours
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json()); // Added to handle JSON payloads

app.use("/auth", authRoute); // Ensure authRoute is properly used

app.listen(5003, () => {
  console.log("Server is running on port 5003");
});
