const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const dotenv = require('dotenv');
const app = express();

dotenv.config();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/product', productRoutes)

const dbURI = process.env.MONGODB_OFFLINE;

mongoose.connect(dbURI)
    .then(() => console.log("Connected to mongodb database..."))
    .catch((err) => console.log("Could not connect to mongodb database..."));

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});




