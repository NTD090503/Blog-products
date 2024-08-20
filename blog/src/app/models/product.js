const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId, // Đặt ID là ObjectId
    name: { type: String, required: true }, // Tên sản phẩm
    description: { type: String, required: true }, // Mô tả sản phẩm
    image: { type: String, required: true }, // URL hình ảnh sản phẩm
    cost: { type: Number, required: true } // Giá sản phẩm
});

// Tạo model Product từ schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
