const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/web_banhang');
        console.log("connect ok");
    } catch (error) {
        console.log("connect not ok", error);
    }
}

module.exports = { connect };
