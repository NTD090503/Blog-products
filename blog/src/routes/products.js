// const express = require('express');
// const router = express.Router();

// const productController = require('../app/controllers/ProductController');


// router.use('/:slug', productController.show)
// router.use('/', productController.index)

const express = require('express');
const router = express.Router();
const productController = require('../app/controllers/ProductController'); 
const productApi = require('../app/api/ProductApi'); 
var auth_middleware = require("../app/middlewares/authMiddleware");


// Sử dụng controller trong route

router.get('/api', productApi.getAllProducts);
router.get('/api/:slug', productApi.getProductBySlug);
router.get('/:slug', productController.renderProduct);
router.get('/',auth_middleware, productController.renderProductList);
// router.get('/products/:id', productController.getProductById);
// router.post('/products', productController.createProduct);
// router.put('/products/:id', productController.updateProduct);
// router.delete('/products/:id', productController.deleteProduct);

module.exports = router; // Đảm bảo export đúng cách
