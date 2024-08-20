const bcrypt = require('bcrypt');

class SiteController{
    home(req, res){
        res.render('home');

    }
    search(req, res){
        res.render('search');
    }
    login(req, res){
        res.render('login');
    }
    // bcrypt.compare(, AccountSchema.password, function(err, result) {
    //     if (err) throw err;
    //     if (result) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // });
}
module.exports = new SiteController;