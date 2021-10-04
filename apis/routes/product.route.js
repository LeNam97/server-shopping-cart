const express = require('express');
const productCtrl = require('../controllers/products.controller.js')
const router = express.Router();
module.exports = router;

router.route('/')
  .get(productCtrl.getProducts)
  .post(productCtrl.createNewProduct)
  .put(productCtrl.updateProduct)
router.route('/:id')
  .delete(productCtrl.deleteProduct)
