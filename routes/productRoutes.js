const express = require('express');
const productController = require('../controller/productController');
const router = express.Router();

router.route('/create-Product').post(productController.createProduct);
router.route('/getAllProduct').get(productController.getAllProduct);
router.route('/updateProduct/:id').patch(productController.updateProduct);
router.route('/deleteProduct/:id').delete(productController.deleteProduct);

module.exports = router;