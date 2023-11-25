const express = require("express");

const app = express();

const PORT = process.env.PORT || 3333;

const user_routes = require(".routes/user_routes");

app.use(express.json());

app.use("/auth", user_routes);

app.listen(PORT, () => console.log("Server listening on port", PORT));
