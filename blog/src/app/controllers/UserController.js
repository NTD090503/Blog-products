// const bcrypt = require('bcrypt');

const axios = require('axios');

exports.login = async (req, res) => {
    // try {
    //     const response = await axios.post('http://localhost:3000/user/api', req.body);
    //     const user = response.data;
    //     console.log(user);
    //     if(!user)
    //     {
    //         res.redirect('/products');
    //     }
    //     else {
    //         return;
    //     }
    //     // req.render
    //     // res.redirect('/dashboard');
    // } catch (error) {
    //     res.status(500).send('Error ');
    // }
    res.render("login");
};
exports.logout = async (req, res) => {
    req.session.destroy(function(err) {
        if (err) {
            return res.status(500).send('Không thể hủy session');
        }
        res.redirect('/');
    });

};
// module.exports = new UserController;