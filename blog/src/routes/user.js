const express = require('express');
const router = express.Router();
const UserApi = require('../app/api/UserApi'); 
const userController = require('../app/controllers/UserController');

router.post('/api/login', UserApi.login);

router.get('/login', userController.login);
// router.get('/:slug', productController.renderProduct);
//router.post('/login', userController.login);

module.exports = router;