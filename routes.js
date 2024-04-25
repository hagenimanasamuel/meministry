const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('Home/index');
});

router.get('/auth/login', (req, res) => {
    res.render('Admin/login');
});

router.get('/admin', (req, res) => {
    res.render('Admin/index');
});

module.exports = router;
