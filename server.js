const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const mysql = require("mysql2")

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Middleware for EJS partials
app.use((req, res, next) => {
    res.locals.partials = {
        header: 'partials/header', // Example partial file
        footer: 'partials/footer'  // Example partial file
        // Add more partials as needed
    };
    next();
});

// Routes
const routes = require('./routes');
app.use('/', routes);

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
})

connection.connect((err, res) => {
    if(err) throw err;
    console.log("App connected successfully to the server");
})

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
