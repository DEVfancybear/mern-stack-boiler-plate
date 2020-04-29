const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
//Connect database
connectDB();
app.get("/", (req, res) => res.send("Welcome to database"));
// Unlock all cors
app.use(cors());
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));


