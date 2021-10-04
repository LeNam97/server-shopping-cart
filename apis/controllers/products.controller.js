const Products = require('../models/product.model')
module.exports = {
  getProducts,
  createNewProduct,
  updateProduct,
  deleteProduct,
}

async function getProducts(req, res) {
  try {
    const products = await Products.find({})
    return res.json(products);
  } catch (err) {
    return res.status(500).json({error: err})
  }
}

async function createNewProduct(req, res) {
  try {
    const product = new Products(req.body);
    await product.save()
    return res.status(200).json({message: 'Create new Product Success!!!'})
  } catch (err) {
    return res.status(500).json({error: err})
  }
}

async function updateProduct(req, res) {
  try {
    const productNew = req.body;
    await Products.findOneAndUpdate({_id: productNew._id}, productNew)
    return res.status(200).json({message: 'Update Product Success!!!'})
  } catch (err) {
    return res.status(500).json({error: err})
  }
}

async function deleteProduct(req, res) {
  try {
    await Products.findOneAndDelete({_id: req.params.id})
    return res.status(200).json({message: 'Delete Product Success!!!'})
  } catch (err) {
    return res.status(500).json({error: err})
  }
}
