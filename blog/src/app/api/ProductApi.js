


// // Tạo một product mới (Create)
// app.post('/products', async (req, res) => {
//     try {
//         const newProduct = new Product(req.body);
//         await newProduct.save();
//         res.status(201).json(newProduct);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// // Lấy tất cả các products (Read)
// app.get('/products', async (req, res) => {
//     try {
//         const products = await Product.find();
//         res.json(products);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // Cập nhật một product theo ID (Update)
// app.put('/products/:id', async (req, res) => {
//     try {
//         const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!product) {
//             return res.status(404).json({ message: 'Product not found' });
//         }
//         res.json(product);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// // Xóa một product theo ID (Delete)
// app.delete('/products/:id', async (req, res) => {
//     try {
//         const product = await Product.findByIdAndDelete(req.params.id);
//         if (!product) {
//             return res.status(404).json({ message: 'Product not found' });
//         }
//         res.json({ message: 'Product deleted' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

const Product = require('../models/product');

// GET: Lấy tất cả sản phẩm và trả về view

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// // GET: Lấy một sản phẩm theo ID và trả về view
exports.getProductBySlug = async (req, res) => {
    try {
        const slug = req.params.slug; // Lấy slug từ tham số URL
        const product = await Product.findOne({ slug: slug }); // Tìm sản phẩm theo slug
        if (!product) {
            return res.status(404).render('error', { message: 'Product not found' }); // Hiển thị lỗi nếu không tìm thấy sản phẩm
        }
        res.json(product); // Trả về sản phẩm dưới dạng JSON
    } catch (error) {
        res.status(500).render('error', { message: 'Error getting product', error: error.message }); // Xử lý lỗi
    }
};

// // POST: Tạo một sản phẩm mới và trả về view sau khi tạo
// exports.createProduct = async (req, res) => {
//     try {
//         const product = new Product(req.body);
//         await product.save();
//         res.status(201).render('productCreated', { product });
//     } catch (error) {
//         res.status(500).render('error', { message: 'Error creating product', error });
//     }
// };

// // PUT: Cập nhật một sản phẩm theo ID và trả về view sau khi cập nhật
// exports.updateProduct = async (req, res) => {
//     try {
//         const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!product) {
//             return res.status(404).render('error', { message: 'Product not found' });
//         }
//         res.status(200).render('productUpdated', { product });
//     } catch (error) {
//         res.status(500).render('error', { message: 'Error updating product', error });
//     }
// };

// // DELETE: Xóa một sản phẩm theo ID và trả về view sau khi xóa
// exports.deleteProduct = async (req, res) => {
//     try {
//         const product = await Product.findByIdAndDelete(req.params.id);
//         if (!product) {
//             return res.status(404).render('error', { message: 'Product not found' });
//         }
//         res.status(200).render('productDeleted', { message: 'Product deleted' });
//     } catch (error) {
//         res.status(500).render('error', { message: 'Error deleting product', error });
//     }
// };

