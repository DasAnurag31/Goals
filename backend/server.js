const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const goals = require('./router/goals');
const app = express();
const PORT = process.env.PORT || 8000;

app.use("/api/goals", goals);

app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });
