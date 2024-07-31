const express = require("express");
require("./config/serverconfig");
const { PORT } = require("./config/serverconfig");
const apiroutes = require("./routes/index");
const app = express();

app.use(express.json())
app.use("/api", apiroutes);
app.listen(PORT, () => {
  console.log("server is running in port", PORT);
});
