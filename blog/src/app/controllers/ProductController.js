
const axios = require('axios');

exports.renderProductList = async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3000/products/api');
        const products = response.data;
        res.render('products', { products });
    } catch (error) {
        res.status(500).send('Error rendering products');
    }
};



// GET: Lấy một sản phẩm theo ID và trả về view
exports.renderProduct = async (req, res) => {
    const slug = req.params.slug; // Lấy slug từ tham số URL
    try {
        const response = await axios.get(`http://localhost:3000/products/api/${slug}`);
        const product = response.data;
        res.render('product_detail', { product }); // Render view với một sản phẩm
    } catch (error) {
        console.error('Error fetching product:', error.message); // Ghi lỗi ra console để dễ debug
        res.status(500).render('error', { message: 'Error rendering product', error: error.message }); // Render view lỗi với thông tin chi tiết
    }
};

// POST: Tạo một sản phẩm mới và trả về view sau khi tạo
exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).render('productCreated', { product });
    } catch (error) {
        res.status(500).render('error', { message: 'Error creating product', error });
    }
};

// PUT: Cập nhật một sản phẩm theo ID và trả về view sau khi cập nhật
exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            return res.status(404).render('error', { message: 'Product not found' });
        }
        res.status(200).render('productUpdated', { product });
    } catch (error) {
        res.status(500).render('error', { message: 'Error updating product', error });
    }
};

// DELETE: Xóa một sản phẩm theo ID và trả về view sau khi xóa
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).render('error', { message: 'Product not found' });
        }
        res.status(200).render('productDeleted', { message: 'Product deleted' });
    } catch (error) {
        res.status(500).render('error', { message: 'Error deleting product', error });
    }
};
