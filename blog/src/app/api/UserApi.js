//const Product = require('../models/product');
const User = require('../models/account');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const session = require('express-session');
// exports.register = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         // Mã hóa mật khẩu
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = new User({ email, password: hashedPassword });

//         await newUser.save();
//         res.status(201).json({ message: 'User registered successfully' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

exports.login = async (req, res) => {
    const { email, password } = req.body;

  //  const { email, password } = req.body;
    console.log({ email, password });
    try {
        const user = await User.findOne({ email });
        console.log("abc "+user);
        if (!user) {
            return res.status(400).json({ message: 'User Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        // const hashedPassword = await bcrypt.hash(password, 10);
        // console.log('Hashed Password: ', hashedPassword);
        if (!isMatch) {
            return res.status(400).json({ message: 'Pass Invalid credentials' });
        }

        // Tạo JWT token
        const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '1h' });
        // res.session.User = user.username;
        //console.log( res.session.User);
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

