const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000;
const connectDB = require('./config/db')
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/tracker', require('./routes/tracker'));

app.use(errorHandler)

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});


