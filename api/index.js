const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
});