const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({

    name: {
        type: String,
        required: true,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        maxlength: 1024
    }
}));

exports.User = User;