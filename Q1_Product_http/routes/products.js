const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// GET route handler to retrieve top n products for a specific company and category within a price range
router.get('/companies/:company/categories/:category/products/top-:nminPrice-:minPrice&maxPrice-:maxPrice', async (req, res) => {
    const { company, category, n, minPrice, maxPrice } = req.params;

    try {
        const products = await Product.find({
            company,
            category,
            price: { $gte: minPrice, $lte: maxPrice }
        }).limit(parseInt(n));

        res.send(products.map(product => ({
            productName: product.name,
            price: product.price,
            rating: product.rating,
            discount: product.discount,
            availability: product.availability
        })));
    } catch (err) {
        res.status(500).send(err);
    }
});

// POST route handler to create a new product
router.post('/companies/:company/categories/:category/products', async (req, res) => {
    try {
        const productData = req.body;
        const product = new Product(productData);
        await product.save();
        res.status(201).send(product);
    } catch (err) {
        res.status(400).send(err);
    }
});

// PUT route handler to update a product by ID
router.put('/companies/:company/categories/:category/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).send();
        }
        res.send(updatedProduct);
    } catch (err) {
        res.status(400).send(err);
    }
});

// DELETE route handler to delete a product by ID
router.delete('/companies/:company/categories/:category/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).send();
        }
        res.send(deletedProduct);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
