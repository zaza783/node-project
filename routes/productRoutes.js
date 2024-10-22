const express = require('express');
const productController = require('../controller/productController');
const router = express.Router();

router.route('/create-Product').post(productController.createProduct);
router.route('/get-allProduct').get(productController.getAllProduct);
router.route('/updateProduct/:id').patch(productController.updateProduct);
router.route('/deleteBooking/:id').delete(productController.deleteProduct);

module.exports = router;