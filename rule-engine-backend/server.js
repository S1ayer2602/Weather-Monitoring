const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const ruleRoutes = require("./routes/rules");
const weatherRoutes = require("./routes/weather");
const alertRoutes = require("./routes/alerts");

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb+srv://dandamudilokesh1234:fjnaYAzHOtKpzTjW@cluster0.xhmq9op.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/rules", ruleRoutes);
app.use("/api/weather", weatherRoutes);
app.use("/api/alerts", alertRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
