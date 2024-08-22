

const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    username: { type: String, required: true }, 
    email: { type: String, required: true }, 
    password: { type: String, required: true }, 
});

AccountSchema.pre('save', function(next) {
    if (!this.isModified('password')) return next();

    bcrypt.hash(this.password, 10, (err, hashedPassword) => {
        if (err) return next(err);
        this.password = hashedPassword;
        next();
    });
});



const Account = mongoose.model('Account', AccountSchema, 'account');
//const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;

