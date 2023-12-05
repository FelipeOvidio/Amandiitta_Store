const express = require("express");
const { router } = require("./router/userRouter");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(router)

app.listen(process.env.PORT, () => {
    console.log('Star Serv');
})