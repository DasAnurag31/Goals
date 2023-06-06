const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const goals = require('./router/goals');
const app = express();
const { errorHandler } = require('./middlewares/errorMiddleware')
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", goals);
app.use(errorHandler)

app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });
