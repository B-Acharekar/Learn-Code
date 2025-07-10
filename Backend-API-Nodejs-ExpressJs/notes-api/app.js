const express = require("express");
const app = express();
const noteRoutes = require("./routes/note.routes");
const connectDB = require("./config/db");

require('dotenv').config();
connectDB();

app.use(express.json());

const logger = require('./middleware/logger')
app.use(logger);

app.use('/api/notes',noteRoutes);

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
