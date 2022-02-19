const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware')
const FirebaseMiddleware = require('./middleware/firebaseMiddleware')
const port = process.env.PORT || 5000;
const connectDB = require('./config/db')
const cors = require('cors')

const app = express();

app.use(cors());

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(FirebaseMiddleware.checkIfAuthenticated)

app.use('/api/tracker', require('./routes/tracker'));

app.use(errorHandler)

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});


